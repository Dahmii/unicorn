import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Set base path from environment variable or default to "/"
  base: process.env.VITE_BASE_PATH || "/",

  // Optimize dependencies (exclude lucide-react for manual handling)
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
