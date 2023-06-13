/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-zinc': 'radial-gradient(circle, rgba(31,31,31,1) 0%, rgba(24,24,27,1) 100%)',
      },
      boxShadow: {
        'iconShadow': '12px 0px 12px 2px #2563eb80',
        'innerShadow': 'inset 0 2px 6px 0 rgb(0 0 0 / 0.02)',
        'shadow-button': '0px 0px 12px 1px'
      }
    },
  },
  plugins: [],
}
