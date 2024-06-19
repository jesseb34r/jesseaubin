import tailwindcssRadixColors from "tailwindcss-radix-colors";
import tailwindcssProse from "@tailwindcss/typography";

const breakpoints = {
  mobile: "20.75rem",
  tablet: "42.75rem",
  laptop: "64.75rem",
  ultrawide: "86.75rem",
};

const spacing = {
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
  gutter: "1.25rem",
  margin: "0.625rem",
  ...breakpoints,
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Iosevka Aile Web",
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
        "Iosevka Term Curly Web",
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
    screens: breakpoints,
    extend: {
      spacing: spacing,
      typography: ({ theme }) => ({
        mauve: {
          css: {
            "--tw-prose-body": theme("colors.mauve[11]"),
            "--tw-prose-headings": theme("colors.mauve[12]"),
            "--tw-prose-lead": theme("colors.mauve[10]"),
            "--tw-prose-links": theme("colors.mauve[12]"),
            "--tw-prose-bold": theme("colors.mauve[12]"),
            "--tw-prose-counters": theme("colors.mauve[8]"),
            "--tw-prose-bullets": theme("colors.mauve[4]"),
            "--tw-prose-hr": theme("colors.mauve[3]"),
            "--tw-prose-quotes": theme("colors.mauve[12]"),
            "--tw-prose-quote-borders": theme("colors.mauve[3]"),
            "--tw-prose-captions": theme("colors.mauve[10]"),
            "--tw-prose-kbd": theme("colors.mauve[12]"),
            "--tw-prose-code": theme("colors.mauve[12]"),
            "--tw-prose-pre-code": theme("colors.mauve[11]"),
            "--tw-prose-pre-bg": theme("colors.mauve[3]"),
            "--tw-prose-th-borders": theme("colors.mauve[7]"),
            "--tw-prose-td-borders": theme("colors.mauve[6]"),
            "--tw-prose-invert-body": theme("colors.mauvedark[11]"),
            "--tw-prose-invert-headings": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-lead": theme("colors.mauvedark[10]"),
            "--tw-prose-invert-links": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-bold": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-counters": theme("colors.mauvedark[8]"),
            "--tw-prose-invert-bullets": theme("colors.mauvedark[4]"),
            "--tw-prose-invert-hr": theme("colors.mauvedark[3]"),
            "--tw-prose-invert-quotes": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-quote-borders": theme("colors.mauvedark[3]"),
            "--tw-prose-invert-captions": theme("colors.mauvedark[10]"),
            "--tw-prose-invert-kbd": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-code": theme("colors.mauvedark[12]"),
            "--tw-prose-invert-pre-code": theme("colors.mauvedark[11]"),
            "--tw-prose-invert-pre-bg": theme("colors.mauvedark[3]"),
            "--tw-prose-invert-th-borders": theme("colors.mauvedark[7]"),
            "--tw-prose-invert-td-borders": theme("colors.mauvedark[6]"),
          },
        },
      }),
    },
  },
  plugins: [tailwindcssRadixColors, tailwindcssProse],
};
