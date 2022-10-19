import { defineConfig, loadEnv, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import StylelintPlugin from "vite-plugin-stylelint";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const forgeContextVars = Object.fromEntries(
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
    plugins: [
      react({
        jsxRuntime: "classic",
        include: "**/*.tsx",
      }),
      eslint() as unknown as PluginOption,
      StylelintPlugin() as unknown as PluginOption,
    ],
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.FORGE_CONTEXT": JSON.stringify(forgeContextVars),
    },
    server: {
      port: 3001,
      proxy: {
        "/rest": {
          target: env.ATLASSIAN_BASE_URL,
          auth: `${env.ATLASSIAN_AUTH_EMAIL}:${env.ATLASSIAN_AUTH_TOKEN}`,
          changeOrigin: true,
        },
      },
    },
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },
  };
});
