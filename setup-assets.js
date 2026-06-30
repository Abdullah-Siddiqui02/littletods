import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = "C:\\Users\\Abdullah\\.gemini\\antigravity\\brain\\e219c849-0e5b-4025-adbc-59e2c535daf8\\hero_children_1782802882541.png";
const destDir = path.join(__dirname, 'public');
const destPath = path.join(destDir, 'hero_children.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created public/ directory.');
  }

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Successfully copied hero image to public/hero_children.png');
  } else {
    console.warn(`Source image not found at: ${srcPath}`);
    console.warn('The React component will display the beautiful fallback SVG illustration instead.');
  }
} catch (error) {
  console.error('Error copying asset:', error);
}
