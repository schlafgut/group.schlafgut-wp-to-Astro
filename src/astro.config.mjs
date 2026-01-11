// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://group.schlafgut.com',
  output: 'static',
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