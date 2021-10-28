const container = document.getElementById('boxes');
const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div')
        container.append(div)
        div.style.backgroundColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }
}
generateBlocks()

const generateBlocksInterval = () => {
    setInterval(() => {
        container.innerHTML = ''
        generateBlocks()
    }, 1000);
}
generateBlocksInterval()