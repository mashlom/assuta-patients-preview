// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// //   build: {
// //     outDir: 'dist',
// //   },
// // });

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, '.')
//   return {
//     plugins: [react()],
//     base: env.PR_NUMBER ? `/pr-preview/${env.PR_NUMBER}/` : '/',
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//       },
//     },
//   }
// })
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')
  const base = env.PR_NUMBER ? `/pr-preview/${env.PR_NUMBER}/` : '/'
  
  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: env.PR_NUMBER ? `dist/pr-preview/${env.PR_NUMBER}` : 'dist',
    },
  }
})