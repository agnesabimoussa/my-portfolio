## Agnes Abi Moussa Portfolio

Personal portfolio website showcasing projects, skills, and contact details.

## Features
- Responsive single-page layout
- Dark mode toggle
- Dynamic projects section pulled from GitHub API with a local fallback
- Lightweight styling with Tailwind CSS

## Tech Stack
- HTML
- CSS (Tailwind CSS + custom styles)
- JavaScript

## Usage
Open index.html in a browser, or use a local static server.

## Projects Data Source
The projects section fetches public repositories from https://github.com/agnesabimoussa via the GitHub API. If the API is unavailable or rate-limited, it falls back to repos.json.

To exclude repos, edit the filter in script.js (see loadProjects).

## Deployment
This site is fully static and deploys for free on GitHub Pages.

## Customize
- Update content in index.html
- Adjust styles in input.css (then rebuild output.css if you are using Tailwind build scripts)
- Update the fallback repo list in repos.json
