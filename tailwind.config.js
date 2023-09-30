/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: "#666",
        f4: "#f4f4f4",
        lightgray: "#ccc",
        "w-background": "#fff",
        "keatext-purple": "#7a5cfa",
        darkgray: {
          "100": "#a0a0a0",
          "200": "#979797",
        },
        black: "#000",
        lightcyan: "#d0f7fa",
        gainsboro: "#d4d9e4",
        silver: "#c4c4c4",
        royalblue: "#1d4ed8",
        teal: "#00635b",
        darkgreen: "#087b2f",
        firebrick: "#a80000",
        mintcream: "#f4fbf7",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "6xl": "25px",
      mini: "15px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
