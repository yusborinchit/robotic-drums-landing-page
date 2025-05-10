import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
})