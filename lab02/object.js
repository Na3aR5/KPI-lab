'use strict'

const fn = () => {
    const obj1 = { name: 'Nazar' };
    let   obj2 = { name: 'Nazar' };

    obj1.name = 'OtherName'; // ok
    obj2.name = 'OtherName'; // ok

    // Error
    // 'obj1' cannot reference other object, because declared as 'const'
    obj1 = { name: 'OtherName2' };
}

fn();