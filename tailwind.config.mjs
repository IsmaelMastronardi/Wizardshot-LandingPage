/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'jakartaSans': ['"Plus Jakarta Sans"', 'sans-serif'],
				'openSans': ['"Open Sans"', 'sans-serif'],
				mulish: ['"Mulish"', 'sans-serif'],
      },
			colors: {
				'customPurple': '#ab96f8',
				'customPink': '#ff99d0',
				'customGray': '#363636',
				'customGray2': '#18181b',
				'customLightGray': '#f9fafb',
				'customLightGray2': '#98a2b3',
				'customLightGray3': '#63636e',
				'customBlue': '#03132e',
				'customBlack': '#18181c',
			},
			fontSize: {
				'xxsPlus': '0.65rem',
				'xxs': '0.5rem',
				'xxxs': '0.46rem'
			},
			borderWidth: {
        '3': '3px',
				'1.5':'1.5px',
      },
		},
	},
	plugins: [],
}
