let N = checkNumber('N');
let M = checkNumber('M');
const skipEvenNumber = confirm('Should I skip even numbers?');
if (N > M) {
    let temporary = N;
    N = M;
    M = temporary;
}
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
    while (!Number.isInteger(num) || num === 0) {
        num = +prompt('Enter the NUMBER ' + name + ': (ex.: 1, 2, 7, 15)');
    }
    return num;
}