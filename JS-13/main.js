const getRandomChinese = function(length) {
    return new Promise((resolve, reject) => {
        let sign;
        let arr = [];
        let i = 0;
        const interval = setInterval(() => {
            sign = String(Date.now()).slice(-5);
            arr.push(String.fromCharCode(sign));
            if (i === length - 1) {
                clearInterval(interval);
            }
            i++;
        }, 50);
        setTimeout(() => {
            resolve(arr);
        }, length * 50)
    })
}
console.log('Start time: ' + new Date().getMilliseconds() + 'ms');
getRandomChinese(4).then((data) => {
    return data.join('');
}).then((data) => {
    console.log(data);
    console.log('Finish time: ' + new Date().getMilliseconds() + 'ms');
})