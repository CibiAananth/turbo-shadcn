import baseConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  content: [...baseConfig.content, '../../packages/neon/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;
