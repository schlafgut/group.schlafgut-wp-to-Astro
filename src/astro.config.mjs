// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://group.schlafgut.com',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    markdoc(),
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    keystatic(),
  ],
});
