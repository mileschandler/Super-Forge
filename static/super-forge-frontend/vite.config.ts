/// <reference types="vitest" />
import StylelintPlugin from "vite-plugin-stylelint";
import { resolve } from "path";
import { defineConfig, loadEnv, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const context = Object.fromEntries(
    Object.entries(env)
      .filter(
        ([key]) => key.startsWith("FORGE_CONTEXT_") || key.startsWith("FC_")
      )
      .map(([key, value]) => [
        key,
        value.replace("FORGE_CONTEXT_", "").replace("FC_", ""),
      ])
  );
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.FORGE_CONTEXT": JSON.stringify(context),
    },
    base: "./",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "@assets": resolve(__dirname, "assets"),
        bridge: "bridge/src",
      },
    },
    server: {
      port: 3001,
    },
    test: {
      setupFiles: ["./vitest.setup.ts"],
    },
    plugins: [
      react({
        jsxRuntime: "classic",
        include: "**/*.tsx",
      }),
      eslint() as unknown as PluginOption,
      StylelintPlugin() as unknown as PluginOption,
    ],
  };
});
