/* This file is not used for any compilation purpose, it is only used for Tailwind Intellisense & Autocompletion in the source files */
import baseConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  content: baseConfig.content,
  presets: [baseConfig],
} satisfies Config;
