const esbuild = require('esbuild');

const defaultConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
};

esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
});

esbuild.build({
  ...defaultConfig,
  outfile: './dist/index.js',
  format: 'cjs',
});
