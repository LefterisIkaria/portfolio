import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      // or have default horizontal padding
      padding: "1rem",
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        lg: "920px",
      },
    },
    extend: {
      colors: {
        default: {
          DEFAULT: "var(--default)",
          100: "var(--base-100)",
        },
        background: "var(--background)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["'Montserrat Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
