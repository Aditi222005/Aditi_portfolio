import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Required to fix asset issues on Vercel
  plugins: [react()],
})
