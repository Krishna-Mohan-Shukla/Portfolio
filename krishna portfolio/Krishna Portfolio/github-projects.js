const GITHUB_USERNAME = "Krishna-Mohan-Shukla";
const PROJECT_CONTAINER = document.getElementById("github-projects");

async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
    const repos = await response.json();

    const filtered = repos.filter(repo =>
      !repo.fork &&
      repo.description &&
      !["Chat-boat", "Live-Location", "DSABuddy", "Email-Generator"].includes(repo.name)
    );

    filtered.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("column");
      card.setAttribute("data-animate-el", "");

      card.innerHTML = `
        <div class="folio-item">
          <div class="folio-item__thumb">
            <a class="folio-item__thumb-link" href="${repo.html_url}" title="${repo.name}" target="_blank">
              <img src="images/portfolio/default-project.png" alt="${repo.name}">
            </a>
          </div>
          <div class="folio-item__info">
            <div class="folio-item__meta">
              <span class="cat">${repo.language || "Project"}</span>
              <a href="${repo.html_url}" class="project-link" target="_blank">View on GitHub</a>
            </div>
            <h4 class="folio-item__title">${repo.name}</h4>
          </div>
          <div class="folio-item__caption">
            <p>${repo.description}</p>
          </div>
        </div>
      `;

      PROJECT_CONTAINER.appendChild(card);
    });
  } catch (error) {
    console.error("❌ Error fetching repos:", error);
  }
}

fetchGitHubRepos();
