/*
OBJECT - objektas
key-value poros
*/

const person = {
    isMarried: true,
    age: 99,
    name: 'Petras',
    'children-count': 5,
    _: 'underscore',
};

// Standartinis sintakse/budas istraukti info is objekto
const name = person['name'];
const age = person['age'];
const isMarried = person['isMarried'];
const kids = person['children-count'];

console.log(name, age, isMarried);
console.log(kids);
console.log(person['_']);

// Supaprastintas budas

const maryte = {
    age: 87,
    isMarried: false,
    name: 'Maryte',
}

const marytesName = maryte['name'];
const marytesName2 = maryte.name;
const marytesAge = maryte.age;
const marytesStatus = maryte.isMarried;

console.log(marytesName);
console.log(marytesName2);
console.log(marytesAge);
console.log(marytesStatus);

const mokykla = {
    1: [
        {
            name: 'Petras',
            tevai: {
                tete: [112],
                mama: [911],
            }
        },
        {
            name: 'Maryte',
            tevai: {
                tete: [123456],
                mama: [654231],
            }
        },
    ],
    2: [
        {
            name: 'Jonas',
            tevai: {
                tete: [65984659],
                mama: [],
            }
        },
        {
            name: 'Ona',
            tevai: {
                tete: [],
                mama: [1111111, 22222222, 3333333],
            }
        },
    ],
}
console.clear();

const klase = 2;
const mokinioIndex = 1;
const kurisTevas = 'mama';

const klasesInfo = mokykla[klase];
const kazkas = klasesInfo[mokinioIndex].tevai[kurisTevas][0];
console.log(kazkas);