/**
 * @type {import('rollup').RollupOptions}
 */
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

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
      dir: "dist/cjs",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
    json(),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      configFile: "./.babelrc",
    }),
    terser(),
  ],
};

export default config;
