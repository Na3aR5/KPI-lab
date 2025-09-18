'use strict';

const increment = (obj) => {
    ++obj.n;
};

const obj = { n: 10 };
increment(obj);

console.log(obj.n);