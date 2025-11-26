'use strict'

const iterate = (obj, callback) => {
    for (const key in obj) {
        callback(key, obj[key]);
    }
}

const obj1 = {
    x: 10,
    y: 20,
    z: 30
};

iterate(obj1, (key, value) => console.log({key, value}));