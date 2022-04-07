import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  public: "./public/",
  buildOptions: {
    site: "https://topsolution.it",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
