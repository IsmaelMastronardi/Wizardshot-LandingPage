/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'jakartaSans': ['"Plus Jakarta Sans"', 'sans-serif'],
				'openSans': ['"Open Sans"', 'sans-serif'],
      },
			colors: {
				'customPurple': '#ab96f8',
				'customPink': '#ff99d0',
				'customGray': '#363636',
				'customGray2': '#18181b',
				'customBlue': '#03132e',
			},
			fontSize: {
				'xxs': '0.5rem',
			},
		},
	},
	plugins: [],
}
