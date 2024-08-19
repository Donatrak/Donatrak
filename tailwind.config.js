/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Colors
      colors: {
        primary: {
          light: "#6BB5FF", // Light shade for buttons, highlights, etc.
          DEFAULT: "#0056B3", // Primary blue for branding
          dark: "#004086", // Darker shade for hover states
        },
        secondary: {
          light: "#FFD166", // Light shade for accents
          DEFAULT: "#FAA61A", // Main secondary color (e.g., CTA buttons)
          dark: "#C17B00", // Darker shade for hover or active states
        },
        neutral: {
          light: "#F7FAFC", // Light backgrounds
          DEFAULT: "#EDF2F7", // Base background color
          dark: "#975563", // Darker neutral for borders, etc.
        },
        accent: {
          red: "#E53E3E", // Accent red for error messages, critical buttons
          green: "#38A169", // Accent green for success messages
          yellow: "#ECC94B", // Accent yellow for warnings
          blue: "#3182CE", // Accent blue for links, info
        },
        background: {
          light: "#FFFFFF", // White backgrounds
          DEFAULT: "#F7F8FA", // Slightly off-white background for main content
          dark: "#1A202C", // Dark mode background
        },
      },

      // Typography
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },

      // Spacing
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        2.5: "0.625rem", // 10px
        3: "0.75rem", // 12px
        3.5: "0.875rem", // 14px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        7: "1.75rem", // 28px
        8: "2rem", // 32px
        9: "2.25rem", // 36px
        10: "2.5rem", // 40px
        11: "2.75rem", // 44px
        12: "3rem", // 48px
        14: "3.5rem", // 56px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        28: "7rem", // 112px
        32: "8rem", // 128px
        36: "9rem", // 144px
        40: "10rem", // 160px
        44: "11rem", // 176px
        48: "12rem", // 192px
        52: "13rem", // 208px
        56: "14rem", // 224px
        60: "15rem", // 240px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },

      // Borders & Radius
      borderRadius: {
        none: "0",
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        full: "9999px", // Full rounding (e.g., pill buttons)
      },

      // Shadows
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },

      // Z-Index
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        999: "999", // For modals or dropdowns
      },

      // Transitions
      transitionDuration: {
        DEFAULT: "300ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // For form element styles
    require("@tailwindcss/typography"), // For better typography styles
    require("@tailwindcss/aspect-ratio"), // For aspect-ratio utilities
    require("@tailwindcss/line-clamp"), // For text truncation utilities
  ],
};
