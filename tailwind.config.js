module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "illustrations-colorsgreen-100": "var(--illustrations-colorsgreen-100)",
        "illustrations-colorspurple-100":
          "var(--illustrations-colorspurple-100)",
        "illustrations-colorsred-200": "var(--illustrations-colorsred-200)",
        "illustrations-colorsred-300": "var(--illustrations-colorsred-300)",
        "logo-colorsfacebook": "var(--logo-colorsfacebook)",
        "logo-colorslinkedin": "var(--logo-colorslinkedin)",
        "logo-colorstwitter": "var(--logo-colorstwitter)",
        "neutral-colors100": "var(--neutral-colors100)",
        "neutral-colors200": "var(--neutral-colors200)",
        "neutral-colors300": "var(--neutral-colors300)",
        "neutral-colors400": "var(--neutral-colors400)",
        "neutral-colors500": "var(--neutral-colors500)",
        "neutral-colors600": "var(--neutral-colors600)",
        "primary-colorsaccent": "var(--primary-colorsaccent)",
        "secondary-colors200": "var(--secondary-colors200)",
        "secondary-colors300": "var(--secondary-colors300)",
        "secondary-colors400": "var(--secondary-colors400)",
        "secondary-colors500": "var(--secondary-colors500)",
        "secondary-colors600": "var(--secondary-colors600)",
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
        "headings-heading-2": "var(--headings-heading-2-font-family)",
        "headings-heading-h4": "var(--headings-heading-h4-font-family)",
        "headings-heading-h7": "var(--headings-heading-h7-font-family)",
        "paragraph-default": "var(--paragraph-default-font-family)",
        "text-single-100-regular": "var(--text-single-100-regular-font-family)",
        "text-single-200-medium": "var(--text-single-200-medium-font-family)",
        "text-single-200-regular": "var(--text-single-200-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "cards-shadow-9": "var(--cards-shadow-9)",
        "general-shadows-shadow-01": "var(--general-shadows-shadow-01)",
        "general-shadows-shadow-02": "var(--general-shadows-shadow-02)",
        "general-shadows-shadow-04": "var(--general-shadows-shadow-04)",
        "general-shadows-shadow-05": "var(--general-shadows-shadow-05)",
        "general-shadows-shadow-06": "var(--general-shadows-shadow-06)",
        "general-shadows-shadow-07": "var(--general-shadows-shadow-07)",
        "general-shadows-shadow-09": "var(--general-shadows-shadow-09)",
        "other-input": "var(--other-input)",
        "other-logo-icon": "var(--other-logo-icon)",
        "other-text": "var(--other-text)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // move only half the width since it's duplicated
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      
      
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.active-nav-item': {
          fontFamily: "'Plus_Jakarta_Display-Medium', Helvetica",
          fontWeight: '500',
          color: '#f4263e !important',
        },
      })
    }
  ],
  darkMode: ["class"],
};
