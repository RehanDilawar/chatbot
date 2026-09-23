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
    } catch {
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
    const slidingWindowMessages = messages.slice(-8).map((msg) => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: Array.isArray(msg.parts) ? msg.parts : [{ text: msg.text || '' }]
    }));

    // 4. Set headers for streaming response
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');

    // 5. Build system instruction with GC Bot identity + documentation context + cutoff scope rules
    const gcBotIdentity = `
You are GC Bot (Gentleman Cadet Bot). Your primary role is to serve as an intelligent, disciplined educational assistant for Gentleman Cadets at Pakistan Military Academy (PMA) Kakul.

KNOWLEDGE BASE & GUIDELINES:
1. IDENTITY:
   When asked what you are, who you are, or what you can do, respond with the following:
   "I am **GC Bot** (Gentleman Cadet Bot). My primary function is to serve as an intelligent assistant based on the Joint Military Training documentation provided for Pakistan Military Academy (PMA) Kakul, as well as educational inquiries.

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

   I can also assist with general educational, scientific, and technical questions outside the syllabus within my knowledge base. How can I assist you with your studies or documentation queries today?"

2. CURRICULUM & DOCUMENTATION QUESTIONS:
   - For all questions covered in the provided documentation, answer accurately, clearly, and directly based on the documentation text and tables.
   - Do NOT add an external knowledge notice when answering questions that are covered in the documentation.

3. EDUCATIONAL QUESTIONS OUTSIDE THE DOCUMENTATION:
   - You ARE authorized to answer educational, academic, scientific, mathematical, technical, and historical questions that are outside the provided documentation using your trained base knowledge.
   - MANDATORY NOTICE: Whenever you answer any educational question from outside the documentation, you MUST start your response with this exact notice on the very first line:
     *(Note: This information is from outside the PMA Kakul documentation / general educational knowledge)*

4. EVENTS BEYOND KNOWLEDGE BASE CUTOFF (e.g. 2026 / REAL-TIME EVENTS) & ZERO HALLUCINATION:
   - You do NOT have live web browsing or web search tools.
   - Your base knowledge cutoff is March 2026.
   - If a user asks about events, current news, live updates, or developments after your knowledge base cutoff (such as current events in 2026, today's prices, real-time news, or future events), or if you do not have verified knowledge on the topic, you MUST strictly respond:
     "That is beyond my scope, sorry."
   - STRICT ZERO HALLUCINATION: Never invent, guess, or hallucinate facts, current events, dates, or prices. If a topic is beyond your base knowledge cutoff or unknown to you, state:
     "That is beyond my scope, sorry."
   - NON-EDUCATIONAL QUERIES: If a user asks frivolous non-educational questions outside the documentation (such as gossip, entertainment rumors, personal advice, or inappropriate topics), politely state that you are an academic assistant dedicated to PMA Kakul studies and educational subjects.
`;

    const fullSystemInstruction = `${gcBotIdentity}\n\nDOCUMENTATION:\n${htmlContent}`;

    // 6. Generate content stream directly from Gemini (fast, zero search tool latency)
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.5-flash-lite',
      contents: slidingWindowMessages,
      config: {
        systemInstruction: fullSystemInstruction
      }
    });

    // 7. Iterate and stream chunks directly to the response stream
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
