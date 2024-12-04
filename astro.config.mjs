import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Astroを実行したときにブラウザが自動でサーバーを開く
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  server: {
    host: true,
    open: true,
  },
  site: "https://nogakujuku.github.io",
  base: "/official",
});
