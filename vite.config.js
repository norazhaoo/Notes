import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署配置
  // 如果仓库名是 username.github.io，base 应该是 '/'
  // 如果仓库名是其他名称，base 应该是 '/repository-name/'
  base: process.env.NODE_ENV === 'production' ? '/Notes/' : '/',
  define: {
    'global': 'globalThis',
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
})

