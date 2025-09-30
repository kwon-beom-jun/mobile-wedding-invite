import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wedding-mobile-frontend/', // 레포 이름으로 설정
  build: {
    outDir: '../docs' // dist 대신 docs로 출력
  }
})
