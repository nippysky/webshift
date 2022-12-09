/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonikRegular: "AeonikTRIAL-Regular",
        aeonikBold: "AeonikTRIAL-Bold",
        kallistoBold: "KallistoBold",
        kallistoHeavy: "KallistoHeavy",
        kallistoMedium: "KallistoMedium",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
