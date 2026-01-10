import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode })=>({
  plugins: [svelte(), tailwindcss()],
  resolve:{
    alias:{
      "@assets":path.resolve(__dirname,"./src/components" ),
      "@lib":path.resolve(__dirname, "./src/lib"),
      "@data":path.resolve(__dirname, "./src/data")
    },

  },
  test: {
    environment: 'jsdom',
  },
  }))
