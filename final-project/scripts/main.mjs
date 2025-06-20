import { projects } from "../data/projects.mjs";


//hamburger =============
const hamburgerButton = document.querySelector('#menuBtn');
const navElement = document.querySelector('#animated');

hamburgerButton.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
});
//cards portfolio ===========================
document.addEventListener("DOMContentLoaded", async () => {

  const container = document.querySelector("#portifolio");

  if (!container) return;

  try {
    projects.forEach((item) => {
      let card = document.createElement('section');

      let title = document.createElement('h3');
      let description = document.createElement('p');
      let img = document.createElement('img');
      let toolsList = document.createElement('ul');

      title.textContent = item.title;
      description.textContent = item.description;

      img.setAttribute('src', item.image);
      img.setAttribute('alt', item.title);
      img.setAttribute('loading', 'lazy');
      img.setAttribute('width', '340');
      img.setAttribute('height', 'auto');

      item.tools.forEach(tool => {
        let li = document.createElement('li');
        li.textContent = tool;
        toolsList.appendChild(li);
      });

      card.appendChild(img);
      card.appendChild(toolsList);

      card.addEventListener('click', () => openModal(item));

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading projects:", err);
  }
});
// dialogs in portifolio =========================
function openModal(item) {
  const modal = document.createElement('dialog');

  let modalTitle = document.createElement('h2');
  let modalDescription = document.createElement('p');
  let closeButton = document.createElement('button');

  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => modal.close());

  modal.appendChild(modalTitle);
  modal.appendChild(modalDescription);
  modal.appendChild(closeButton);

  document.body.appendChild(modal);
  modal.showModal();
}

/*contact.html ==========*/
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem('userName');
  if (name) {
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
      userNameElement.textContent = name;
    }
  }
});

// last modification footer ============

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("currentYear");
  const modified = document.getElementById("lastModified");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (modified) {
    modified.textContent = document.lastModified;
  }
});

