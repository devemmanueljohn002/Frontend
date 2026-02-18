// theme.ts
// Centralized design tokens for Tailwind / styled-components usage

export const theme = {
  colors: {
    primary: "#D97706", // amber-600
    primaryHover: "#B45309", // amber-700
    secondary: "#1F2937", // gray-800
    accent: "#FBBF24", // amber-400
    background: "#F9FAFB", // gray-50
    text: "#111827", // gray-900
    danger: "#DC2626", // red-600
    white: "#FFFFFF",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.15)",
    xl: "0 20px 25px rgba(0,0,0,0.2)",
  },
  transition: {
    fast: "all 0.2s ease-in-out",
    normal: "all 0.3s ease-in-out",
    slow: "all 0.5s ease-in-out",
  },
};
