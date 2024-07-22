import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "30px",
        lg: "60px",
        xl: "10px",
      },
    },
    extend: {
      colors: {
        "background-1": "#f8f4f2",
        "background-2": "#1e1c1b",
        border: "#cccccc",
        fg: "#211e1d",
        subtle: "#847E7C",
        primary: "#ff7e3e",
        "border-dark": "#999999",
        "subtle-dark": "#777777",
        "muted-dark": "#66605d",
      },
    },
  },
  plugins: [],
};
export default config;
