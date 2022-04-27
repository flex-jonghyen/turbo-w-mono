/**
 * @type {import('rollup').RollupOptions}
 */
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
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
    resolve({ extensions: [".ts", ".tsx"] }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions: [".ts", ".tsx"],
      configFile: "./.babelrc",
    }),
    terser(),
  ],
};

export default config;
