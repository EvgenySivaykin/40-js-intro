// Grasshopper - Debug
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.
// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5 / 9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers.It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// My variant:

function weatherInfo(temp) {
    const c = (temp - 32) * (5 / 9);

    if (c > 0) {
        return `${c} is above freezing temperature`
    } else {
        return `${c} is freezing temperature`
    }
}

// ohters:

function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
        return (c + " is freezing temperature");
    else
        return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
}

const weatherInfo = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ' : ''}freezing temperature`;

function weatherInfo(temp) {
    const c = (temp - 32) * (5 / 9);
    return `${c} is ${c > 0 ? 'above ' : ''}freezing temperature`;
}



// Pillars
// There are pillars near the road.The distance between the pillars is the same and the width of the pillars is the same.Your function accepts three arguments:
// number of pillars(≥ 1);
// distance between pillars(10 - 30 meters);
// width of the pillar(10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters(without the width of the first and last pillar).

// My variant:

function pillars(numPill, dist, width) {
    if (numPill == 1) {
        return 0
    } else if (numPill == 2) {
        return dist * 100
    } else {
        const ats = ((numPill - 2) * width) + ((numPill - 1) * dist * 100);
        return ats
    }
}

// ohters:

function pillars(num_pill, dist, width) {
    // your code here
    return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}

function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}

const pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w;

// How old will I be in 2099 ?
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to.As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space.Mind that you need to account for both "year" and "years", depending on the result.
// Good Luck!


// My variant:

function calculateAge(a, b) {
    if (a == b) {
        return `You were born this very year!`
    } else if (b == a + 1) {
        return `You are 1 year old.`
    } else if (a == b + 1) {
        return `You will be born in 1 year.`
    } else if (b > a) {
        return `You are ${b - a} years old.`
    } else if (a > b) {
        return `You will be born in ${a - b} years.`
    }
}

// ohters:

function calculateAge(m, n) {
    if (m == n) return 'You were born this very year!';
    var year = Math.abs(m - n) == 1 ? 'year' : 'years';
    if (m < n) return "You are " + (n - m) + ' ' + year + ' old.';
    if (m > n) return "You will be born in " + (-n + m) + ' ' + year + '.';
}

const calculateAge = (a, b) =>
    a < b ? `You are ${b - a} year${b - a > 1 ? `s` : ``} old.` : a > b ? `You will be born in ${a - b} year${a - b > 1 ? `s` : ``}.` : `You were born this very year!`;


var calculateAge = (b, c) => {
    r = c - b;
    switch (true) {
        case (r > 1): return "You are " + r + " years old."; break;
        case (r === 1): return "You are 1 year old."; break;
        case (r === 0): return "You were born this very year!"; break;
        case (r === -1): return "You will be born in 1 year."; break;
        case (r < -1): return "You will be born in " + (-r) + " years."; break;
    }
}

// Invert values
// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers.Do not mutate the input array / list.

// My variant:

function invert(array) {
    const after = array.map(n => n * (-1));

    return after
}

// ohters:

const invert = array => array.map(num => -num);

function invert(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(-array[i]);
    }
    return newArr;
}

function invert(array) {
    return array.map(e => e * -1);
}

function invert(array) {
    return array.map(el => -el);
}

invert = a => a.map(n => 0 - n)

function invert(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= -1;
    }
    return array;
}

// If you can't sleep, just count sheep!!
// If you can't sleep, just count sheep!!
// Task:
// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative integers.

// My variant:

var countSheep = function (num) {
    if (num == 0) {
        return ""
    } else {
        let a = '';
        for (let i = 1; i <= num; i += 1) {
            a += `${i} sheep...`;
        }
        return a
    }
}

// ohters:

var countSheep = function (num) {
    let str = "";
    for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
    return str;
}

const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

var countSheep = function (num) {
    var ret = "";
    for (var i = 1; i <= num; i++) {
        ret += i + " sheep..."
    }

    return ret;
}

// How much water do I need ?
// My washing machine uses water amount of water to wash load(in JavaScript and Python) or max_load(in Ruby) amount of clothes.You are given a clothes amount of clothes to wash.For each single item of clothes above the load, the washing machine will use 10 % more water(multiplicative) to clean.
// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
// Write a function howMuchWater(JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
// My washing machine is an old model that can only handle double the amount of load(or max_load).If the amount of clothes is more than 2 times the standard amount of load(max_load), return 'Too much clothes'.The washing machine also cannot handle any amount of clothes less than load(max_load).If that is the case, return 'Not enough clothes'.
// The answer should be rounded to the nearest 2 decimal places.

// My variant:

function howMuchWater(water, load, clothes) {
    let clMax = clothes / load;

    if (clothes < load) {
        return 'Not enough clothes'
    } else if (clMax > 2) {
        return 'Too much clothes'
    } else {
        let p = clothes - load;
        let a = Math.pow(1.1, p) * water;
        let ats = +a.toFixed(2);

        return ats
    }
}

// ohters:

function howMuchWater(L, X, N) {
    if (N > 2 * X) return "Too much clothes";
    if (N < X) return "Not enough clothes";
    return +(L * 1.1 ** (N - X)).toFixed(2);
}

const howMuchWater = (water, load, clothes) =>
    clothes > 2 * load ? 'Too much clothes'
        : clothes < load ? 'Not enough clothes'
            : Math.round(water * Math.pow(1.1, clothes - load) * 100) / 100;

const howMuchWater = (water, load, clothes) =>
    clothes < load ? `Not enough clothes` : clothes > 2 * load ? `Too much clothes` : Math.round(water * 1.1 ** (clothes - load) * 1e2) / 1e2;

const howMuchWater = (w, l, c) => c > l * 2 ? 'Too much clothes' : l > c ? 'Not enough clothes' : +(w * 1.1 ** (c - l)).toFixed(2)


// For Twins: 2. Math operations
// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume.Write a function iceBrickVolume that will accept these parameters:
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length(always > 0);
// rimLength - length from bottle top to brick(always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
// All inputs are integers.Assume no irregularities to the cuboid brick.You may assume the bottle is shaped like a cylinder.The brick cannot fit inside the rim.The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

// My variant:

function iceBrickVolume(radius, bottleLength, rimLength) {
    const sq = 2 * Math.pow(radius, 2);
    const h = bottleLength - rimLength;
    const ats = sq * h;

    return ats
}

// ohters:

const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

iceBrickVolume = (r, h, d) => 2 * r * r * (h - d)


// Find the Slope
// Given an array of 4 integers
// [a, b, c, d] representing two points(a, b) and(c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope(division by 0), return undefined.Note that the "undefined" is case -sensitive.

// My variant:

function slope(points) {
    const a = points[0];
    const b = points[1];
    const c = points[2];
    const d = points[3];

    if (a == c) {
        return "undefined"
    } else {
        const ats = (d - b) / (c - a)

        return `${ats}`
    }
}

// ohters:

function slope([x1, y1, x2, y2]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
}

const slope = points => points[2] == points[0] ? "undefined" : (points[3] - points[1]) / (points[2] - points[0]) + "";

let slope = ([a, b, c, d]) => a == c ? "undefined" : "" + ((b - d) / (a - c));

const slope = ([x1, y1, x2, y2]) =>
    x2 - x1 ? `${(y2 - y1) / (x2 - x1)}` : `undefined`;

// Aspect Ratio Cropping - Part 1
// The aspect ratio of an image describes the proportional relationship between its width and its height.Most video shown on the internet uses a 16: 9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X(where 1.77 ~= 16 / 9).As an example, 1080p video with an aspect ratio of 16: 9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4: 3 would have an X resolution of 1440.
// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16: 9 aspect ratio that maintain equal height.Round your answers up to the nearest integer.

// My variant:

function aspectRatio(x, y) {
    let z = y * 16 / 9;
    let u = Math.ceil(z);

    return [u, y]
}

// ohters:

function aspectRatio(x, y) {
    return [Math.ceil(y * 16 / 9), y];
}

const aspectRatio = (x, y) => [Math.ceil(16 * y / 9), y];

const aspectRatio = (x, y) => [Math.ceil(y * 16 / 9), y]

function aspectRatio(x, y) {
    let result = [];

    x = Math.ceil(y * 1.77777777);

    result.push(x, y);
    return result;
}
// высота не меняется  (Y)
// ширина на 1.77 к 1 (X)

// Pythagorean Triple
// Given an array of 3 non - negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
// Return Values
// 1 if a, b and c form a pythagorean triple
// 0 if a, b and c do not form a pythagorean triple
// For Python: return True or False
// For JavaScript: return true or false

// My variant:

function isPythagoreanTriple(integers) {
    const list = integers.sort();

    const a = list[0];
    const b = list[1];
    const c = list[2];
    const s = Math.pow(a, 2);
    const d = Math.pow(b, 2);
    const f = Math.pow(c, 2);

    if (f === s + d) {
        return true
    } else if (s === f + d) {
        return true
    } else if (d === s + f) {
        return true
    } else {
        return false
    }
}

// ohters:

function isPythagoreanTriple(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
}

function isPythagoreanTriple(nums) {
    const [a, b, c] = nums.sort((a, b) => a - b)

    return a ** 2 + b ** 2 === c ** 2
}

function isPythagoreanTriple(integers) {
    let [a, b, c] = integers.sort((x, y) => x - y)
    return Math.abs(Math.hypot(a, b) - c) <= 1e-6
}

function isPythagoreanTriple([a, b, c], p = (a, b, c) => a * a + b * b == c * c) {
    return p(a, b, c) || p(a, c, b) || p(c, b, a);
}

// Is n divisible by x and y ?
// Create a function that checks if a number n is divisible by two numbers x AND y.All inputs are positive, non - zero numbers.

// My variant:

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

// ohters:

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

function isDivisible(n, x, y) {
    return !(n % x || n % y)
}

const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

// Count the Monkeys!
// You take your son to the forest to see the monkeys.You know that there are a certain number there(n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him.Given the number(n), populate an array with all numbers up to and including that number, but excluding zero.

// My variant:

function monkeyCount(n) {
    let a = '';
    for (let i = 1; i <= n; i += 1) {
        a += `${i}.`;
    }
    let b = a.split('.');
    let c = b.slice(0, b.length - 1)

    let ats = c.map(Number);

    return ats
}


// ohters:

function monkeyCount(n) {
    var monkeys = [];
    for (var i = 1; i < n + 1; i++) {
        monkeys.push(i);
    }
    return monkeys;
}

function monkeyCount(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
}

function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));

    return arr;
}

function monkeyCount(n) {
    return [...Array(n).keys()].map(a => a + 1)
}

function monkeyCount(n) {
    return [...Array(n + 1).keys()].slice(1);
}


// ЧЕРНОВИК
function monkeyCount(n) {
    let a = '';
    for (let i = 1; i <= n; i += 1) {
        a += i;
    }
    let b = a.split('');
    let ats = b.map(Number);

    return b
}

// Get the mean of an array
// It's the academic year's end, fateful moment of your school report.The averages must be calculated.All the students come to you and entreat you to calculate their average for them.Easy! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.


// My variant:

function getAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i = i + 1) {
        total = total + marks[i]
    }
    const count = marks.length;
    const average = total / count;
    const ats = Math.floor(average);

    return ats
}

// ohters:

function getAverage(marks) {
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// reduce is good 
var getAverage = (m) => parseInt(m.reduce((a, b) => a + b) / m.length)

function getAverage(marks) {
    var sum = 0;

    for (var i in marks)
        sum += marks[i];

    return parseInt(sum / marks.length);
}

// Shifty Closures
// Functional closures can get overly attached.Set them straight!
// Why doesn't greet_abe() actually greet Abe?

// My variant:

var greet_abe = function () {
    let name1 = 'Abe';
    return `Hello, ${name1}!`;
};

var greet_ben = function () {
    let name2 = 'Ben';
    return `Hello, ${name2}!`;
};


// ohters:

var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
    return function () {
        return "Hello, " + name + '!';
    };
}

const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';


// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.For example:
// Shorten the code such that it meets the requirements.
// A few hints:
// Try researching about built -in Array methods; they may help shorten your code a lot

// My variant:

function sumSquares(array) {
    const result = array.map(n => n ** 2);

    const sumReduce = result.reduce(function (total, n) {
        return total + n;
    });
    return sumReduce;
}

// ohters:

let sumSquares = a => a.reduce((s, x) => s + x * x, 0)

function sumSquares(array) {
    return array.reduce((a, b) => a + b ** 2, 0);
}

// An alternative solution using both map and reduce
var sumSquares = a => a.map(x => x * x).reduce((x, y) => x + y);

sumSquares = a => a.reduce((p, c) => p + c * c, 0)

// Training JS #14: Methods of Number object--toString() and toLocaleString()
// Coding in function colorOf.function accept 3 parameter:r g b.It means value of color red green and blue.the value range is 0 - 255.
// Use toString(16) Convert numbers r g b to hex string form.at last, combine them to a web color code and return it.
// the color code should starting with "#".and then use 2 characters per color.

// My variant:

function colorOf(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// ohters:

function colorOf(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}
function toHex(n) {
    var result = n.toString(16);
    return result.length == 1 ? "0" + result : result;
}

function colorOf(r, g, b) {
    r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
    g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
    b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);

    return '#' + r + g + b;
}

function colorOf(r, g, b) {
    //coding here
    return '#' + r.toString(16).padStart(2, 0) + g.toString(16).padStart(2, 0) + b.toString(16).padStart(2, 0);
}

const colorOf = (...rgb) => '#' + rgb.map(x => `0${x.toString(16)}`.slice(-2)).join('')

function colorOf(r, g, b) {
    let R = r.toString(16)
    let G = g.toString(16)
    let B = b.toString(16)

    if (r < 16) R = '0' + R
    if (g < 16) G = '0' + G
    if (b < 16) B = '0' + B

    return '#' + R + G + B
}

// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


// My variant:


function highAndLow(numbers) {
    let w = numbers.split(' ');

    w.sort(function (a, b) {
        return a - b;
    });
    const r = w[0];
    const y = w[w.length - 1];

    return `${y} ${r}`
}

// ohters:

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

// Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S.Each array includes only integer numbers.Output is a number too.

// My variant:

function arrayPlusArray(arr1, arr2) {
    let q = arr1.concat(arr2);

    const sumReduce = q.reduce(function (total, n) {
        return total + n;
    });

    return sumReduce
}

// ohters:

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a, b) => a + b, 0)
}
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
}

// shorter concat[reverse longer]
// Given 2 strings, a and b, return a string of the form: shorter + reverse(longer) + shorter.
// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
// Strings a and b may be empty, but not null(In C# strings may also be null.Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b + reverse(a) + b


// My variant:

function shorter_reverse_longer(a, b) {
    let r = a.split('');
    let t = b.split('');

    if (r.length >= t.length) {
        let f = r;
        let g = f.reverse();
        let d = g.join('');
        return `${b}${d}${b}`
    } else {
        let o = t;
        let x = o.reverse();
        let h = x.join('');
        return `${a}${h}${a}`
    }
}


// ohters:

function shorter_reverse_longer(a, b) {
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
        a + b.split('').reverse().join('') + a;
}

function shorter_reverse_longer(a, b) {
    return b.length > a.length ? a + b.split('').reverse().join(``) + a : b + a.split('').reverse().join(``) + b;
}

function shorter_reverse_longer(a, b) {
    if (a.length >= b.length) [a, b] = [b, a];
    return a + b.split('').reverse().join('') + a;
}

const shorter_reverse_longer = (a, b) =>
    b.length > a.length ? a + [...b].reverse().join(``) + a : b + [...a].reverse().join(``) + b;

function shorter_reverse_longer(a, b) {
    return b.length > a.length ? a + [...b].reverse().join('') + a : b + [...a].reverse().join('') + b
}


// Safen User Input Part I - htmlspecialchars
// Safen User Input Part I - htmlspecialchars
// You are a(n) novice / average / experienced / professional / world - famous Web Developer(choose one) who owns a(n) simple / clean / slick / beautiful / complicated / professional / business website(choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease.However, with ease comes danger.Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS(Cross Site Scripting).This is done by injecting script tags into the website through form fields which may contain malicious code(e.g.a redirection to a malicious website that steals personal information).
//     Mission
// Your mission is to implement a function that converts the following potentially harmful characters:
// < --> & lt;
// > --> & gt;
// " --> &quot;
// & --> & amp;
// Good luck: D

// My variant:

function htmlspecialchars(formData) {

    const regex = new RegExp('&', 'g');
    const t = formData.replace(regex, '&amp;');

    const regex1 = new RegExp('<', 'g');
    const q = t.replace(regex1, '&lt;');

    const regex2 = new RegExp('>', 'g');
    const w = q.replace(regex2, '&gt;');

    const regex3 = new RegExp('"', 'g');
    const r = w.replace(regex3, '&quot;');

    return r

}

// ohters:

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function htmlspecialchars(formData) {
    return formData.replace(/[<>"&]/g, ch => ({ "<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;" }[ch]));
}

function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}

const htmlspecialchars = formData => formData.replace(/[<>"&]/g, m => ({ "<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;" })[m])


Largest Elements
Write a program that outputs the top n elements from a list.

// My variant:

function largest(n, xs) {
    xs.sort(function (a, b) {
        return a - b;
    });
    if (n === 0) {
        return []
    } else {
        return xs.slice(-n)
    }
}

// ohters:

function largest(n, xs) {
    return xs.sort(function (a, b) { return a - b; }).slice(xs.length - n);
}

const largest = function (n, xs) {
    return n === 0 ? [] : xs.sort((a, b) => a - b).slice(-n)
}

const largest = (n, xs) => n ? xs.sort((a, b) => a - b).slice(-n) : [];

// Changing letters
// When provided with a String, capitalize all vowels
// For example:
// Input: "Hello World!"
// Output: "HEllO WOrld!"
// Note: Y is not a vowel in this kata.


// My variant:

function swap(string) {
    return string.replace(/a/g, "A")
        .replace(/e/g, "E")
        .replace(/i/g, "I")
        .replace(/o/g, "O")
        .replace(/u/g, "U");
}

// ohters:

function swap(st) {
    return st.replace(/[aeiou]/g, v => v.toUpperCase())
}//z.

const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');

swap = s => s.replace(/[aeiou]/gi, e => e.toUpperCase())

const swap = $ => $.replace(/[aeiou]/g, el => el.toUpperCase())

// V A P O R C O D E
// ASC Week 1 Challenge 4(Medium #1)
// Write a function that converts any sentence into a V A P O R W A V E sentence.a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter(or special character) to create this V A P O R W A V E effect.
// Note that spaces should be ignored in this cas


// My variant:

function vaporcode(string) {
    let x = string.split(' ');
    let y = x.join('');
    let w = y.split('');
    let ats = w.join('  ');
    return (ats.toUpperCase())
}


// ohters:

function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

const vaporcode = string =>
    string.toUpperCase().match(/\S/g).join(`  `);

function vaporcode(string) {
    let arr = string.toUpperCase().split('')
    let noSpace = arr.filter(item => item !== ' ')
    let result = noSpace.join('  ')
    return result;
}

function vaporcode(s) {
    return s.toUpperCase().match(/[^ ]/g).join`  `
}

const vaporcode = s => s.toUpperCase().replace(/(.)(\s+)?/g, '$1  ').trim()


// Nth Smallest Element(Array Series #4)
// Task
// Given an array / list of integers, find the Nth smallest element in the array.

// My variant:

function nthSmallest(arr, pos) {
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[pos - 1]
}

// ohters:

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

//task for 30 sec
const nthSmallest = (arr, pos, out = arr.sort((a, b) => a - b)) => out[pos - 1]

const nthSmallest = (a, n) => a.sort((x, y) => x - y)[n - 1];

// Filter Coffee
// You love coffee and want to know what beans you can afford to buy it.
// The first argument to your search function will be a number which represents your budget.
// The second argument will be an array of coffee bean prices.
// Your 'search' function should return the stores that sell coffee within your budget.
// The search function should return a string of prices for the coffees beans you can afford.The prices in this string are to be sorted in ascending order.

// My variant:

function search(budget, prices) {
    let result = prices.filter(function (elem) {
        if (elem <= budget) {
            return true;
        } else {
            return false;
        }
    });
    result.sort(function (a, b) {
        return a - b;
    });

    let r = result.join(',');
    return r
}

// ohters:

let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')

const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();

const search = (budget, prices) =>
    `${prices.filter(val => val <= budget).sort((a, b) => a - b)}`;

const search = (budget, prices) =>
    prices.filter(element => element <= budget)
        .sort((a, b) => a - b)
        .join()

function search(b, p) {
    r = []; for (i = 0; i < p.length; i++) if (p[i] <= b) r.push(p[i]); r.sort((a, b) => a - b); return r.join(',')
}

// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.

// My variant:

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    let a = numbers[0];
    let b = numbers[1];
    let ats = a + b;

    return ats
}

// ohters:

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function (a, b) { return a - b; });
    return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {
    var [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}

// Holiday VI - Shark Pontoon
// Your friend invites you out to a cool floating pontoon around 1km off the beach.Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon...Crap!
// You need to work out if the shark will get to you before you can get to the pontoon.To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
// You are given 5 variables;
// sharkDistance = distance from the shark to the pontoon.The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres / second.
// pontoonDistance = how far you need to swim to safety in metres.
// youSpeed = how fast you can swim in metres / second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".

// My variant:

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (pontoonDistance >= sharkDistance) {
        return "Shark Bait!"
    } else if (sharkSpeed === 0) {
        return "Alive!"
    } else if (dolphin === true) {
        let myTime = pontoonDistance / youSpeed;
        let sharkTime = 2 * sharkDistance / sharkSpeed;
        if (sharkTime > myTime) {
            return "Alive!"
        } else {
            return "Shark Bait!"
        }
    } else {
        const myTime = pontoonDistance / youSpeed;
        const sharkTime2 = sharkDistance / sharkSpeed;
        if (sharkTime2 > myTime) {
            return "Alive!"
        } else {
            return "Shark Bait!"
        }
    }
}

// ohters:

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)

    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
}

shark = (pD, sD, yS, sS, d) => yS / pD > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let shTime = sharkDistance / sharkSpeed;
    let youTime = pontoonDistance / youSpeed;
    if (dolphin == true) {
        shTime = shTime * 2;
    }
    if (youTime < shTime) {
        return "Alive!";
    }
    else {
        return "Shark Bait!";
    }

}

// DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.It is composed of four nucleic acid bases Guanine('G'), Cytosine('C'), Adenine('A'), and Thymine('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells.RNA differs slightly from DNA its chemical structure and contains no Thymine.In RNA Thymine is replaced by another nucleic acid Uracil('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  => "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty.All input is guaranteed to be valid, i.e.each input string will only ever consist of 'G', 'C', 'A' and / or 'T'.

// My variant:

function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
}

// ohters:

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}

function DNAtoRNA(dna) {
    var hold = ''
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] == "T") {
            hold += "U"
        }
        else { hold += dna[i] }
    }
    return hold;

}

// BASIC: Making Six Toast.
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once.So, you try to make 6 pieces of toast.
//     Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more(or less) pieces of toast you need in the toasters.Even though you need more or less, the number will still be positive, not negative.

// My variant:

function sixToast(num) {
    return Math.abs(num - 6)
}

// ohters:

function sixToast(num) {
    if (num < 6) {
        return 6 - num
    } else
        return num - 6;
}

function sixToast(num) {

    return num >= 6 ? num - 6 : num;
}



