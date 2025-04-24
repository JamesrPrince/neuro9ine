# Personal Blog & Portfolio

A modern, responsive website built with Astro featuring a blog and portfolio section.

## ✨ Features

- ✅ Minimal, clean design
- ✅ Blog with Markdown & MDX support
- ✅ Portfolio showcase
- ✅ Dark/Light theme toggle
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Responsive typography with Atkinson font

## 🚀 Project Structure

```text
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Key Directories

- `src/pages/` - Main pages including blog and portfolio
- `src/content/blog/` - Blog posts in Markdown/MDX format
- `src/data/` - Portfolio project data
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts including BlogPost and ProjectPage
- `public/` - Static assets like fonts and images

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 💻 Tech Stack

- [Astro](https://astro.build)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
