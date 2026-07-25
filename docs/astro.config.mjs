// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://kundangosavii.github.io',
  base: '/CodeSync/',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

});
