

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import banner from "vite-plugin-banner";
// import dts from "vite-plugin-dts";
import packageJson from "./package.json";
import styleInject from "./plugins/style-inject";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const pkgInfo = `/**
 * name: ${packageJson.name}
 * version: ${packageJson.version}
 * description: ${packageJson.description}
 * author: ${packageJson.author}
 * homepage: ${packageJson.homepage}
 * repository: ${packageJson.repository.url}
 */`;

const fileNames = {
  es: `${getPackageName()}.es.js`,
  iife: `${getPackageName()}.iife.js`,
  umd: `${getPackageName()}.umd.js`,
};

export default defineConfig(({ command, mode }) => {
  return {
    base: "./",
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.tsx"),
        name: getPackageNameCamelCase(),
        formats: ["es", "iife", "umd"],
        fileName: (format) => fileNames[format],
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          assetFileNames: `${getPackageName()}.[ext]`,
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
          exports: "named",
        },
      },
      emptyOutDir: true,
      assetsDir: "assets",
    },
    plugins: [
      react({}),
      banner(pkgInfo),
      styleInject(),
      // dts({
      //   insertTypesEntry: true,
      // }),
    ],
    resolve: {
      alias: {
        "@/*": path.resolve(__dirname, "src"),
      },
    },
  }
});
