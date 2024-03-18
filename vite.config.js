import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import gltf from 'vite-plugin-gltf';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), gltf()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'order.html'),
        
      },
    },
  },
 
})

