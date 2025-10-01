'use strict'

const phonebook = [
    { name: 'Nazar', phone: '+380123456789' },
    { name: 'OtherName', phone: '+380987654321' }
]

const findPhoneByName = (name) => {
    for (const object of phonebook) {
        if (object.name == name) {
            return object.phone;
        }
    }
    return null;
}

console.log(findPhoneByName('Nazar'));