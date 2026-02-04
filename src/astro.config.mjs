// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
// import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://group.schlafgut.com",
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough", // Use Astro's built-in image optimization
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
