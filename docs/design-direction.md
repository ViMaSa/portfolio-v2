# ViMaSa.dev — redesign direction

## Goal
A professional software engineering portfolio with an optional second layer of personality and interactive experiments. A recruiter should find projects, experience, case studies, and contact links quickly, without needing to use the Playground.

## Visual direction
- Dark navy background, restrained electric-blue and violet accents.
- Generous spacing, strong headline, polished project cards.
- Real project screenshots, professional photography, and verified results should replace starter abstract art as assets become available.
- Mobile-first navigation, keyboard-visible focus states, reduced-motion support.

## Routes
- `/` — introduction, highlighted work, optional personal side.
- `/projects` — project grid with detailed `/projects/[slug]` case studies.
- `/experience` — production software work and education.
- `/about` — personal story and interests.
- `/playground` — optional hobby widgets and interactive experiments.
- `/connect` — email, GitHub, LinkedIn and later curated posts.

## Future integrations (do not block initial rendering)
- Sleeper: fantasy football stats server-side with caching.
- Gaming statistics: use only official or permitted APIs, graceful fallback.
- AniList: cache the shelf and avoid API requests on every navigation.
- LinkedIn: hand-curated post links / supported post embeds instead of relying on restricted API access.
- DriftSync: independent app and repository; portfolio links to it or consumes public cached preview data.
- Car-soccer challenge: original visuals and gameplay; load the game only when requested.

## Publishing policy
- Current `www.vimasa.dev` stays on the existing Vercel project until v2 is reviewed and deployed.
- No fabricated performance metrics, live API claims, testimonials, or screenshots.
- The site should introduce Victor as a software engineer with prior production experience, not as someone who has never held the role.

## Starter status
Pages are usable, and project summaries are starter content based on the supplied résumé and portfolio conversations. The playground modules are clearly marked *Planned*. Replace the placeholders and review facts before production launch.
