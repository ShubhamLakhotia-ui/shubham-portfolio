import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },

  preview: {
    host: true,
    allowedHosts: ["portfolio-nvt9.onrender.com", ".onrender.com"],
  },
});
