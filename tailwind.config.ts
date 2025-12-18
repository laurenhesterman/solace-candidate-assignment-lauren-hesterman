import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1c4339',
          50: '#f0f7f6',
          100: '#d9ebe8',
          200: '#b3d7d1',
          300: '#8dc3ba',
          400: '#67afa3',
          500: '#419b8c',
          600: '#1c4339',
          700: '#163530',
          800: '#112824',
          900: '#0b1a18',
        },
        secondary: {
          DEFAULT: '#d4f1e8',
          50: '#f5fdf9',
          100: '#e8f9f2',
          200: '#d4f1e8',
          300: '#b8e8d9',
          400: '#9ddfc9',
          500: '#81d6ba',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
