import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

// https://vite.dev/config/
export default defineConfig({
  base: "/mood-check/",
  plugins: [react()],
  css: { 
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
