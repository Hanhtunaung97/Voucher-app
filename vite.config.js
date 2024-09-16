import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsonServer({ delay: 1000, dir: "./mock", port: 8000 })],
});
