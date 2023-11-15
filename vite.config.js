import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

const outDir = resolve(__dirname, 'docs')
const root = resolve(__dirname, 'src', 'html')

// https://vitejs.dev/config/
export default defineConfig({
  root: root,
  base: './',
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/html/index.html'),
        destination: resolve(__dirname, 'src/html/destination.html'),
        crew: resolve(__dirname, 'src/html/crew.html'),
        technology: resolve(__dirname, 'src/html/technology.html'),
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/html/_includes'),
    }),
  ],
})
