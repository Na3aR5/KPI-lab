'use strict'

const phonebook = {
    Nazar: '+380123456789',
    OtherName: '+380987654321'
}

const findPhoneByName = (name) => {
    return phonebook[name];
}

console.log(findPhoneByName('Nazar'));