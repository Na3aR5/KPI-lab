'use strict'

const ipToInt = (ip) => {
    const func = (result, item) => (result << 8) + parseInt(item);
    return ip.split('.').reduce(func, 0);
}

console.log(ipToInt('127.0.0.1'));