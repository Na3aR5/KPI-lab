'use strict'

const square = (x) => x * x;
const cube   = (x) => x * x * x;

const average = (x, y) => (x + y) / 2;

const calculate = () => {
    let arr = [];
    for (let i = 0; i < 10; ++i) {
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}

const arr = calculate();
console.log(arr);