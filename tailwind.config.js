module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'cubano': ['cubano-sharp', 'sans-serif'],
                'aktiv': ['aktiv-grotesk-extended', 'sans-serif']
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'purple': {
                100: '#5657B3',
                200: '#3E4299',
                300: '#131744',
            },
            'pink': '#D54ECE',
            'teal': '#86D5E7',
            'white': '#FFFFFF',
        },
    },
    plugins: [],
}