console.clear();

/*
IF - salygos sakinys / palyginimas

Operatoriai: <, >, ==, !=, >=, <=, ===, !==
Naudotini: <, >, >=, <=, ===, !==
Nenaudotini: ==, !=

Loginiai operatoriai: && (and), || (or), ! negate ()

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

const a = 55;
const b = 55;

if (a >= b) {
    console.log('A daugiau arba lygu B');
} else {
    console.log('A maziau uz B');
}

console.log('PABAIGA...');

const day = 3.7;
let dayName = '';

if (day === 1) {
    dayName = 'pirmadienis';
} else if (day === 2) {
    dayName = 'antradienis';
} else if (day === 3) {
    dayName = 'treciadienis';
} else if (day === 4) {
    dayName = 'ketvirtadienis';
} else if (day === 5) {
    dayName = 'penktadienis';
} else if (day === 6) {
    dayName = 'sestadienis';
} else if (day === 7) {
    dayName = 'sekmadienis';
} else {
    dayName = 'tokia diena neegzistuoja';
}

console.log('Siandien yra:', dayName);

const pirmas = 7;
const antras = "7";

if (pirmas !== antras) {
    console.log('TAIP');
} else {
    console.log('NE');
}

// NESTINIMAS - code nesting


const siltaNuoTemp = 22;
const temp = 32;
const arLyja = true;
let ats = '';

if (temp >= siltaNuoTemp) {
    if (arLyja === true) {
        ats = 'Einam nuogi :-) ';
    } else {
        ats = 'Galima eiti su maike';
    }    
} else {
    if (arLyja === true) {
        ats = 'Niekur neinam - sedime namuose';
    } else {
        ats = 'Pasiimk striuke';
    }
}

console.log(ats);

let ats2 = '';

if (temp >= siltaNuoTemp && arLyja === true) {
    ats2 = 'Einam nuogi :-) ';
} else if (temp >= siltaNuoTemp && arLyja === false) {
    ats2 = 'Galima eiti su maike';
} else if (temp < siltaNuoTemp && arLyja === true) {
    ats2 = 'Niekur neinam - sedime namuose';
} else if (temp < siltaNuoTemp && arLyja === false) {
    ats2 = 'Pasiimk striuke';
}

console.log(ats2);
