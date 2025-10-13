'use strict'

const sum = (...args) => {
    let accumulate = 0;
    for (const item of args) {
        accumulate += item;
    }
    return accumulate;
}

console.log(sum(1,2,3));