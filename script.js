document.addEventListener('DOMContentLoaded', () => {
  applyThemeFromStorage();
  loadProjects();
});

const navbar = document.getElementById('navbar');
const navLink = document.getElementById('navLink');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.style.transform = 'translateX(0)';
}

function applyThemeFromStorage() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark);
  document.documentElement.classList.toggle('dark', shouldUseDark);
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

window.addEventListener('scroll', () => {
  if (!navbar || !navLink) return;
  if (scrollY > 50) {
    navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent');
  } else {
    navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', 'dark:bg-transparent');
  }
});

async function loadProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  try {
    const repos = await fetchRepos();
    const selected = repos
      .filter((repo) => !repo.fork && repo.name !== 'agnesabimoussa')
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 6);

    container.innerHTML = '';
    selected.forEach((repo) => {
      container.appendChild(createProjectCard(repo));
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p class="text-center col-span-full">Projects are temporarily unavailable.</p>';
  }
}

async function fetchRepos() {
  const apiUrl = 'https://api.github.com/users/agnesabimoussa/repos?per_page=100&sort=pushed';
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github+json'
      }
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('GitHub API fetch failed:', error);
  }

  const fallback = await fetch('./repos.json');
  if (!fallback.ok) {
    throw new Error('Failed to load repos.json');
  }
  return await fallback.json();
}

function createProjectCard(repo) {
  const card = document.createElement('article');
  card.className = 'project-card';

  const description = repo.description ? repo.description : 'No description available yet.';
  const language = repo.language ? repo.language : 'Project';

  card.innerHTML = `
    <div class="project-card__header">
      <div class="project-card__body">
        <h3 class="project-card__title">${repo.name}</h3>
        <p class="project-card__desc">${description}</p>
      </div>
    </div>
    <div class="project-card__footer">
      <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="project-card__link">
        View repo
        <img src="./assets/right-arrow-bold.png" alt="" class="w-4 dark:hidden">
        <img src="./assets/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">
      </a>
    </div>
  `;

  return card;
}
