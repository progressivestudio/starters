import preactPlugin from "@preact/preset-vite";
import { defineConfig, UserConfig } from "vite";
import visualizer from "rollup-plugin-visualizer";
import fontsPlugin from "vite-plugin-fonts";
import svgPlugin from "vite-plugin-svgr";

export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [
      preactPlugin(),
      fontsPlugin({
        google: {
          families: ["Inter"],
        },
      }),
      svgPlugin(),
    ],
    resolve: {
      alias: {
        // Object literal property "@" is valid for alias, hence eslint-disable.
        // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-var-requires
        "@": require("path").resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
    },
  };

  // Overrides based on command
  if (command === "build") {
    config.plugins?.push(
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    );
  }

  return config;
});
