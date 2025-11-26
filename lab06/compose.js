'use strict'

const compose = (...fns) => {
    const composed = (x) => {
        let result = x;

        for (let i = 0; i < fns.length; ++i) {
            result = fns[i](result);
        }

        return result;
    }

    return composed;
}

const f1 = x => ++x;
const f2 = x => x*x;
const f3 = x => x*x*x;

console.log(compose(f1, f2, f3)(5)); // 46656