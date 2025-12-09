// Design tokens for 1980s sci-fi theme

export const theme = {
  colors: {
    dark: "#0a1a0a",
    darkGreen: "#1a3a1a",
    green: "#2d5a2d",
    lightGreen: "#4a7c4a",
    orange: "#ff6600",
    darkOrange: "#cc5500",
    neonOrange: "#ff8833",
    gray: "#2a2a2a",
    lightGray: "#4a4a4a",
    text: "#e0e0e0",
    textDark: "#a0a0a0",
  },
  fonts: {
    mono: "'Courier New', monospace",
    techno: "'Courier New', monospace",
  },
  spacing: {
    section: "4rem", // 64px
    sectionMd: "6rem", // 96px
  },
  borderRadius: {
    default: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
  },
} as const

