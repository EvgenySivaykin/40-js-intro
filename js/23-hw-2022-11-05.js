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

