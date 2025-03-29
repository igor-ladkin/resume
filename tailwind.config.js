export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "794px",
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
