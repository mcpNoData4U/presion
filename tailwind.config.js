/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5', // Un color primario de ejemplo
                secondary: '#10B981', // Un color secundario de ejemplo
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class', // Habilitar modo oscuro basado en la clase 'dark'
}