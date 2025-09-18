'use strict';

const hoisting = () => {
    console.log(x); // undefined
    var x = 100;
    console.log(x); // 100
};

hoisting();
