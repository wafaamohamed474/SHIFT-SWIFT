/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "extra-wide": "0.2em",
      },
      colors: {
        "bg-color": "var(--bg-color)",
        "fill-bg-color": "var(--fill-bg-color)",
        "main-color": "var(--main-color)",
        "main-text": "var(--main-text)",
        "dark-text": "var(--dark-text)",
        "active-btn": "var(--active-btn)",
        "disable-btn": "var(--disable-btn)",
        "light-hover": "var(--light-hover)",
        "border-color": "var(--border-color)",
      },
      container: {
        center: false,
        padding: {
          DEFAULT: "2rem", // Apply 1rem padding on all screens
        },
        screens: {
          sm: "100%", // For small screens, take full width
          md: "100%", // For medium screens, take full width
          lg: "100%", // For large screens, take full width
          xl: "100%", // For extra-large screens, take full width
          "2xl": "100%", // For extra extra-large screens, take full width
        },
      },
    },
  },
  plugins: [],
};
