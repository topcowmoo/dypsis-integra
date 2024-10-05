import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "robots.txt"],
      manifest: {
        name: "Salvatore Mammoliti Portfolio",
        short_name: "SM Portfolio",
        description:
          "Salvatore Mammoliti's Web Development Portfolio showcasing projects and skills",
        theme_color: "#d4d4d4",
        background_color: "#ff0000",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/new-screenshot-desktop.png",
            sizes: "1200x800",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/new-screenshot-mobile.png",
            sizes: "480x800",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 8080, // Port for dev server
    open: true, // Automatically opens the app in the browser
  },
  preview: {
    port: 8080, // Port for preview server
    open: true, // Automatically opens the preview in the browser
  },
});
