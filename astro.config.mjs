// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite"
import sitemap from '@astrojs/sitemap'
import { unified } from '@astrojs/markdown-remark'
import { loadEnv } from 'vite'

import remarkYouTubeEmbed from '@plugins/remarkYouTubeEmbed.js'
import remarkGoogleMapsEmbed from '@plugins/remarkGoogleMapsEmbed.js'
import remarkIframeEmbed from '@plugins/remarkIframeEmbed.js'
import remarkPdfEmbed from '@plugins/remarkPdfEmbed.js'

const { SITE_URL, CLOUDINARY_DOMAIN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

export default defineConfig({
  site: SITE_URL ?? "https://rotamarciaprado.org",
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
  ],
  i18n: {
    locales: ["pt-br"/* {
        path: "es",
        codes: ["es", "es-ES", "es-UY", "es-AR", "es-CL", "es-PY", "es-BO", "es-PE", "es-EC", "es-CO", "es-VE"],
      },  {
        path: "en",
        codes: ["en", "en-US", "en-GB", "en-CA", "en-AU"],
      }*/],
    defaultLocale: "pt-br",
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
    '/publicacoes/[...slug]': '/artigos/[...slug]',
    '/duvidas-frequentes': '/perguntas-frequentes',
    '/faq': '/perguntas-frequentes',
    '/aviso-de-privacidade': '/politica-de-privacidade',
    '/termos-de-uso': '/termos-e-condicoes',
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
