import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // 將 '@' 別名指向 '/src' 目錄
    }
  },
  server: {
    port: 8080
  }
})
