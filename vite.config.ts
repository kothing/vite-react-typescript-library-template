import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
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
  
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3030,
    },
    resolve: {
      alias: {
        "@/*": resolve(__dirname, "src"),
      },
    },
  }
});
