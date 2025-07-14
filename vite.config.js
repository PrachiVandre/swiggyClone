import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/swiggyClone/", // 👈 Add this line (repo name)
  plugins: [react()],
  server: {
    open: true,
    port: 5174,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  coverage: {
    reporter: ['text', 'html'],
    reportsDirectory: './coverage',
  }
});