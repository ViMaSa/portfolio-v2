# ViMaSa.dev — Portfolio V2

A fresh Next.js / TypeScript / Tailwind CSS portfolio for Victor Sarmiento, with professional project case studies and a separate Playground for future interactive features.

> **Starter project:** This is an initial foundation, not a launched redesign. All third-party API ideas are placeholders for later work. It does not touch the current production portfolio or its DNS settings.

## Tech stack
- Next.js 16 App Router
- React 19
- TypeScript (strict)
- Tailwind CSS 4 + custom global design tokens
- No required database, API keys or external services for initial startup

## Requirements
- Node.js 20.9+ (Node 22 LTS recommended)
- npm and Git

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The first `npm install` creates `package-lock.json`; commit this lockfile when you push your starter.

## Run checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Create a new GitHub repository

1. On GitHub, choose **New repository** or visit https://github.com/new.
2. Owner: `ViMaSa`, name: `portfolio-v2`, visibility: **Public** (or Private if you prefer).
3. Do **not** initialize with a README, `.gitignore`, or license, because these files are already here.
4. Unzip the starter archive and open a terminal in this `portfolio-v2` folder.
5. Run:

```bash
npm install
git init -b main
git add .
git commit -m "chore: initialize portfolio v2 starter"
git remote add origin https://github.com/ViMaSa/portfolio-v2.git
git push -u origin main
```

If your GitHub credentials are not configured for pushing over HTTPS, authenticate with `gh auth login` (GitHub CLI) or use GitHub Desktop.

## Deployment later

1. Import `ViMaSa/portfolio-v2` in Vercel **as a new project**.
2. Keep the generated `*.vercel.app` URL as the preview while building.
3. When ready, move `vimasa.dev` and `www.vimasa.dev` from the old Vercel project to the new one. Don't do this during initial setup.

## Pages
- `/` — homepage
- `/projects` — real work
- `/projects/[slug]` — project detail
- `/experience` — career and education
- `/about` — story and interests
- `/playground` — planned interactive work
- `/connect` — contact links

## Project data
Edit `src/data/projects.ts` to update featured projects, URLs, status and verified metrics. Replace abstract project art in `src/components/ProjectCard.tsx` with real screenshots later.

## Next steps
- Add real headshot / imagery (only with your consent for public use)
- Review all copy and project details
- Add a general-purpose PDF résumé to `public/resume/` and wire up a Download Résumé button
- Add curated LinkedIn highlights
- Build and measure accessibility and Lighthouse performance
- Implement optional cached integrations behind independent components
- Develop DriftSync as its **own** application/repository
