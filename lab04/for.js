'use strict'

const sum = (...args) => {
    let accumulate = 0;
    for (let i = 0; i < args.length; ++i) {
        accumulate += args[i];
    }
    return accumulate;
}

console.log(sum(1,2,3));