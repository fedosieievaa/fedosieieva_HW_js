let N = checkNumber('N');
let M = checkNumber('M');
let skipEvenNumber = confirm('Should I skip even numbers?');
let result = 0;
for (let i = N; i <= M; i++) {
    if (skipEvenNumber && !(i % 2)) {
        continue;
    }
    result += i;
}
alert(`Result: ${result}`);

function checkNumber(name) {
    let num = +prompt('Enter the number ' + name + ':');
    while (!Number.isInteger(num)) {
        num = +prompt('Enter the NUMBER ' + name + ': (ex.: 1, 2, 7, 15)');
    }
    return num;
}