import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';

function ensureDirectoryExists(filePath) {
  const dir = dirname(filePath);
  mkdirSync(dir, { recursive: true });
}

function writeFile(path, content) {
  const fullPath = resolve('git-export', path);
  ensureDirectoryExists(fullPath);
  writeFileSync(fullPath, content);
}

function copyDirectory(source, destination) {
  try {
    const files = readdirSync(source, { withFileTypes: true });
    
    files.forEach(file => {
      const sourcePath = join(source, file.name);
      const destPath = join(destination, file.name);
      
      if (file.isDirectory()) {
        copyDirectory(sourcePath, destPath);
      } else {
        try {
          const content = readFileSync(sourcePath, 'utf8');
          writeFile(destPath, content);
        } catch (error) {
          console.error(`Error copying file ${sourcePath}:`, error);
        }
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${source}:`, error);
  }
}

console.log('Exporting project files...');

// Root configuration files
const rootFiles = [
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'tailwind.config.js',
  'postcss.config.js',
  'components.json',
  'eslint.config.js'
];

rootFiles.forEach(file => {
  try {
    writeFile(file, readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Error exporting ${file}:`, error);
  }
});

// Write .gitignore
writeFile('.gitignore', `
node_modules
.env
.env.*
!.env.example
dist
.DS_Store
`);

// Write .env.example
writeFile('.env.example', `VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_ZAPIER_WEBHOOK_URL=your-zapier-webhook-url`);

// Source directories to copy
const srcDirs = [
  'src/components',
  'src/components/ui',
  'src/components/sections',
  'src/contexts',
  'src/hooks',
  'src/lib',
  'src/pages'
];

srcDirs.forEach(dir => {
  copyDirectory(dir, dir);
});

// Source root files
const srcRootFiles = [
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/vite-env.d.ts'
];

srcRootFiles.forEach(file => {
  try {
    writeFile(file, readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Error exporting ${file}:`, error);
  }
});

// Public files
const publicFiles = [
  'public/robots.txt',
  'public/site.webmanifest',
  'public/sitemap.xml',
  'public/browserconfig.xml',
  'public/favicon.svg',
  'public/og-image.jpg'
];

publicFiles.forEach(file => {
  try {
    writeFile(file, readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Error exporting ${file}:`, error);
  }
});

// Scripts
const scriptFiles = [
  'scripts/generate-sitemap.js',
  'scripts/export-for-git.js'
];

scriptFiles.forEach(file => {
  try {
    writeFile(file, readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Error exporting ${file}:`, error);
  }
});

console.log('Export complete! Files are in the git-export directory');
console.log('\nNext steps:');
console.log('1. Copy files from git-export to your local project');
console.log('2. Run npm install');
console.log('3. Run npm run dev to start development server');