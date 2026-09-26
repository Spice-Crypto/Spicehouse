import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: `${root}index.html`,
        about: `${root}about.html`,
        contact: `${root}contact.html`,
        project: `${root}project.html`,
        services: `${root}services.html`,
        work: `${root}work.html`,
        foundation: `${root}services/foundation/index.html`,
        icon: `${root}services/icon/index.html`
      }
    }
  }
});
