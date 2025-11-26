'use strict'

function seq(...args) {
    const chain = (arg) => {
        if (typeof arg === 'number') {
            return args.reduceRight((acc, transform) => transform(acc), arg);
        }
        return seq(...args, arg);
    }
    return chain;
}