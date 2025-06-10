// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "everforest-dark",
    },
    remarkPlugins: [[remarkToc, { heading: "toc", maxDepth: 3 }]],
  },
  integrations: [react()],
});
