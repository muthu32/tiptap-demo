import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify';
//import { uglify } from "rollup-plugin-uglify";



export default {
  input: './src/index.js',
  output: {
    format: 'iife',
    file: 'public/prosemirror.js',
    name: 'prosemirror'
  },
  plugins: [
      babel(),
      resolve(),
      commonJS({
        include: 'node_modules/**'
      }),
      minify({
        "comments": false,
        "keepFnName": false
      })
    ],
};