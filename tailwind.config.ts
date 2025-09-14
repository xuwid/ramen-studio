import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Enhanced Korean K-wave colors
        korean: {
          pink: "hsl(var(--korean-pink))",
          rose: "hsl(var(--korean-rose))",
          peach: "hsl(var(--korean-peach))",
          blue: "hsl(var(--korean-blue))",
          purple: "hsl(var(--korean-purple))",
          green: "hsl(var(--korean-green))",
          orange: "hsl(var(--korean-orange))",
        },
        // Keep kawaii for compatibility
        kawaii: {
          blue: "hsl(var(--korean-blue))",
          green: "hsl(var(--korean-green))",
          yellow: "hsl(var(--sticky-yellow))",
          purple: "hsl(var(--korean-purple))",
          orange: "hsl(var(--korean-orange))",
        },
        neon: {
          pink: "hsl(var(--neon-pink))",
          rose: "hsl(var(--neon-rose))",
          peach: "hsl(var(--neon-peach))",
          blue: "hsl(var(--neon-blue))",
          green: "hsl(var(--neon-green))",
          orange: "hsl(var(--neon-orange))",
          red: "hsl(var(--neon-red))",
        },
        wood: {
          light: "hsl(var(--wood-light))",
          medium: "hsl(var(--wood-medium))",
          dark: "hsl(var(--wood-dark))",
        },
        sticky: {
          pink: "hsl(var(--sticky-pink))",
          rose: "hsl(var(--sticky-rose))",
          peach: "hsl(var(--sticky-peach))",
          blue: "hsl(var(--sticky-blue))",
          green: "hsl(var(--sticky-green))",
          yellow: "hsl(var(--sticky-yellow))",
          lavender: "hsl(var(--sticky-lavender))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Removed gentle-float for better performance
        "slide-in-up": {
          from: { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Removed gentle-float animation for better performance
        "slide-up": "slide-in-up 0.5s ease-out forwards", 
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
