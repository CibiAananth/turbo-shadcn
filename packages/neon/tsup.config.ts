import { readFile, writeFile } from 'fs/promises';
import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

const client: string[] = [
  './src/components/ui/button.tsx',
  './src/components/ui/accordion.tsx',
];

export default defineConfig(opts => {
  const common = {
    clean: !opts.watch,
    dts: true,
    format: ['esm'],
    minify: true,
    outDir: 'dist',
  } satisfies Options;

  return [
    {
      ...common,
      entry: ['./src/index.ts', ...client],
      esbuildOptions: opts => {
        opts.banner = {
          js: '"use client";',
        };
      },
      async onSuccess() {
        const pkgJson = JSON.parse(
          await readFile('./package.json', {
            encoding: 'utf-8',
          }),
        ) as PackageJson;
        pkgJson.exports = {
          './package.json': './package.json',
          '.': {
            import: './dist/index.mjs',
            types: './dist/index.d.ts',
          },
        };

        console.log('pkgJson', pkgJson);

        client
          .filter(e => e.endsWith('.tsx'))
          .forEach(entry => {
            const file = entry
              .replace('./src/components/ui/', '')
              .replace('.tsx', '');
            pkgJson.exports['./' + file] = {
              import: './dist/' + file + '.mjs',
              types: './dist/' + file + '.d.ts',
            };
            pkgJson.typesVersions['*'][file] = ['dist/' + file + '.d.ts'];
          });

        await writeFile('./package.json', JSON.stringify(pkgJson, null, 2));
      },
    },
  ];
});

type PackageJson = {
  name: string;
  exports: Record<string, { import: string; types: string } | string>;
  typesVersions: Record<'*', Record<string, string[]>>;
  files: string[];
  dependencies: Record<string, string>;
  pnpm: {
    overrides: Record<string, string>;
  };
};
