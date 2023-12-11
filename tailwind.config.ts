import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        muted: "rgba(var(--muted), <alpha-value>)",
        bkg: "rgba(var(--bkg), <alpha-value>)",
        txt: "rgba(var(--txt), <alpha-value>)",
      },
    },
  },
  plugins: [],
}
export default config
