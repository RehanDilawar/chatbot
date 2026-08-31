import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

// Helper to extract the API key dynamically from process.env or the root .env file
const getApiKey = () => {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  let urlStr = process.env.VITE_API_URL;

  // Fallback: Read the .env file in the root directory manually during local development
  if (!urlStr) {
    try {
      const envPath = path.join(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/VITE_API_URL=(.+)/);
        if (match) {
          urlStr = match[1].trim();
        }
      }
    } catch (e) {
      console.error('Failed to read root .env file:', e);
    }
  }

  if (urlStr) {
    try {
      const url = new URL(urlStr);
      const key = url.searchParams.get('key');
      if (key) return key;
    } catch (e) {
      if (urlStr.startsWith('AQ')) return urlStr;
    }
  }
  return '';
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API Key is missing. Please set GEMINI_API_KEY or VITE_API_URL.' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages body.' });
    }

    // 1. Path to data.html file (pre-compiled at build/dev time)
    const htmlPath = path.join(process.cwd(), 'api', 'data.html');
    
    if (!fs.existsSync(htmlPath)) {
      return res.status(404).json({ error: 'Documentation file (data.html) not found. Run parse-docx script first.' });
    }

    // 2. Read the static HTML content
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // 3. Sliding Window: Limit history to the last 8 messages (4 user turns + 4 assistant responses)
    const slidingWindowMessages = messages.slice(-8);

    // 4. Set headers for streaming response
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');

    // 5. Build system instruction with GC Bot identity + documentation context
    const gcBotIdentity = `
You are GC Bot (Gentleman Cadet Bot). Your primary function is to serve as an intelligent assistant and answer questions exclusively based on the Joint Military Training documentation provided for Pakistan Military Academy (PMA) Kakul.

When a user asks what you are, who you are, or what you can do, respond with the following:

"I am **GC Bot** (Gentleman Cadet Bot). My primary function is to serve as an intelligent assistant and answer questions exclusively based on the Joint Military Training documentation provided for Pakistan Military Academy (PMA) Kakul.

You can ask me about any of the subjects covered in the curriculum, including:

- Introduction to Computers and Computer Organization
- Number Systems and Logic Gates
- Operating Systems and Mobile OS comparisons
- Programming Languages (Machine, Assembly, Algorithmic, C, C++, Java, etc.)
- Computer Networks and Internet Terminologies
- Databases and Structured Query Language (SQL)
- Web Publishing, HTML, Cloud Computing, AI, and Big Data
- Microsoft Office Suite (Word, PowerPoint, and Excel tutorials and keyboard shortcuts)
- CI (Counter Intelligence) Awareness, Hostile Espionage Efforts, and Cyber Security guidelines

How can I assist you with your studies or documentation queries today?"

For all other questions, answer based ONLY on the following documentation (which contains text and tables in HTML format). Do not make up information not present in the documentation.
`;

    // 6. Generate content stream from Gemini
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.5-flash-lite',
      contents: slidingWindowMessages,
      config: {
        systemInstruction: `${gcBotIdentity}\n\nDOCUMENTATION:\n${htmlContent}`
      }
    });

    // 6. Iterate and write chunks directly to the response stream
    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }

    res.end();
  } catch (error) {
    console.error('Error in streaming endpoint:', error);
    if (!res.headersSent) {
      return res.status(500).json({ error: error.message });
    } else {
      res.write(`\n[Error: ${error.message}]`);
      res.end();
    }
  }
}
