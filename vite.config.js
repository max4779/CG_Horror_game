import { defineConfig } from 'vite'

export default defineConfig({
  root: 'page',   // page 폴더를 루트로 지정 (index.html이 이 안에 있어야 함)
  server: {
    port: 5173,
    open: true,
  },
})
