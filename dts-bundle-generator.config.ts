// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const getPackageName = () => {
  return packageJson.name;
};

const config = {
  compilationOptions: {
    preferredConfigPath: "./tsconfig.json",
  },
  entries: [
    {
      filePath: "./src/lib/index.tsx",
      outFile: `./dist/${getPackageName()}.es.d.ts`,
      output: {
        noBanner: true,
      },
    },
  ],
};

module.exports = config;
