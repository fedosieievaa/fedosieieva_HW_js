const generatorBtn = document.getElementById('generator-btn');
const listOfIds = document.getElementById('id-generator');

const createIdGenerator = function*() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const id = createIdGenerator();

generatorBtn.addEventListener('click', () => {
    listOfIds.innerHTML += `<li class="id-item">${id.next().value}</li>`
})

const up = document.getElementById('up');
const down = document.getElementById('down');
const textContainer = document.getElementById('fonts');

const newFontGenerator = function*(font) {
    let size = yield font;
    while (true) {
        if (size === 'up') {
            size = font += 2;
        }
        if (size === 'down') {
            size = font -= 2;
        }
        size = yield font;
    }
}

const fontGenerator = newFontGenerator(14);
fontGenerator.next();

up.addEventListener('click', () => {
    textContainer.style.fontSize = `${fontGenerator.next('up').value}px`
});
down.addEventListener('click', () => {
    textContainer.style.fontSize = `${fontGenerator.next('down').value}px`
});