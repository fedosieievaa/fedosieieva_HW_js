const getRandomChinese = function(length) {
    return new Promise((resolve, reject) => {
        let sign;
        const arr = [];
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

getRandomChinese(4).then((data) => {
    return data.join('');
}).then((data) => {
    console.log(data);
})