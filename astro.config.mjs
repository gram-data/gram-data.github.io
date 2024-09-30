// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Gram',
        social: {
            github: 'https://github.com/gram-data',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    { label: 'Mapping to a Property Graph', slug: 'guides/mapping-to-a-property-graph' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
          ],
    
		}), tailwind({
            applyBaseStyles: false
        })],
});