const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            orange: colors.orange,
            amber: colors.amber,
            gray: colors.gray,
            white: colors.white,
            indigo: colors.indigo,
            blue: colors.blue
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}