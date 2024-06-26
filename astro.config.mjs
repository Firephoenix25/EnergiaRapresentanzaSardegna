import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    svelte(),
    sanity({
      projectId: "xzyslyix",
      dataset: "clienti",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
});
