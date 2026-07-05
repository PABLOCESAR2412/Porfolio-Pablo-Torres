import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
