'use strict'

const sum = (...args) => {
    let i = 0;
    let accumulate = 0;
    while (i < args.length) {
        accumulate += args[i++];
    }
    return accumulate;
}

console.log(sum(1,2,3));