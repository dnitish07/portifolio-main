// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 5173, // Default Vite dev port (optional for local dev)
    strictPort: true, // Fail if port is in use
  },
  preview: {
    port: process.env.PORT || 10000, // Render's expected port (critical!)
    strictPort: true,
  },
  build: {
    outDir: "dist", // Ensure build outputs to 'dist' (default for Vite)
  },
});
