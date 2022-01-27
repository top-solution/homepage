import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import preprocess from 'svelte-preprocess';
import { fdir } from 'fdir';
import { sep, join } from 'path';

const production = !process.env.ROLLUP_WATCH;

/*
  Generate configuration for each svelte file found in src folder.
  fdir finds recursively all files ending with .svelte
*/
const fdirApi = new fdir().crawlWithOptions(join(__dirname, 'src'), {
  includeBasePath: true,
  filters: [
    (path, isDirectory) => {
      if (!isDirectory) {
        if (!path.match(/\.svelte$/g)) {
          return false;
        }
      }
      return true;
    },
  ],
});

const files = fdirApi.sync();

export default files.map((name, index) => {
  // Output file name
  const outName = name.substring(name.lastIndexOf(sep) + 1, name.length);

  // Output subdirectory(-ies)
  let outSubdir = name.replace(join(__dirname, 'src'), '')
  outSubdir = outSubdir.substring(outSubdir.lastIndexOf(sep) + 1, outSubdir)

  return {
    input: name,
    output: {
      name: outName,
      format: "iife",
      dir: `public/build${outSubdir}`,
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
  }
});
