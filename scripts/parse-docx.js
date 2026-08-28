import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';

const docxPath = path.join(process.cwd(), 'api', 'data.docx');
const outputPath = path.join(process.cwd(), 'api', 'data.html');

async function parseDocx() {
  console.log('Starting document pre-parsing...');
  
  if (!fs.existsSync(docxPath)) {
    console.error(`Error: data.docx not found at ${docxPath}`);
    process.exit(1);
  }

  try {
    const fileBuffer = fs.readFileSync(docxPath);
    
    // Ignore images to minimize bundle size and token counts
    const options = {
      convertImage: mammoth.images.imgElement(() => [])
    };
    
    const { value: htmlContent } = await mammoth.convertToHtml({ buffer: fileBuffer }, options);
    
    // Clean up empty tags and collapse redundant whitespaces to keep the token payload optimized
    const cleanedHtml = htmlContent
      .replace(/<p><\/p>/g, '') 
      .replace(/\s+/g, ' ')     
      .trim();

    fs.writeFileSync(outputPath, cleanedHtml, 'utf8');
    console.log(`Successfully generated static HTML at: ${outputPath} (${cleanedHtml.length} characters)`);
  } catch (error) {
    console.error('Failed to parse docx:', error);
    process.exit(1);
  }
}

parseDocx();
