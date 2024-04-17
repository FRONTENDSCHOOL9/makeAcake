import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@query", replacement: "/src/query" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
})
