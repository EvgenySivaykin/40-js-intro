/*Kintamųjų inicijavimas
1.	Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
2.	Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Veiksmai su kintamaisiais
1.	Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

// 1.	Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

let a = 32;
console.log(a);

const b = 48;
console.log(b);

const c = -37;
console.log(c);

// 2.	Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const d = 'Labas';
console.log(d);

const e = 'rytas';
console.log(e);

const f = 'Lietuva';
console.log(f);

// 3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const g = [1, 5, 7, 9, 15];
console.log(g);

const k = [-3, 5.5, -7, 9.5, 131];
console.log(k);

const m = [55, -48, 777, 3.14, 1587];
console.log(m);


// const x = `[${g}, ${k}, ${m}]`;
// console.log(x);

// 4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const tekstas1 = [
    'Man', 
    'patinka', 
    'valgyti',
    'saldainius', 
    'vakarais',];
console.log(tekstas1);

const tekstas2 = [
    'As', 
    'ne', 
    'noriu', 
    'eiti', 
    'lauk',];
console.log(tekstas2);

const tekstas3 = [
    'Prasau', 
    'duokite', 
    'man', 
    'tris', 
    'patarimus',];
console.log(tekstas3);

// 1.	Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

const sumString3 = `${c} + ${a} + ${b} = ${c + a + b}`;
console.log(sumString3);

// 2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

const Sveikinimas = d + ' ' + e + ' ' + f;
console.log(Sveikinimas);

// 3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console

const a1 = g[0];
const a2 = g[1];
const a3 = g[2];
const a4 = g[3];
const a5 = g[4];

const result1 = `${a1} - ${a2} + ${a3} - ${a4} + ${a5} = ${a1 - a2 + a3 - a4 + a5}`
console.log(result1);

const b1 = k[0];
const b2 = k[1];
const b3 = k[2];
const b4 = k[3];
const b5 = k[4];

const result2 = `${b1} - ${b2} + ${b3} - ${b4} + ${b5} = ${b1 - b2 + b3 - b4 + b5}`
console.log(result2);

const c1 = m[0];
const c2 = m[1];
const c3 = m[2];
const c4 = m[3];
const c5 = m[4];

const result3 = `${c1} - ${c2} + ${c3} - ${c4} + ${c5} = ${c1 - c2 + c3 - c4 + c5}`
console.log(result3);


// 4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const y = `[${tekstas1}, ${tekstas2}, ${tekstas3}]`;
console.log(y);


