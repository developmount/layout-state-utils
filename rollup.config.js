import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'LayoutStateUtils',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: 'lib/index.js',
    external: Object.keys(pkg.dependencies || {}),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [commonjs()],
  },
];
