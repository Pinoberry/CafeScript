import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/CafeScript/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
