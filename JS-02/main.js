let N = parseInt(prompt('Enter the number N:'));

let M = parseInt(prompt('Enter the number M:'));

let skipEvenNumber = confirm('Should I skip even numbers?');

let result = 0;

for (let i = N; i <= M; i++) {
    if (skipEvenNumber && !(i % 2)) {
        continue;
    }
    result += i;
}

alert(`Result: ${result}`);