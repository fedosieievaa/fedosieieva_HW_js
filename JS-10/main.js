const generateBlocks = () => {
    for (const box of document.getElementById('boxes').children) {
        box.style.backgroundColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }
}
generateBlocks()

const generateBlocksInterval = () => {
    setInterval(() => generateBlocks(), 1000);
}
generateBlocksInterval()