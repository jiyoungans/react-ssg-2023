// 패키지 모듈 불러오기
import { defineConfig } from 'vite';

// Vite 개발 도구 구성
const viteConfig = defineConfig({
  // 서버 구성
  server: {
    host: true,
    port: 3000,
  },
});

// 모듈 기본 내보내기
export default viteConfig;