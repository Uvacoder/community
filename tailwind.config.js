/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,tsx,css}'],
    theme: {
        extend: {
            colors: {
                discord: {
                    1: 'rgb(88, 101, 242)',
                    2: 'rgb(71, 82, 196)',
                },
                twitter: {
                    1: 'rgb(29, 155, 240)',
                    2: 'rgb(26, 140, 216)',
                },
                neutral: {
                    900: '#121212',
                },
            },
        },
    },
    plugins: [],
};
