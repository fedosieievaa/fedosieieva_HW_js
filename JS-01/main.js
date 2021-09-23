const breadPrice = 15.678;
const meatPrice = 123.965;
const milkPrice = 90.2345;

const maxPrice = Math.max(breadPrice, meatPrice, milkPrice);
const minPrice = Math.min(breadPrice, meatPrice, milkPrice);

const sumPrice = breadPrice + meatPrice + milkPrice;

const sumFloor = Math.floor(breadPrice) + Math.floor(meatPrice) + Math.floor(milkPrice);
const roundHundred = Math.round(sumFloor / 100) * 100;

const oddOrEvenSum = !(sumFloor % 2);

const change = 500 - sumPrice;

const everage = (sumPrice / 3).toFixed(2);

const randomSale = Math.round(Math.random() * 100);
const sumToPay = ((100 - randomSale) * sumPrice / 100).toFixed(2);

const selfPrice = (sumPrice / 2).toFixed(2);
const income = (selfPrice - (randomSale * sumPrice / 100)).toFixed(2);

document.writeln(`Max price: ${maxPrice} <br>
Min price: ${minPrice} <br>
Total sum: ${sumPrice} <br>
Rounded sum: ${sumFloor} <br>
Rounded to hundreds: ${roundHundred} <br>
Is this sum even? - ${oddOrEvenSum} <br>
Change: ${change} <br>
Everage price: ${everage} <br>
Random sale: ${randomSale} <br>
Sum to pay: ${sumToPay} <br>
Self price: ${selfPrice} <br>
Income: ${income}`);