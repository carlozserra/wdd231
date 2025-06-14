// ==================================================
// WEATHER + FORECAST MODULE
// ==================================================

// -------------------------------
// Constants and Selectors
// -------------------------------
const myLat = '-14.79';
const myLong = '-39.03';
const apiKey = '6711bf6d3d7e1544813fe0bc8b10d202';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${apiKey}`;

// DOM Elements for current weather
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#current-desc');
const weatherIcon = document.querySelector('#weather-icon');
const highT = document.querySelector('#current-highT');
const lowT = document.querySelector('#current-lowT');
const currentHum = document.querySelector('#current-humidity');
const currentSunrise = document.querySelector('#current-sunrise');
const currentSunset = document.querySelector('#current-sunset');

// DOM Element for forecast
const forecastContainer = document.querySelector('#forecast');

// -------------------------------
// API Fetch Functions
// -------------------------------
export async function apiFetch() {
    try {
        const response = await fetch(currentWeatherURL);
        if (!response.ok) throw Error(await response.text());
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error("Current weather error:", error);
    }
}

export async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw Error(await response.text());
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Forecast error:", error);
        forecastContainer.innerHTML = "Unable to load forecast.";
    }
}

// -------------------------------
// Display Functions
// -------------------------------
function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp}&deg;C</strong>`;
    currentHum.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;
    highT.innerHTML = `<strong>High:</strong> ${data.main.temp_max}&deg;C`;
    lowT.innerHTML = `<strong>Low:</strong> ${data.main.temp_min}&deg;C`;
    currentSunrise.innerHTML = `<strong>Sunrise:</strong> ${formatTime(data.sys.sunrise)}`;
    currentSunset.innerHTML = `<strong>Sunset:</strong> ${formatTime(data.sys.sunset)}`;

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const item = data.list[i * 8];
        const date = new Date(item.dt * 1000);
        const day = i === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(item.main.temp);

        const p = document.createElement('p');
        p.innerHTML = `${day}: <strong>${temp}&deg;F</strong>`;
        forecastContainer.appendChild(p);
    }
}

function formatTime(unixTime) {
    return new Date(unixTime * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

// ==================================================
// SPOTLIGHT COMPANIES MODULE
// ==================================================

// -------------------------------
// DOM Selector
// -------------------------------
const spotContainer = document.querySelector('#spotlight-container');

// -------------------------------
// Fetch and Filter Company Data
// -------------------------------
export async function getCompanies() {
    try {
        const response = await fetch('./data/members.json');
        const data = await response.json();

        // Filter only gold or silver members
        const filtered = data.companies.filter(company =>
            company.memberLevel === "gold" || company.memberLevel === "silver"
        );

        // Shuffle and select 3 random companies
        const selected = filtered.sort(() => Math.random() - 0.5).slice(0, 3);

        displayCompanies(selected);
    } catch (error) {
        console.error("Error loading companies:", error);
        spotContainer.innerHTML = "Unable to load spotlights.";
    }
}

// -------------------------------
// Render Company Cards
// -------------------------------
function displayCompanies(companies) {
    companies.forEach(company => {
        const card = document.createElement('section');
        const header = document.createElement('div');
        const body = document.createElement('div');
        const info = document.createElement('div');

        // Header with name and tagline
        const businessName = document.createElement('h2');
        businessName.textContent = company.name;

        const tag = document.createElement('h3');
        tag.textContent = company.otherInfo;

        header.appendChild(businessName);
        header.appendChild(tag);
        header.classList.add('spotlight-header');

        // Image
        const image = document.createElement('img');
        image.setAttribute('src', company.img);
        image.setAttribute('alt', `${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');

        // Info block with phone, link, and membership
        const phone = document.createElement('p');
        phone.textContent = company.phoneNumber;

        const url = document.createElement('a');
        url.setAttribute('href', company.websiteUrl);
        url.setAttribute('target', '_blank');
        url.textContent = "Visit Website";

        const memberLevel = document.createElement('p');
        memberLevel.textContent = company.memberLevel;

        info.classList.add('spotlight-info');
        info.appendChild(phone);
        info.appendChild(url);
        info.appendChild(memberLevel);

        body.classList.add('spotlight-body');
        body.appendChild(image);
        body.appendChild(info);

        card.classList.add('spotlight');
        card.appendChild(header);
        card.appendChild(body);

        spotContainer.appendChild(card);
    });
}
