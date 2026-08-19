// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { escapeHTML } from 'astro/runtime/server/escape.js';

// https://astro.build/config
export default defineConfig({
	site: "https://docs.lacabra.app/",
	//base: "docs-la-cabra",
	redirects: {
		'/': '/es/',
	},
	integrations: [
		starlight({
			title: {
				en: 'La Cabra',
				es: 'La Cabra',
			},
			logo: {
				src: './src/assets/cabra_neutral.svg',
			},
			favicon: '/cabra_neutral.svg',
			defaultLocale: 'es',
			locales: {
				// English docs in `src/content/docs/en/`
				/*en: { 									// Descomentar para añádir idiomas
					label: 'English',
				},*/
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Discusss/docs-la-cabra' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/SJqrGP7' },
			],
			sidebar: [
				{
					label: "Introduction",
					slug: "intro/intro",
					translations: {
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
						{ slug: 'commands' },
						{ slug: 'commands/moderation' },
						{ slug: 'commands/info' },
						{ slug: 'commands/bot' },
						{ slug: 'commands/misc' },
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
						{ slug: 'config/lang' },
						{ slug: 'config/prefix' },
						{ slug: 'config/authorizations' },
						{ slug: 'config/commands' },
						{ slug: 'config/appeals', badge: "Premium" },
						{ slug: 'config/logs' },
						{ slug: 'config/moderation' },
						{ slug: 'config/censor' },
						//{ slug: 'config/sentinel' },
						{ slug: 'config/messages', badge: "Premium" },
						{ slug: 'config/voice', badge: "Premium" },
					],
				},
				{
					label: 'Extra',
					translations: {
						en: 'Extra',
						es: 'Extra'
					},
					items: [
						{ slug: 'extra/badges' },
					],
				},
			],
		}),
	],
});
