// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import remarkCustomHeadingId from "remark-custom-heading-id";

import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://jienianan.com",
  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
  }),

  integrations: [
    expressiveCode({
      themes: ["snazzy-light"],
      styleOverrides: {
        borderRadius: "0.5rem",
      },
    }),
    react(),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkCustomHeadingId],
  },
});
