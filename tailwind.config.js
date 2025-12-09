/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1980s sci-fi theme: dark green and orange
        sci: {
          dark: "#0a1a0a",      // Very dark green background
          darkGreen: "#1a3a1a",  // Dark green
          green: "#2d5a2d",      // Medium green
          lightGreen: "#4a7c4a", // Light green
          orange: "#ff6600",     // Bright orange
          darkOrange: "#cc5500", // Dark orange
          neonOrange: "#ff8833", // Neon orange accent
          gray: "#2a2a2a",       // Dark gray
          lightGray: "#4a4a4a",  // Light gray
          text: "#e0e0e0",       // Light text
          textDark: "#a0a0a0",   // Darker text
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
        techno: ["'Courier New'", "monospace"],
      },
      boxShadow: {
        'sci-glow': '0 0 10px rgba(255, 102, 0, 0.5)',
        'sci-glow-green': '0 0 10px rgba(45, 90, 45, 0.5)',
        'sci-border': '0 0 0 1px rgba(255, 102, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 102, 0, 0.5)' },
          '100%': { boxShadow: '0 0 15px rgba(255, 102, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

