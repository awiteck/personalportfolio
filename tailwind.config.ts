import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#1E1E1E', // Dark text for light mode
          dark: '#FFFFFF',    // Light text for dark mode
        },
        secondary: {
          DEFAULT: '#967969', // Your brown accent color
          hover: '#5D4037',   // Darker shade for hover states
        },
        // Add link colors
        link: {
          DEFAULT: '#967969',    // Normal link color (light mode)
          hover: '#5D4037',      // Hover color (light mode)
          dark: '#B8A395',       // Dark mode link color
          'dark-hover': '#D4C3B8' // Dark mode hover color
        }
      },
    },
  },
  plugins: [
    // Add a plugin for default link styles
    function({ addComponents }: PluginAPI) {
      addComponents({
        '.link-default': {
          '@apply text-link hover:text-link-hover dark:text-link-dark dark:hover:text-link-dark-hover underline':
            {},
        },
      })
    },
  ],
} satisfies Config;
