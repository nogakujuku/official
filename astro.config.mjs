import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Astroを実行したときにブラウザが自動でサーバーを開く
  server: {
    host: true,
    open: true,
  },
});
