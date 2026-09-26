import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        project: 'project.html',
        services: 'services.html',
        work: 'work.html',

        foundation: 'services/foundation/index.html',
        icon: 'services/icon/index.html',

        amara: 'Demos/Amara Studio/index.html',
        lumi: 'Demos/Lumi/index.html',
        vela: 'Demos/Vela/index.html'
      }
    }
  }
});