import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
