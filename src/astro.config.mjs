// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
// import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://group.schlafgut.com",
  output: "server",
  adapter: netlify({
    imageCDN: false, // Disable Netlify Image CDN - serve images directly from _astro/
  }),
  integrations: [
    react(),
    markdoc(),
    // tailwind({ configFile: "./tailwind.config.mjs" }),
    keystatic(),
  ],
  // ADD THIS SECTION BELOW:
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
