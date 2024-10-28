import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Bireysel-Silahlanma",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "usa-map": ["src/components/Usamap.jsx"],
          "bar-dashboard": ["src/components/BarDashboard.jsx"],
          dashboard: ["src/components/Dashboard.jsx"],
          d3: ["d3"],
          "react-icons": ["react-icons"],
        },
      },
    },
  },
});
