import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // rewriteAll({
    //   rules: [
    //     {
    //       from: /^\/api(.*)$/,
    //       to: '/my-custom-api$1',
    //     },
    //   ],
    // }),
  ],
})
