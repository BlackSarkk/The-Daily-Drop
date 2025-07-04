import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['shop.obscuredev.space'],
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5002"
      }
    }
  }
})
