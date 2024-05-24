import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        button: "166px",
      },
      padding: {
        button: "8px 32px",
      },
      colors: {
        Background: "#0D1117",
        Primary: "#122B53",
        Secondary: "#285FB3",
        Modal: "#20262E",
        "Background-light": "#2F363E",
        Lighter: "#575B5F",
        Rejection: "#F31F1F",
        "Rejection-background": "#531212",
        "Rejection-stroke": "#B32862",
        TextOnTicket: "#8C8E98",
        SuccessGreen: "#04CF00",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
