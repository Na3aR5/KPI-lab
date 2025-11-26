'use strict'

function contract(func, ...types) {
    const parameterTypes = types.slice(0, -1);
    const outputType     = types[types.length - 1];
    
    return function(...params) {
        for (let i = 0; i < parameterTypes.length; ++i) {
            const requiredType = parameterTypes[i];
            const originType   = params[i].constructor;
            
            if (originType !== requiredType) {
                throw new TypeError(
                    `Parameter ${i} must be of type ${requiredType.name}, but got ${receivedType.name}`
                );
            }
        }
            
        const result = func(...params);
            
        if (result.constructor !== outputType) {
            throw new TypeError(
                `Return value must be of type ${returnType.name}, but got ${result.constructor.name}`
            );
        }   
        return result;
    };
}

const addOrigin = (a, b) => a + b;
const add = contract(addOrigin, Number, Number, Number);
try {
    const res = add(2, 3);
    console.log('add(2, 3) =', res);
    console.log('Expected: 5\n');
} catch (error) {
    console.log('Error:', error.message);
}