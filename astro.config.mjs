import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})