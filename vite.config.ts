import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      shared: {
        react: { singleton: true, requiredVersion: '18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '18.2.0' },
        'react/jsx-runtime': { singleton: true },
        '@OmarZambranoDev/portfolio-ui': { singleton: true },
      },
    }),
  ],
  server: {
    port: 3000,
    cors: true,
  },
  preview: {
    port: 3000,
    cors: true,
  },
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    exclude: ['@OmarZambranoDev/portfolio-ui'],
  },
});
