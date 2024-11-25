import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://automator85.github.io',
  base: '/makokobau',
  integrations: [tailwind()]
});
