const cards = document.querySelector('#cards');

// Brings the data and turn it into JSON file.
async function getCompaniesData() {
    const members = await fetch('./data/members.json');
    const data = await members.json(); //turn data into JSON
    displayCompanies(data.companies);
}
getCompaniesData();

// Create elements and shows it in the landing page ======================
const displayCompanies = (companies) => {
    companies.forEach((company) => {

        let card = document.createElement('section')
        let name = document.createElement('h1');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let websiteUrl = document.createElement('a');
        let memberLevel = document.createElement('p');
        let img = document.createElement('img');
        let otherInfo = document.createElement('p');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phoneNumber}`;
        websiteUrl.textContent = `${company.websiteUrl}`;
        memberLevel.textContent = `Member level: ${company.memberLevel}`;
        otherInfo.textContent = `${company.otherInfo}`;

        img.setAttribute('src', company.img);
        img.setAttribute('alt', `${company.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');
        websiteUrl.setAttribute('href', company.websiteUrl)


        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);
        card.appendChild(memberLevel);
        card.appendChild(otherInfo);
        cards.appendChild(card);

    });
}

//Grid and List Buttons ================================
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");

    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
}
// ============================= Footer Content 

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