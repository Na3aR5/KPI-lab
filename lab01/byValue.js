'use strict';

const increment = (x) => {
    return ++x;
};

let a = 10;
let b = increment(a);

console.dir(a, b); // a: 10, b: 11