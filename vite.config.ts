// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.PR_NUMBER ? `/pr-preview/${process.env.PR_NUMBER}/` : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // You can define manual chunks here if needed
        },
      },
    },
  },
});