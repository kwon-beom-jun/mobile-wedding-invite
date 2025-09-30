import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wedding-mobile-frontend/', // 프로젝트 페이지 경로
  build: {
    outDir: '../docs' // 레포 내부 docs로 출력 (GitHub Pages: main/docs)
  }
})
