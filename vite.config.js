import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project page lives at /luximaa-interiors/ on GitHub Pages.
  base: command === 'build' ? '/luximaa-interiors/' : '/',
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
  },
}))
