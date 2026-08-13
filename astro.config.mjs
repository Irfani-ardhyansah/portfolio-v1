// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Local: unset / empty → "/" (http://localhost:4321/)
// Docker/server: BASE_PATH=/portfolio (http://host/portfolio/)
const rawBase = process.env.BASE_PATH?.trim();
const base = !rawBase || rawBase === '/' ? '/' : rawBase;

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	base,
	vite: {
		plugins: [tailwindcss()],
	},
});
