import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Needed for Vercel's static file handling
  plugins: [react()],
})
