'use strict'

const store = (value) => {
    return () => value;
}

const stored1 = store(100);
console.log(stored1());

const stored2 = store('string');
console.log(stored2());