# mobile-wedding-invite

모바일 청첩장 **프론트엔드(React + TypeScript)** 프로젝트입니다.  

- **라이브 데모**: [https://kwon-beom-jun.github.io/mobile-wedding-invite/](https://kwon-beom-jun.github.io/mobile-wedding-invite/)

<br/>

## 🌐 GitHub Pages 배포

본 레포는 **GitHub Pages**를 통해 배포됩니다.  

### 1) `vite.config.ts` 설정

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mobile-wedding-invite/', // ← 반드시 리포지토리명과 동일
})
