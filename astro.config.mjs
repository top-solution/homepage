import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  publicDir: "./public/",
  site: "https://topsolution.it",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
