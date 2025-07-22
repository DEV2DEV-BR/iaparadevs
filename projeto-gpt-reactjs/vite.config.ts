import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      enabled: true,
      reporter: ['text', 'lcov'],
      threshold: {
        lines: 75,
        statements: 75,
        functions: 75,
        branches: 75,
      },
    },
  },
});
