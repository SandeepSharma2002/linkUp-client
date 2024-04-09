/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            'xs': '10px',
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
                inter: ["'Inter'", "sans-serif"],
                gelasio: ["'Gelasio'", "serif"]
            },
            height: {
                '100vh-h-7': 'calc(100vh - 80px)',
              },

            boxShadow: {
                'custom': '0px 0px 10px #fff, 0px 0px 10px #614ad3',
            },
        },

    },
    plugins: [],
};