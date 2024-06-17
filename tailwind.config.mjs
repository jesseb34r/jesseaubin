import tailwindcssRadixColors from "tailwindcss-radix-colors";

const size = {
  xs: "4.25rem",
  sm: "9.75rem",
  md: "15.25rem",
  lg: "20.75rem", // 4 columns (mobile breakpoint). Never set min-size to larger than this
  xl: "26.25rem",
  "2xl": "31.75rem", // 6 columns, half of laptop breakpoint
  "3xl": "37.25rem",
  "4xl": "42.75rem",
  "5xl": "48.75rem",
  "6xl": "53.75rem",
  "7xl": "59.25rem",
  "8xl": "64.75rem",
  mobile: "20.75rem",
  tablet: "42.75rem",
  laptop: "64.75rem",
  ultrawide: "86.75rem",
  gutter: "1.25rem",
  margin: "0.625rem",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Iosevka Aile",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["Iosevka Etoile", "ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Iosevka Term",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    width: size,
    extend: {},
  },
  plugins: [tailwindcssRadixColors],
};
