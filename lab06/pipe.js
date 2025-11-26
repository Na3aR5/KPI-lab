'use strict'

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('Expected function');
        }
    }

    return x => fns.reduce((acc, fn) => fn(acc), x);
}

const f1 = x => ++x;
const f2 = x => x*x;
const f3 = x => x*x*x;

console.log(pipe(f1, f2, f3)(5)); // 46656