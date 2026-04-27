// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nisa4532.github.io',
  base: '/Game_Edukasi/',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' }
});
