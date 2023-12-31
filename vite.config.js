import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

const outDir = resolve(__dirname, 'docs')
const root = resolve(__dirname, 'src')
const publicFolder = resolve(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: resolve(__dirname, 'src/images'),
  root: root,
  base: './',
  publicDir: publicFolder,
  server: {
    watch: {
      usePolling: true
    },
    open: true
  },
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        destination: resolve(__dirname, 'src/destination.html'),
        crew: resolve(__dirname, 'src/crew.html'),
        technology: resolve(__dirname, 'src/technology.html'),
      },
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/html/_includes'),
    }),
  ],
})
