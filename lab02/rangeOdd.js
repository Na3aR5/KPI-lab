'use strict'

const rangeOdd = () => {
    let arr = [];
    for (let i = 15; i <= 30; i += 2) {
        arr.push(i);
    }
    return arr;
}

const arr = rangeOdd();
console.log(arr);