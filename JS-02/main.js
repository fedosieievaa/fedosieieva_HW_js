let N = parseInt(prompt('Enter the number N:'));

let M = parseInt(prompt('Enter the number M:'));

let skipEvenNumber = confirm('Should I skip even numbers?');

let result = 0;

for (let i = N; i <= M; i++) {
    if (skipEvenNumber === false) {
        result += i;
    } else {
        if (i % 2) {
            result += i;
        }

    }
}

alert(`Result: ${result}`);