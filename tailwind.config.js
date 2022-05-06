const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './vendor/sole-x/blog/src/resource/views/**/*.blade.php'
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            fontWeight: ['hover', 'focus'],
            borderWidth: ['hover', 'focus', 'dark'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
