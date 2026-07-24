// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { escapeHTML } from 'astro/runtime/server/escape.js';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: 'LaCabra Docs',
				es: 'Documentación LaCabra',
			},
			defaultLocale: 'es',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ 
					label: "Introduction",
					slug: "intro/intro",
					translations:{
						en: "Introduction",
						es: "Introducción"
					}
				},
				{
					label: 'Commands',
					translations: {
						en: 'Commands',
						es: 'Comandos'
					},
					items: [
						{ label: 'Example Guide', slug: 'commands/example' },
					],
				},
				{
					label: 'Configuration',
					translations: {
						en: 'Configuration',
						es: 'Configuración'
					},
					items: [
						{ slug: 'config/howto' },
					],
				},
			],
		}),
	],
});
