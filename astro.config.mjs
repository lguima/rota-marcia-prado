// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

import remarkYouTubeEmbed from './src/plugins/remarkYouTubeEmbed.js'
import remarkGoogleMapsEmbed from './src/plugins/remarkGoogleMapsEmbed.js'
import remarkIframeEmbed from './src/plugins/remarkIframeEmbed.js'
import remarkPdfEmbed from './src/plugins/remarkPdfEmbed.js'

export default defineConfig({
    site: 'https://rotamarciaprado.org',
    output: "server",
    adapter: node({
      mode: 'standalone',
    }),
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }), sitemap()],
    i18n: {
      locales: ["pt-BR"/* {
        path: "es",
        codes: ["es", "es-ES", "es-UY", "es-AR", "es-CL", "es-PY", "es-BO", "es-PE", "es-EC", "es-CO", "es-VE"],
      },  {
        path: "en",
        codes: ["en", "en-US", "en-GB", "en-CA", "en-AU"],
      }*/],
      defaultLocale: "pt-BR",
      /*fallback: {
        es: "pt-BR",
        en: "pt-BR",
      },*/
    },
    image: {
      remotePatterns: [{ protocol: "https" }],
      domains: ["res.cloudinary.com"],
    },
    markdown: {
        processor: unified({
            remarkPlugins: [
                remarkYouTubeEmbed,
                remarkGoogleMapsEmbed,
                remarkIframeEmbed,
                remarkPdfEmbed,
            ],
        }),
    },
});
