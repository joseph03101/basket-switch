import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Configuración MPA: cada HTML es una entrada independiente
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        equipos: resolve(__dirname, 'equipos.html'),
      },
    },
  },
});
