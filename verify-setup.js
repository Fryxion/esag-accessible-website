const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'src/components/accessibility/AccessibilityControls.jsx',
  'src/components/accessibility/SkipLink.jsx',
  'src/components/accessibility/StatusMessage.jsx',
  'src/components/layout/Header.jsx',
  'src/components/layout/Navigation.jsx',
  'src/components/layout/Footer.jsx',
  'src/components/layout/Layout.jsx',
  'src/components/pages/Home.jsx',
  'src/hooks/useAccessibility.js',
  'src/hooks/useKeyboardNavigation.js',
  'src/styles/globals.css',
  'src/utils/accessibility.js',
  'src/tests/accessibility.test.js'
];

console.log('?? Verifying project setup...\n');

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`? ${file}`);
  } else {
    console.log(`? ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allFilesExist) {
  console.log('?? All files created successfully!');
  console.log('?? Next steps:');
  console.log('   1. Copy component code from the integration guide');
  console.log('   2. Paste into respective files');
  console.log('   3. Run: npm start');
} else {
  console.log('??  Some files are missing. Please check the setup.');
}

console.log('\n?? See FILE_STRUCTURE.md for detailed implementation guide');
