const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px"
		},
        container:{
            center: true,
            padding: '15px'
        },        
        extend: {
            colors:{
                'primary': "#ff5f13",
                'secondary': "#F15F22",
                'heading': "#2C234D",
                'border': "#212429",
                'hover': "#e0581e",
                'gray':{
                    20: "#e1dddd",
                    50: "#f9f9f9",
                    100: "#7B8693",
                    200: "#677294",
                    300: "#64676C",
                    400: "#f5f5f5",
                    500: "#000c20",
                    600: "#717B9B",
                    700: "#121212",
                    800: "#18202d",
                    900: "#868c98",
                    1000: "#BBBCBC",
                    11000: "#03235a",
                    12000: "#b8bbc1",
                    13000: "#A4ACC3",
                }
            }
        },
        fontFamily:{
            primary: ['Teko', 'sans-serif'],
            secondary: ['Barlow', 'sans-serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
