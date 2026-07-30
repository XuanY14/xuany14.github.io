import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 个人站点部署在 user.github.io 根路径，base 使用 '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    assetsInlineLimit: 4096,
  },
})
