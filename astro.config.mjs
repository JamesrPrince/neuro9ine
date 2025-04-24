import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://neuro9ine.com",
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    tailwind(),
    react(),
  ],
  output: "static",
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
    minify: true,
    split: true,
    watch: false,
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        quality: 80,
        formats: ["webp", "avif"],
      },
    },
    domains: [],
    remotePatterns: [],
  },
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "framer-motion"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion"],
    },
  },
});
