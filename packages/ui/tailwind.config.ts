import type { Config } from 'tailwindcss';
import { colors, spacing, radii } from './src/tokens';

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius: radii,
    },
  },
  plugins: [],
};

export default config;
