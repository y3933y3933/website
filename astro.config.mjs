// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import remarkCustomHeadingId from 'remark-custom-heading-id';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
  markdown:{
    remarkPlugins: [remarkCustomHeadingId]
  }
});