module.exports = {
    purge: [
        './resources/views/welcome.blade.php',
        './resources/js/app.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    prefix: 'tw-',
    important: true,
    backgroundImage: {
        'hero-pattern': "url('https://cdn.shopify.com/s/files/1/0430/9811/2168/files/home1-banner-1_540x.jpg?v=1595412984')",
    }
}