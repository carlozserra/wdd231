import { apiFetch, fetchForecast, getCompanies } from './home-page.mjs';
import './discover.js';
import { checkLastVisit } from './discover.js';

fetchForecast();
getCompanies();
apiFetch();

//create new data object
const today = new Date();
const year = document.querySelector("#currentYear");

//put the new object data into current year 
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//last modified
let lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span class="highlight"> Last Modified: ${document.lastModified}</span>`;

// ======== Hamburger BUTTON ================== 

const hamburgerButton = document.querySelector('#hamButton');
const navElement = document.querySelector('#animated');

hamburgerButton.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
});
/*CHECK LAST VISIT CALLBACK DISCOVER PAGE =====================*/
document.addEventListener("DOMContentLoaded", () => {
  checkLastVisit();
});

