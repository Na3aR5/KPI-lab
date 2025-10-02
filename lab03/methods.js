'use strict'

const methods = (iface) => {
    let result = [];

    for (const name in iface) {
        const func = iface[name];
        if (typeof func === 'function') {
            result.push([func.name, func.length]);
        }
    }

    return result;
}

console.log(methods([Math.sin, Math.cos, Math.min]));