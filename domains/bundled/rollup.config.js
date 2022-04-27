/**
 * @type {import('rollup').RollupOptions}
 */
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  input: "src",
  output: [
    {
      format: "esm",
      dir: "dist/esm",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      format: "cjs",
      file: "dist/index.cjs.js",
    },
  ],
  external: ["react", "react/jsx-runtime", "react-dom"],
  plugins: [
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      configFile: "./.babelrc",
    }),
  ],
};

export default config;
