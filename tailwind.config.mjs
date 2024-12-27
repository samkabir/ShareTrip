/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.customContainer': {
          display: 'grid',
          'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
          gap: '0.25rem',
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.customGridRange': {
          'grid-column-start': '2', 
          'grid-column-end': '12',
        },
      });
    },
  ],
};
