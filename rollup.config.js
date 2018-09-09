import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'LayoutStateUtils',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [typescript(), resolve(), commonjs()],
  },
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.dependencies || {}),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [typescript(), commonjs()],
  },
];
