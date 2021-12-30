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
            minHeight: {
                'perfect': '82vh',
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
            'pink': {
                100: '#DEABEE',
                200: '#D54ECE',
            },
            'teal': '#86D5E7',
            'white': {
                100: '#FFFFFF',
                200: '#81B7E3',
            },
        },
    },
    plugins: [],
}