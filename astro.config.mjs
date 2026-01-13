// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://openthrow.com',
	base: '/',
	outDir: './dist',
	integrations: [
		starlight({
			title: 'Open Throw',
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/openthrowyoyo' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/openThrow/openThrow' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Creating a Shell', slug: 'getting-started' },
					]
				},
				{
					label: 'Hub',
					items: [
						{ label: 'overview', slug: 'hub/overview' },
						{ label: 'Available Hubs',
							items: [
								{label: 'Type C', slug: 'hub/type-c'},
								{label: 'Spec XS', slug: 'hub/spec-xs'},
							]
						},
					],
				},
				{
					label: 'Self-Sealing Stem Bolt',
					items: [
						{ label: 'overview', slug: 'sssb/overview' },
						{
							label: 'interconnect',
							slug: 'sssb/interconnect'
						},
						{ label: 'stems',
							items: [
							{label: 'openThrow (default)', slug: 'sssb/stems/ot'},
							{label: 'FD Stem', slug: 'sssb/stems/fd'},
							{label: 'Cabal Guts', slug: 'sssb/stems/od'}
						] },
					],
				},
				{
					label: 'OT Compatible Yo-yos',
					autogenerate: { directory: 'models'}
				},
				{
					label: 'Other Yo-yos and Mods',
					autogenerate: { directory: 'other'}
				}
			],
		}),
	],
});
