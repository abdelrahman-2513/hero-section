/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
    extend: {
        animation: {
            'spin-slow': 'spin 30s linear infinite',
        },
        fontFamily: {
            hero: ['"Segoe UI"', 'sans-serif'],
        },
    }

};