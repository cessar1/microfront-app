import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        microApp1: 'http://localhost:3001/assets/remoteEntry.js',
        microApp2: 'http://localhost:3002/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'styled-components', 'i18next', 'react-i18next']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',

  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },

})
