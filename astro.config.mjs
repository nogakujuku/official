import { defineConfig } from "astro/config";

export default defineConfig({
  // 現在の作業ディレクトリにある "./foo"ディレクトリを指します。
  root: "dist",
  publicDir: "dist",
});
