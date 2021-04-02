import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const production = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.ts',
  external: ['svelte'],
  output: [
    { file: pkg.browser, format: 'umd', sourcemap: production, name: "LuminousSvelte" },
    { file: pkg.module, format: 'esm', sourcemap: production },
  ],
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript(),
    production && terser(),
  ],
};
