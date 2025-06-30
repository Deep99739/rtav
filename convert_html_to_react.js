const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.')
  .filter(f => f.endsWith('.html'));

function pascalCase(str) {
  return str
    .replace(/[^A-Za-z0-9]+/g, ' ') // replace non alphanumeric with space
    .split(' ') // split words
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join('');
}

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const style = styleMatch ? `<style>${styleMatch[1]}</style>` : '';
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : content;
  const componentName = pascalCase(path.basename(file, '.html'));
  const reactFile = path.join('src', componentName + '.js');
  const jsx = `import React from 'react';

export default function ${componentName}() {\n  return (<div dangerouslySetInnerHTML={{ __html: \`${style}${body}\` }} />);\n}\n`;
  fs.mkdirSync('src', { recursive: true });
  fs.writeFileSync(reactFile, jsx);
  console.log('Converted', file, '->', reactFile);
}
