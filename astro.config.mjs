// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { loadEnv } from "vite";

import remarkYouTubeEmbed from './src/plugins/remarkYouTubeEmbed.js'
import remarkGoogleMapsEmbed from './src/plugins/remarkGoogleMapsEmbed.js'
import remarkIframeEmbed from './src/plugins/remarkIframeEmbed.js'
import remarkPdfEmbed from './src/plugins/remarkPdfEmbed.js'

const { SITE_URL, CLOUDINARY_DOMAIN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

export default defineConfig({
  site: SITE_URL ?? "https://rotamarciaprado.org",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
    sitemap(),
  ],
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
    domains: [CLOUDINARY_DOMAIN ?? "res.cloudinary.com"],
  },
  redirects: {
    '/duvidas-frequentes': '/perguntas-frequentes',
    '/faq': '/perguntas-frequentes',
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
