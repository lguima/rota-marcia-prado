// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';
import remarkYoutubeEmbed from './src/plugins/remarkYoutubeEmbed.js'
import remarkVimeoEmbed from './src/plugins/remarkVimeoEmbed.js'
import remarkWistiaEmbed from './src/plugins/remarkWistiaEmbed.js'
import remarkGoogleMapsEmbed from './src/plugins/remarkGoogleMapsEmbed.js'
import remarkIframeEmbed from './src/plugins/remarkIframeEmbed.js'
import remarkPdfEmbed from './src/plugins/remarkPdfEmbed.js'
import remarkGistEmbed from './src/plugins/remarkGistEmbed.js'
import remarkAscinemaEmbed from './src/plugins/remarkAscinemaEmbed.js';
import remarkSoundcloudEmbed from './src/plugins/remarkSoundcloudEmbed.js';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://rotamarciaprado.org',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }), sitemap()],
    image: {
      remotePatterns: [{ protocol: "https" }],
      domains: ["res.cloudinary.com"],
    },
    markdown: {
        processor: unified({
            remarkPlugins: [
                remarkYoutubeEmbed,
                remarkVimeoEmbed,
                remarkWistiaEmbed,
                remarkGoogleMapsEmbed,
                remarkIframeEmbed,
                remarkPdfEmbed,
                remarkGistEmbed,
                remarkAscinemaEmbed,
                remarkSoundcloudEmbed,
            ],
        }),
    },
});
