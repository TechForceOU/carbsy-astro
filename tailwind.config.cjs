/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#527A93',
          secondary: '#A3C9D9',
          background: '#F2E1D8',
          card: '#FFF6E5',
          accent: '#F29F80',
        },
        text: {
          primary: '#527A93',
          secondary: '#A3C9D9',
          'on-card': '#527A93',
          'on-accent': '#FFF6E5',
        },
        input: {
          background: '#FFFBF7',
        },
        status: {
          success: '#68C986',
          warning: '#FFC107',
          danger: '#F25C67',
        },
        link: '#2E86AB',
      },
      fontFamily: {
        sans: ["Fredoka", ...defaultTheme.fontFamily.sans],
        light: ["Fredoka", ...defaultTheme.fontFamily.sans],
        normal: ["Fredoka", ...defaultTheme.fontFamily.sans],
        medium: ["Fredoka", ...defaultTheme.fontFamily.sans],
        semibold: ["Fredoka", ...defaultTheme.fontFamily.sans],
        bold: ["Fredoka", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
