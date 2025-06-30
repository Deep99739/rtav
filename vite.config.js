import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // use relative paths so built files can be opened without a server
  base: './',
  plugins: [react()],
});
