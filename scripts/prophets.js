
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        //HTML
        let card = document.createElement('section');
        let fullName = document.createElement('h1');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

        // Build the image portrait
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response = await fetch("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json");
    const data = await response.json(); //turn data into JSON
    //console.table(data.prophets);
    displayProphets(data.prophets);

}

getProphetData();

