import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['lib'] })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: "my-package",
      formats: ['es', 'umd'],
      fileName: (format) => `main.${format}.js` // <-- This line
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})