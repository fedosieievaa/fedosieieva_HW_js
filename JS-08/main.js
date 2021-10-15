const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1
const getMyTaxes = function(salary) {
    return +(this.tax * salary).toFixed(2);
}
console.log('Скільки податків ви заплатите як IT-спеціаліст в якійсь з країн: ' + getMyTaxes.call(ukraine, 1000));

// 2
const getMiddleTaxes = function() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
console.log('Скільки у середньому податків платять IT-спеціалісти у певній країні: ' + getMiddleTaxes.call(ukraine));

// 3
const getTotalTaxes = function() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log('Скільки всього податків платять IT-спеціалісти у певній країні: ' + getTotalTaxes.call(ukraine));

// 4
const getMySalary = function() {
    const result = {};
    result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    result.taxes = +(result.salary * this.tax).toFixed(2);
    result.profit = +(result.salary - this.tax * result.salary).toFixed(2);
    return result;
}
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);