// index

console.clear();
const numbers = [
    10,
    2,
    [1, 2, [5, -2], 2],
    [1, 1, 2],
    6,
];

function sumCount(list) {
    let ats = 0;
    for (const item of list) {
        if (typeof item === 'number') {
            ats += item;
        } else {
            ats += sumCount(item);
        }
    }
    return ats;
}

const sum = sumCount(numbers);

console.log('Suma: ', sum);



// family

console.clear();

const family = {
    name: 'Petras',
    age: 55,
    children: [
        {
            name: 'Maryte',
            age: 66,
            children: [
                {
                    name: 'Ona',
                    age: 77,
                    children: [
                        {
                            name: 'Petras',
                            age: 78
                        }, {
                            name: 'Petras',
                            age: 79
                        }, {
                            name: 'Petras',
                            age: 80
                        }
                    ],
                }
            ],
        }, {
            name: 'Jonas',
            age: 44,
            children: [
                {
                    name: 'Al',
                    age: 88,
                    children: [
                        {
                            name: 'Moliugelis',
                            age: 37,
                        }, {
                            name: 'Hipsteris',
                            age: 38
                        }
                    ],
                }
            ],
        }
    ],
};

function oldest(person) {
    let age = person.age;

    if (person.children
        && Array.isArray(person.children)
        && person.children.length > 0) {
        for (const child of person.children) {
            const childAge = oldest(child);
            if (childAge > age) {
                age = childAge;
            }
        }
    }

    return age;
}

console.log('Vyriausias:', oldest(family));

// fib

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....

// b, a, ats
function fib(n) {
    if (n < 3) return n;
    let a = 2;
    let b = 1;
    let ats = 0;

    for (let i = 0; i < n - 2; i++) {
        ats = a + b;
        b = a;
        a = ats;
    }

    return ats;
}

for (let i = 0; i < 20; i++) {
    console.log(fib(i));
}


// PC

const discSize = 1_000_000;
const pc = {
    type: 'folder',
    name: 'C',
    content: [
        {
            type: 'folder',
            name: 'Programs',
            content: [
                {
                    type: 'folder',
                    name: 'Nodejs',
                    content: [
                        {
                            type: 'folder',
                            name: 'bin',
                            content: [
                                {
                                    type: 'file',
                                    name: 'node.exe',
                                    size: 1000,
                                    unit: 'b'
                                }
                            ]
                        },
                        {
                            type: 'file',
                            name: 'demo.exe',
                            size: 500,
                            unit: 'b'
                        }
                    ]
                },
                {
                    type: 'folder',
                    name: 'Paint.net',
                    content: [
                        {
                            type: 'file',
                            name: 'paintnet.exe',
                            size: 18000,
                            unit: 'b'
                        },
                        {
                            type: 'file',
                            name: 'colors.exe',
                            size: 5700,
                            unit: 'b'
                        }
                    ]
                }
            ]
        },
        {
            type: 'folder',
            name: 'Program Files 86',
            content: [
                {
                    type: 'folder',
                    name: 'Nodejs',
                    content: [
                        {
                            type: 'folder',
                            name: 'bin',
                            content: [
                                {
                                    type: 'file',
                                    name: 'node.exe',
                                    size: 1000,
                                    unit: 'b'
                                }
                            ]
                        },
                        {
                            type: 'file',
                            name: 'demo.exe',
                            size: 500,
                            unit: 'b'
                        }
                    ]
                },
                {
                    type: 'folder',
                    name: 'Paint.net',
                    content: [
                        {
                            type: 'file',
                            name: 'paintnet.exe',
                            size: 18000,
                            unit: 'b'
                        },
                        {
                            type: 'file',
                            name: 'colors.exe',
                            size: 5700,
                            unit: 'b'
                        }
                    ]
                }
            ]
        },
        {
            type: 'file',
            name: 'hello.txt',
            size: 20,
            unit: 'b'
        },
        {
            type: 'file',
            name: 'bye.txt',
            size: 666,
            unit: 'b'
        }
    ]
}

function search(term) {

}

function usedSpace() {

}

function freeSpace() {

}



// two-biggest

const numbers = [0, 10, 2, 8, 4, 6];

let big1 = 0;
let big2 = 0;

for (const n of numbers) {
    if (n > big1) {
        big1 = n;
    } else if (n > big2) {
        big2 = n;
    }
}

console.log(big1, big2);



