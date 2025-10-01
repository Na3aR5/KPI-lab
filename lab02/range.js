'use strict'

const range = () => {
    let arr = [];
    for (let i = 15; i <= 30; ++i) {
        arr.push(i);
    }
    return arr;
}

const arr = range();
console.log(arr);