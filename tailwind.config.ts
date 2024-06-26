import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        lightBlueColor: "#B0E5F8",
        blueDarkColor: "#051926",
        lighBlue: "#DFF7FF",
        skyBlueColor: "#C9F1FF",
        lighBlueColorOpcional: "#F0FBFF",
        darkBlueColor: "#0D3A5C",
        grayColor: "#F4F4F4",
        graySecondaryColor: "#B8B8B8",
        lilaColor: "#D2B7FF",
        lightSecondaryColor: "##F0FBFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
