/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        "custom-red-1": "#ff0000",
        "custom-red-2": "#f2090a",
        "custom-red-3": "#e51011",
        "custom-red-4": "#d71616",
        "custom-red-5": "#ca1a1a",
        "custom-red-6": "#cb291a",
        "custom-red-7": "#cc351a",
        "custom-red-8": "#cd3f1b",
        "custom-orange-1": "#db5417",
        "custom-orange-2": "#e96912",
        "custom-orange-3": "#f47e0a",
        "custom-orange-4": "#ff9300",
      },
    },
  },
  plugins: [],
};
