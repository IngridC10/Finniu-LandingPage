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
        "gradient-light": "linear-gradient(to bottom, #C2EFFF, #FFFFFF)",
        gradient: "linear-gradient(to right, #051926 50%,#DCF6FF 50%)",
      },

      fontFamily: {
        myFont: ["DmSans-custom", "sans-serif"],
      },

      colors: {
        lightBlueColor: "#B0E5F8",
        lighBlue: "#DFF7FF",
        lightGradient: "#C2EFFF",
        whiteGradient: "#FFFFFF",
        skyBlueColor: "#C9F1FF",
        lightSkyBlue: "#DAF3FE",
        lightColor: "#DCF6FF",
        lightBlueColorOpcional: "#ECFAFF",
        lightColorOpcional: "#E5F8FF",
        lighBlueColorSimulador: "#44879F",
        darkBlueColorOpcional: "##091925",
        lightTextNavBar: "#97E3FF",
        blueDarkColor: "#051926",
        blueColorButton: "#1A3A5A",
        lighBlueColorOpcional: "#F0FBFF",
        blueColorBackground: "#1A3A5A",
        darkBlueColor: "#0D3A5C",
        grayColorOpcional: "#FAFAFA",
        grayColorLine: " #D9D9D9",
        grayColorBackground: "#B8B8B8",
        grayColor: "#F4F4F4",
        grayButtonColor: "#E8E8E8",
        grayColorText: "#B8B8B8",
        customGray: "#555454",
        graySecondaryColor: "#140F0F",
        lilaColor: "#D2B7FF",
        lightSecondaryColor: "##F0FBFF",
        backgroundLightColor: "#E7F9FF",
        backgroundDarkColor: "#212121",
        whiteColor: "#F7FAFB",
        blackColorText: "#020202",
        mustardColor: "#FDEFDF",
        greenColor: "#04A260",
        cremeColor: "#FFEEDD",
        customLightBlue: "#A2E6FA",
        blueCustom: "#DBF7FF",
        customRed: "#EC4852",
        customGreen: "#55B63D",
        customBackgroundLight: "#F5FDFF",
        customDarkblue: "#8FE6FF",
        customGreenSecondary: "#32a071",
        customGreenPrimary: "#388923",
        customBlack: "#2c2c2c",
      },

      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",

        // "2xl": "1400px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
