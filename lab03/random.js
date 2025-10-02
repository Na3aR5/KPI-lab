'use strict'

const random = (min, max) => {
    const ratio = max / min;
    return Math.floor(min + ratio * Math.random());
}

const testArr = [];
for (let i = 0; i < 30; ++i) {
    testArr.push(random(1, 100));
}

console.log(testArr);