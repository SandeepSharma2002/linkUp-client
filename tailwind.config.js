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
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '#030712',
            'danger':"#dc2626",
            'success':"#16a34a",
            'primary-600': '#0284c7',
            'primary-500': '#0ea5e9',
            'primary-700': '#0369a1',
            'text-l-600': '#4b5563',
            'text-l-500': '#6b7280',
            'text-d-600': '#4b5563',
            'text-d-500': '#6b7280',
            'gray-light': '#f1f5f9',
            'gray-dark': '#e2e8f0',
            "bg-dark-1": "#374151",
            "bg-dark-2": "#0f172a"
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