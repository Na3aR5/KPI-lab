'use strict'

const countTypes = (arr) => {
    const typeCounts = {};

    for (const elem of arr) {
        const type = typeof elem;
        typeCounts[type] = typeCounts[type] + 1 || 1;
    }

    return typeCounts;
};

const array = [ 1, "abc", false, NaN, 2, undefined, 1n ];

const typeCounts = countTypes(array);
console.dir(typeCounts);