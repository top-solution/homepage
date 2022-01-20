import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { readdirSync } from "fs";
import { terser } from "rollup-plugin-terser";
import preprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

/* Generate configuration for each svelte file found in src folder */
const files = readdirSync('./src').filter(fileName => fileName.endsWith('.svelte'))

export default files.map((name, index) => ({
  input: `src/${name}`,
  output: {
    name: name.replace(/\.svelte$/, ""),
    format: "iife",
    dir: "public/build",
  },
  plugins: [
    svelte({
      onwarn: (warning, handler) => {
        const {
           code,
           frame
        } = warning;
        if (code === "css-unused-selector") {
          return;
        }

        handler(warning);
     },
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
        customElement: true,
      },
      preprocess: preprocess(),
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}));
