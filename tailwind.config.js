/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGold: '#C9A96E',
        darkGold: '#8B6914',
        primaryDark: '#1A1A2E',
        background: '#FDF8F3',
        surface: '#FFFFFF',
        surfaceAlt: '#F5EFE6',
        success: '#4CAF8C',
        accentLight: '#E8D5B7',
        // New Contrast Compliant Text Colors
        textHeading: '#1A1A1A',
        textPrimary: '#1C1C1C',
        textSecondary: '#333333',
        textMuted: '#444444',
        textDescription: '#3D3D3D',
        textOnDark: '#FFFFFF',
        textFooterLinks: '#E8E8E8',
        textPlaceholder: '#888888',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
