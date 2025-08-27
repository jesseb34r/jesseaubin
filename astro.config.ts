import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
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
          pageResolver: (name: string) => [
            name.replace(/ /g, "-").toLowerCase(),
          ],
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
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
