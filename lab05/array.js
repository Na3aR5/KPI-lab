'use strict'

function array() {
    const arr = [];

    const getElement = (index) => {
        return arr[index];
    }

    getElement.push = (value) => {
        arr.push(value);
    }

    getElement.pop = () => {
        return arr.pop();
    }

    return getElement;
}