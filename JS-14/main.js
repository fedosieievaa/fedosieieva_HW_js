const baseUrl = 'https://swapi.dev/api';

const listOfPeople = document.getElementById('list-of-people');
const getPeopleBtn = document.getElementById('get-people');
let input = document.getElementById('input');

const getPeople = () => {
    listOfPeople.innerHTML = 'loading...';
    axios
        .get(`${baseUrl}/films/${input}`)
        .then((response) => {
            const listElems = response.data.characters;
            listElems.map((person) => {
                getName(person);
            });
        })

    .catch((err) => {
        console.log("Error:", err);
    });
}
getPeople;

const getName = (link) => {
    axios
        .get(link)
        .then((response) => {
            const name = response.data.name;
            const birthYear = response.data.birth_year;
            const gender = response.data.gender;
            const allInfo = `
            <div class="yellow">
                <h1>${name}</h1>
                <p>Birth Year: ${birthYear}</p>
                <p>Gender: ${gender}</p>
            </div> `;
            console.log(allInfo)
            listOfPeople.innerHTML = allInfo;
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

getPeopleBtn.addEventListener('click', getPeople);

















// ToDo: LATER
const listOfPlanets = document.getElementById('list-of-planets');
const getPlanetsBtn = document.getElementById('get-planets');
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next');
const page = document.getElementById('page');
let currentPage = 1;

const getPlanets = () => {
    listOfPlanets.innerHTML = 'loading...';
    page.innerHTML = currentPage;
    axios
        .get(`${baseUrl}/planets/?page=${currentPage}`)
        .then((response) => {
            const listElems = response.data.results.map((item) => `
            <li class="planet">${item.name}</li>
            `)
            listOfPlanets.innerHTML = listElems.join('');
        })

    .catch((err) => {
        console.log("Error:", err);
    });
}
getPlanets;
getPlanetsBtn.addEventListener('click', getPlanets);

prevBtn.addEventListener('click', () => {
    if (currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
});

nextBtn.addEventListener("click", () => {
    if (currentPage === 6) return;
    currentPage += 1;
    getPlanets();
});