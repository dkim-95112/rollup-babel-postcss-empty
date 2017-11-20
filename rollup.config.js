import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';


export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'myBundle'
  },
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({
          warnForDuplicates: false
        })
      ],
      extensions: ['.scss']
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}