// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/PawFinder/", // exactly as is, no variables
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        app: resolve(__dirname, "index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});