import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // use relative paths so built files can be opened without a server
  base: './',
  plugins: [react()],
  // avoid hashed filenames so index.html can reference a stable script
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
