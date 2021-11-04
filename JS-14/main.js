const baseUrl = 'https://swapi.dev/api';
const listOfPeople = document.getElementById('list-of-people');
const getPeopleBtn = document.getElementById('get-people');
const input = document.getElementById('input');
const listOfPlanets = document.getElementById('list-of-planets');
const getPlanetsBtn = document.getElementById('get-planets');
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next');
const page = document.getElementById('page');
let currentPage = 1;

const getPeople = () => {
    if (input.value === '1' || input.value === '2' || input.value === '3' || input.value === '4' || input.value === '5' || input.value === '6') {
        listOfPeople.innerHTML = 'loading...';
    } else {
        listOfPeople.innerHTML = 'Please, enter film from 1 to 6:)';
        return;
    }

    axios
        .get(`${baseUrl}/films/${input.value}`)
        .then((response) => {
            const listElems = response.data.characters;
            listElems.map((person) => {
                getInfo(person);
                listOfPeople.innerHTML = '';
            });
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

const getInfo = (link) => {
    axios
        .get(link)
        .then((response) => {
            const name = response.data.name;
            const birthYear = response.data.birth_year;
            let gender = response.data.gender;
            if (gender === 'male') {
                gender = `<img class="gender" src="./assets/img/male.svg" width="15px" alt="male">`
            }
            if (gender === 'female') {
                gender = `<img class="gender" src="./assets/img/female.svg"   width="15px"   alt="male">`
            }
            if (gender === 'hermaphrodite') {
                gender = `<img class="gender" src="./assets/img/hermaphrodite.svg" width="15px" alt="male">`
            }
            const allInfo = `
            <div class="yellow">
                <h1>${name}</h1>
                <p>Birth Year: ${birthYear}</p>
                <p>Gender: ${gender}</p>
            </div> `;
            console.log(allInfo)
            listOfPeople.innerHTML += allInfo;
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

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

getPeople;
getPlanets;

getPeopleBtn.addEventListener('click', getPeople);
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