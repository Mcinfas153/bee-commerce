module.exports = {
    purge: [
        './resources/views/welcome.blade.php',
        './resources/js/app.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'category-box-image': "url('https://picsum.photos/200/300')",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    prefix: 'tw-',
    important: true
}