/// <reference types="vitest" />
// special config for vitest
import { defineConfig } from "vitest/config";
console.log("VITE conffig");
export default defineConfig({
  test: {
    exclude: ["./static/**/*", "node_modules/**/*"],
  },
});
