import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myPortfolio/', // Add your repository name here
  plugins: [react()],
})
