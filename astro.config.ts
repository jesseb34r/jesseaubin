import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { wikiLinkPlugin } from "remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          pageResolver: (name: string) => [name.replace(/ /g, "-").toLowerCase()],
          hrefTemplate: (slug: string) => `/notes/${slug}`,
          wikiLinkClassName: "",
          newClassName: "",
        },
      ],
    ],
  },
  redirects: {
    "/notes": "/notes/about-these-notes",
  },
  integrations: [solidJs(), tailwind()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
