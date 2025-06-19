import { places } from '../data/places.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const showHere = document.querySelector("#allplaces");

    function displayItens(places) {
        places.forEach(x => {
            let theCard = document.createElement('div');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let description = document.createElement('p');
            let image = document.createElement('img');
            let buttonLearnMore = document.createElement('button');

            buttonLearnMore.textContent = "Learn More";
            buttonLearnMore.className = "btn-learnM";

            name.textContent = `${x.name}`;
            address.textContent = `${x.address}`;
            description.textContent = `${x.description}`;

            image.setAttribute('alt', `${x.name}`);
            image.setAttribute('src', `images/${x.image}`);
            image.setAttribute('width', `300`);
            image.setAttribute('height', `200`);

            theCard.appendChild(image);
            theCard.appendChild(name);
            theCard.appendChild(address);
            theCard.appendChild(description);
            theCard.appendChild(buttonLearnMore);
            showHere.appendChild(theCard);

        });

        console.log(places);
    }

    displayItens(places);   
});

// Função exportada para verificar e mostrar mensagem de última visita
export function checkLastVisit() {
  const sidebar = document.querySelector("#sidebar");
  if (!sidebar) return; // Evita erro se #sidebar não existir

  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysBetween === 0) {
      message = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysBetween} days ago.`;
    }
  }

  sidebar.textContent = message;

  // Atualiza a data atual no localStorage
  localStorage.setItem("lastVisit", now);
}



