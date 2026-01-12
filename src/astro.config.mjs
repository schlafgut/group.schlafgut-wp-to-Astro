// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// https://astro.build/config
// Astro 5: output 'server' für Keystatic API-Routen (SSR)
// Seiten werden explizit mit `export const prerender = true` vorgerendert
export default defineConfig({
  // site: 'https://group.schlafgut.com',
  site: 'https://schlafgroup.netlify.app', // Temporäre URL für Testing
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    markdoc(),
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    keystatic(),
  ],
});