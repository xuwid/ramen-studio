import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
//please allow https://3073931f45a7.ngrok-free.app

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: false,
    allowedHosts: ["9ec385cce2a9.ngrok-free.app"]
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
