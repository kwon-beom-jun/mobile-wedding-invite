import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mobile-wedding-invite/', // GitHub Pages 프로젝트 경로
  build: {
    outDir: '../docs' // 레포 내부 docs
  }
})
