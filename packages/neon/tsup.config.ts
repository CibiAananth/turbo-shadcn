import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: !options.watch,
  external: ['react'],
  banner: {
    js: '"use client";',
  },
  ...options,
}));
