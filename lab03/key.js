'use strict'

const generateKey = (length, possible) => {
    let key = '';

    for (let i = 0; i < length; ++i) {
        let possibleIndex = Math.floor(possible.length * Math.random());
        key += possible[possibleIndex];
    }

    return key;
}

console.log(generateKey(10, 'abcdefgh'));