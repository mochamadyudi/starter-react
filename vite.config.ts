import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-ignore
import path from "path";
import svgrPlugin from "vite-plugin-svgr";
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig(({mode}) => {
  //@ts-ignore
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      outDir: "build",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 5173,
      watch: {
        usePolling: true, // Use polling to watch for changes, useful on certain OS (e.g., WSL)
      },
    },
    preview: {
      port: Number(env.VITE_PORT_PREVIEW) || 3000,
      watch: {
        usePolling: true, // Use polling to watch for changes, useful on certain OS (e.g., WSL)
      },
    },
    plugins: [
      react(),
      svgrPlugin(),
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/*", // Example: Copy assets from the "src/assets" directory
            dest: ".", // Copy them to "public/assets"
          },
        ],
      }),
    ],
    define: {
      "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    },

    //@ts-ignore
    test: {
      environment: "jsdom",
      globals: true,
      include: ["src/**/*.test.{js,ts,jsx,tsx}"], // pastikan pattern sesuai
      coverage: {
        reporter: ["text", "json", "html"],
      },
      setupFiles: "./src/__test__/setup.ts",
    },
    css: {
      postcss: "./postcss.config.js",
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          importers: [],
          syntax: "scss",
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components/atoms": path.resolve(__dirname, "src/components/atoms"),
        "@components/molecules": path.resolve(
          __dirname,
          "src/components/molecules",
        ),
        "@components/templates": path.resolve(
          __dirname,
          "src/components/templates",
        ),
        "@components/organism": path.resolve(
          __dirname,
          "src/components/organism",
        ),
        "@views": path.resolve(__dirname, "src/views"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@state": path.resolve(__dirname, "src/stores"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@common": path.resolve(__dirname, "src/common"),
      },
    },
  };
});
