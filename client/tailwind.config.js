/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            spacing: {
                '44p': '44%',
                '46p': '46%',
                '48p': '48%',
                '95p': '95%',
                '97p': '97%',
                '98p': '98%',
                '99p': '99%',
            },
        },
        colors: {
            dark: {
                text: '#eaeaeb',
                background: '#0C0409',
                primary: '#7198E0',
                secondary: '#040a16',
                accent: '#205ac5',
            },
            light: {
                text: '#141415',
                background: '#FBF4F8',
                primary: '#1F468E',
                secondary: '#E9EFFB',
                accent: '#3A73DF',
            },
        },
    },
    plugins: [],
};
