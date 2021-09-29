// Функція №1
const getMaxDigit = function(number) {
    if (number === 0) {
        return 0;
    } else {
        return Math.floor(Math.max(number % 10, getMaxDigit(number / 10)));
    }
}

// Функція №2:
const pow = function(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result = result * number;
    }
    return result;
}

// Функція №3:
const getName = (name) => name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

// Функція №4:
const pureIncome = (salary) => salary - (salary * 0.195);

// Функція №5:
const getRandomNumber = function(n, m) {
    let randomNumber = n + Math.random() * (m + 1 - n);
    return Math.floor(randomNumber);
}

// Функція №6:
const countLetter = function(word, letter) {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

// Функція №7:
const convertCurrency = function(currency) {
    if (currency.includes('$')) {
        return (parseInt(currency) * 25).toFixed(2) + 'UAH';
    }
    if (currency.toUpperCase().includes('UAH')) {
        return (parseInt(currency) / 25).toFixed(2) + '$';
    }
    alert('ERROR: please, reload and choose "$" or "UAH"')
    return 0;

}

// Функція №8:
const getRandomPassword = function(number = 8) {
    let result = '';
    for (let i = 0; i < number; i++) {
        result += Math.round(Math.random() * 9);
    }
    return result;
}

// Функція №9:
const deleteLetters = function(letter, word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            continue;
        }
        result += word[i];
    }
    return result;
}

// Функція №10:
const isPalyndrom = function(string) {
    string = string.toLowerCase().replaceAll(' ', '');
    let stringReverse = string.split('').reverse().join('');
    if (string === stringReverse) {
        return true;
    } else {
        return false;
    }
}

// Функція №11:
const deleteDuplicateLetter = function(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string.toLowerCase().replaceAll(string[i], '').length === string.length - 1) {
            result += string[i];
        }
    }
    return result;
}

document.writeln(`Функція №1: ${getMaxDigit(6194)} <br>
Функція №2: ${pow(2, 8)} <br>
Функція №3: ${getName('aNasTASiA')} <br>
Функція №4: ${pureIncome(1000)} <br>
Функція №5: ${getRandomNumber(1, 10)} <br>
Функція №6: ${countLetter('Асталавіста', 'а' )} <br>
Функція №7: ${convertCurrency('200uAh')} <br>
Функція №8: ${getRandomPassword()} <br>
Функція №9: ${deleteLetters('a', 'blablabla')} <br>
Функція №10: ${isPalyndrom('Я несу гусеня')} <br>
Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')} `)