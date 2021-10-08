// 1
const getRandomArray = (length, min, max) => {
    const randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.floor(min + Math.random() * (max + 1 - min)));
    }
    return randomNumbers;
}
const randomNumbers = getRandomArray(10, -10, 10);

// 2
const getModa = (...numbers) => {
    const sorted = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
    const sortedModa = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
            if (sortedModa.some(([num, quant]) => num === sorted[i])) {
                sortedModa[sortedModa.findIndex(([num, quant]) => num === sorted[i])][1] += 1;
                continue;
            }
            sortedModa.push([sorted[i], 2]);
        }
    }
    const maxQuant = Math.max(...(sortedModa.map(([num, quant]) => quant)));
    if (!sortedModa.length) {
        return numbers;
    }
    return sortedModa.filter(([num, quant]) => {
        if (quant === maxQuant) {
            return num;
        }
    }).map(([num, quant]) => num);
}

// 3
const getAverage = (...numbers) => {
    const result = numbers.filter((number) => Number.isInteger(number));
    return (result.reduce((a, b) => a + b) / result.length).toFixed(1);
}

// 4
const getMedian = (...numbers) => {
    const result = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
    if (result.length % 2) {
        return result[Math.floor(result.length / 2)];
    }
    return (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
}

// 5
const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);

// 6
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;

// 7
const getDividedByFive = (...numbers) => numbers.filter(number => !(number % 5));

// 8
const replaceBadWords = (string) => {
    return string.split(' ').map((string) => string.replaceAll('fuck', '****').replaceAll('shit', '****')).join(' ');;
}

// 9
const divideByThree = (word) => {
    let string = word.toLowerCase().replaceAll(' ', '');
    const divided = [];
    while (true) {
        if (string.length <= 3) {
            divided.push(string);
            break;
        }
        divided.push(string.substring(0, 3));
        string = string.substring(3);
    }
    return divided;
}

// 10
// const generateCombinations = (word) => {

// }


document.writeln(`1. Масив випадкових цілих чисел: ${randomNumbers} <br>
2. Мода: ${getModa(...randomNumbers)} <br>
3. Середнє арифметичне: ${getAverage(...randomNumbers)} <br>
4. Медіана: ${getMedian(...randomNumbers)} <br>
5. Фільтрує парні числа: ${filterEvenNumbers(...randomNumbers)} <br>
6. Рахує кількість чисел більших за 0: ${countPositiveNumbers(...randomNumbers)} <br>
7. Діляться на ціло на 5: ${getDividedByFive(...randomNumbers)} <br>
8. Заміняє погані слова на зірочки: ${replaceBadWords('Are you fucking kidding?')} <br>
9. Розбиває кожне слово на умовні склади по 3 букви: ${divideByThree('Commander')} <br>
`)