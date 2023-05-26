import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

let viteConfig;

export default function () {
  return {
    name: "style-inject",
    apply: "build",
    enforce: "post",

    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
    },

    writeBundle(option, bundle) {
      if (!viteConfig.build || !viteConfig.build.lib) {
        // only for lib build
        console.warn("vite-plugin-style-inject only works in lib mode.");
        return;
      }
      const files = Object.keys(bundle);
      const cssFile = files.find((v) => v.endsWith(".css"));
      if (!cssFile) {
        return;
      }
      for (const file of files) {
        if (!bundle[file].isEntry) {
          // only for entry
          continue;
        }
        const outDir = viteConfig.build.outDir || "dist";
        const filePath = resolve(viteConfig.root, outDir, file);
        const data = readFileSync(filePath, {
          encoding: "utf8",
        });
        writeFileSync(filePath, `import './${cssFile}';\n${data}`);
      }
    },
  };
}
