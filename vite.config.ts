import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import packageJson from "./package.json";

const packageName = packageJson.name;

const getPackageNameCamelCase = () => {
  try {
    return packageName.replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  /*
  // when command line: vite
  if (command === "serve") {
    // do something
  }
  // when command line: vite build
  else if (command === "build") {
    // do something
    // fs.rmdirSync("./dist", { recursive: true });
  }

  // such as command line: vite --mode development
  if (mode === "development") {
    // do something
  }
  // such as command line: vite build --mode production
  else if (mode === "production") {
    // do something
  }
  */

  if(mode === "lib") {
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
  }
  
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3030,
      https: false,
      open: true
    },
    resolve: {
      alias: {
        "@/*": resolve(__dirname, "src"),
      },
    },
  }
});
