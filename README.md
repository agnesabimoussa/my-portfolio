# Agnes Abi Moussa Portfolio

A modern, responsive, deploy-ready personal portfolio website built as a static web app (HTML/CSS/JavaScript).

## What this project includes

- Fully responsive layout for desktop, tablet, and mobile
- Sticky header with required navigation:
  - About Me
  - Projects
  - Contact
  - Download Resume button
- Personalized About section based on public GitHub/profile information
- Selected project cards linked to public GitHub repositories
- Functional contact form with client-side validation
- No backend required: form opens a pre-filled `mailto:` draft
- Scroll reveal animations and active section navigation state

## Tech Stack

- HTML5
- CSS3 (custom design system with variables)
- Vanilla JavaScript

## How this was built

1. Replaced the template markup with a custom semantic structure (`header`, `main`, sections, `footer`).
2. Implemented a custom visual system in `input.css`:
   - Color tokens and spacing scale
   - Glassmorphism-like cards and gradient accents
   - Responsive breakpoints and mobile navigation behavior
3. Added JS behaviors in `script.js`:
   - Mobile menu toggle
   - Active nav highlighting by scroll position
   - IntersectionObserver reveal animations
   - Contact form validation and email draft generation
4. Added a downloadable resume file at `assets/Agnes-Abimoussa-Resume.txt`.

## Run locally

Because this is a static site, you can run it directly:

1. Open `index.html` in a browser.

Or run with a local static server (recommended):

1. `npx serve .`
2. Open the local URL shown in terminal.

## Deploy

You can deploy on GitHub Pages, Netlify, or Vercel as a static site.

### Option 1: GitHub Pages

1. Push the project to a GitHub repository.
2. In repository settings, open **Pages**.
3. Set source to the main branch root.
4. Save and wait for the URL to be generated.

### Option 2: Netlify

1. Create a new site from Git.
2. Connect your repository.
3. Build command: leave empty.
4. Publish directory: `.` (root).
5. Deploy.

### Option 3: Vercel

1. Import the repository.
2. Framework preset: `Other`.
3. Build command: none.
4. Output directory: `.`.
5. Deploy.

## Production note

For production, replace `assets/Agnes-Abimoussa-Resume.txt` with a PDF and update the resume link in `index.html` if needed.
