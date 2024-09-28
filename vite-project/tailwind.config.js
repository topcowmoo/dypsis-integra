/** @type {import('tailwindcss').Config} */ // Specify the type of Tailwind CSS configuration

// Tailwind CSS configuration object
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify the files where Tailwind should look for classes
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Extend the default font family to include 'Poppins'
      },
      colors: {
  
        dcbt: { 
          dark: "#B7DEE7",
      },
        title: {
          light: "#004262", // Light mode title
          dark: "#87C9D8", // Dark mode title
        },
        bgc: {
          light: "#F7F9F9", // Light background
          dark: "#2C3E50", // Dark background
        },
        alltext: {
          light: "#005a85", // Light mode text
          dark: "#d4d4d4", // Dark mode text
        },
        highlight: {
          light: "#CC3600", // Light mode highlight
          dark: "#fbb67f", // Dark mode highlight
        },
      },
      brightness: {
        60: ".6",
      },
    },
  },
  plugins: [], // Optionally specify Tailwind plugins to include
};
