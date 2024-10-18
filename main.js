import "./sass/main.scss";
import { Octokit } from "@octokit/rest";

const dropdownLinks = document.querySelectorAll(".dropdown__link");
const allDropdownMenus = document.querySelectorAll(".dropdown__menu");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdownMenu = link.nextElementSibling;

    allDropdownMenus.forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("show");
      }
    });
    dropdownMenu.classList.toggle("show");
  });
});




//github api

const octokit = new Octokit({ 
  auth: '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'
});


async function getMyRepos() {
  try {
    const response = await octokit.repos.listForAuthenticatedUser({
      visibility: 'all', 
    });

    console.log(response.data); 
    return response.data; 
  } catch (error) {
    console.error("Erreur lors de la récupération des repos :", error);
  }
}


async function displayRepos() {
  const repos = await getMyRepos();
  const repoList = document.getElementById('repo-list');
  console.log(repos);

  repos.forEach(repo => {
    const listItem = document.createElement('li');
    listItem.textContent = `${repo.name} - ${repo.html_url}`;
    repoList.appendChild(listItem);
  });
}

displayRepos();