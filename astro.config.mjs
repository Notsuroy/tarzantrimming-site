import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tarzantrimming.ca',
  integrations: [tailwind()],
  build: { format: 'directory' },
});
