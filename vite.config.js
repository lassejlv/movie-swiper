import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.html",
      name: "movie-finder-build",
    },
  },
});
