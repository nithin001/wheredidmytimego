/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-amber-500",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-lime-500",
    "bg-purple-500",
    "text-amber-500",
    "text-cyan-500",
    "text-emerald-500",
    "text-lime-500",
    "text-purple-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
