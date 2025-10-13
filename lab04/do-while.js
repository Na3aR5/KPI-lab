'use strict'

const sum = (...args) => {
    let i = 0;
    let accumulate = 0;
    do {
        accumulate += args[i++];
    } while (i < args.length);
    return accumulate;
}

console.log(sum(1,2,3));