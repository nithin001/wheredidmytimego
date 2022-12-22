/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-amber-300",
    "bg-cyan-300",
    "bg-emerald-300",
    "bg-lime-300",
    "bg-purple-300",
    "bg-gray-300",
    "text-amber-300",
    "text-cyan-300",
    "text-emerald-300",
    "text-lime-300",
    "text-purple-300",
    "text-gray-300",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
