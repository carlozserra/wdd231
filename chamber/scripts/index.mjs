import { apiFetch, fetchForecast, getCompanies } from './home-page.mjs';
import './discover.js';
import { checkLastVisit } from './discover.js';

document.addEventListener("DOMContentLoaded", () => {
  fetchForecast();
  getCompanies();
  apiFetch();
  checkLastVisit();

  // Ano atual
  const today = new Date();
  const year = document.querySelector("#currentYear");
  year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

  // Última modificação
  let lastModified = document.querySelector("#lastModified");
  lastModified.innerHTML = `<span class="highlight"> Last Modified: ${document.lastModified}</span>`;

  // Botão hambúrguer
  const hamburgerButton = document.querySelector('#hamButton');
  const navElement = document.querySelector('#animated');

  hamburgerButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
  });
});


