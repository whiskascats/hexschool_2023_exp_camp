import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  
  return defineConfig({
    base: process.env.VITE_GITHUB_URL,
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
}