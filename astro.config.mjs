import { defineConfig } from "astro/config";

export default defineConfig({
  // 現在の作業ディレクトリにある "./foo"ディレクトリを指します。
  root: "dist",
  // 現在の作業ディレクトリの "./foo/public" ディレクトリを指します。
  publicDir: "public",
});
