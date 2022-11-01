// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript

// Fundamentals: Return

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt
// Note: All math operations will be: a (operation) b


// My variant:

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b 
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}


// ohters:

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;

// point-free & destructuring

{var {add, subtract, multiply, divide, modulo} = require('ramda') 
var [mod, subt, exponent] = [modulo, subtract, Math.pow]}

add=(ᅟ,ᅠ)=> ᅟ + ᅠ;
divide=(ᅟ,ᅠ)=> ᅟ / ᅠ;
multiply=(ᅟ,ᅠ)=> ᅟ * ᅠ;
mod=(ᅟ,ᅠ)=> ᅟ % ᅠ;
exponent=(ᅟ,ᅠ)=> ᅟ ** ᅠ;
subt=(ᅟ,ᅠ)=> ᅟ - ᅠ;

// Compare within margin

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
// Please note the following:
// When a is close to b, return 0.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as zero.
// Assume: margin >= 0
// Tip: Some languages have a way to make parameters optional.

// My variant:

function closeCompare(a, b, margin){
    if (Math.abs(a - b) <= margin) {
      return 0
    } else if (a < b) {
      return -1
    } if (a > b) {
      return 1
    } else if (a == b) {
      return 0
    }
}

// ohters:

function closeCompare(a, b, m = 0){
    return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}

function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1;
    if (a - margin > b) return 1;
    return 0;
}

const closeCompare = ($, ﬂ, m = 0) => $ - m > ﬂ ? 1 : $ + m < ﬂ ? -1 : 0

// Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// My variant:

function hello(name) {
    if (name === "" || name === undefined) {
      return 'Hello, World!'
    } else {
      let n = name[0].toUpperCase() + name.slice(1).toLowerCase();
      return `Hello, ${n}!`
    }
}

// ohters:

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

  function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

function hello(name) {
    return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`;
}


// Determine offspring sex based on genes XX and XY chromosomes
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";


// My variant:

function chromosomeCheck(sperm) {
    if (sperm == 'XX') {
      return "Congratulations! You're going to have a daughter."
    } else {
      return "Congratulations! You're going to have a son."
    }
}

// ohters:

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

function chromosomeCheck(sperm) {
    return "Congratulations! You're going to have a " + (sperm === 'XY' ? 'son' : 'daughter') + '.';
}

chromosomeCheck = s => `Congratulations! You're going to have a ${s[1] == 'X' ? 'daughter' : 'son'}.`;


// How many lightsabers do you own?
// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.


// My variant:

function howManyLightsabersDoYouOwn(name) {
    if (name == "Zach") {
      return 18
    } else {
      return 0
    }
}

// ohters:

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
}

let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;

const howManyLightsabersDoYouOwn = name =>
  (name === `Zach`) * 18;



// Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// My variant:

function problem(x){
    if ( typeof(x) !== 'number') {
      return "Error"
    } else {
      const ats = x * 50 + 6; 
      return ats
    }
}

// ohters:

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
}

const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;

function problem(x){
    return x===+x?50*x+6:'Error'
}

// Find out whether the shape is a cube
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// My variant:

var cubeChecker = function(volume, side){
    const w = volume % 1;
    const q = side % 1;
    if (side <= 0 || volume <= 0) {
      return false
    } else if (w != 0 || q !== 0) {
      return false
    } else if (Math.pow(side, 3) !== volume) {
      return false
    } else {
      return true
    }
};

// ohters:

var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
};

var cubeChecker = function(v, s){
    return s>0&&v==s*s*s;
};

const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);

cubeChecker = (v,s) => s > 0 && v === Math.pow(s, 3)

// Grader
// Create a function that takes a number as an argument and returns a grade based on that number.
// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// My variant:

function grader(score) {
    if (score > 1 || score < 0.6) {
      return "F"
    } else if (score >= 0.9) {
      return "A"
    } else if (score >= 0.8) {
      return "B"
    } else if (score >= 0.7) {
      return "C"
    } else if (score >= 0.6) {
      return "D"
    } 
}

// ohters:

function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
}

grader = s => s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A';

function grader(score) {
    return score < .6 || score > 1 ? 'F'
      : score < .7 ? 'D'
      : score < .8 ? 'C'
      : score < .9 ? 'B'
      : 'A'
    
}

// Grasshopper - Array Mean
// Find Mean
// Find the mean (average) of a list of numbers in an array.
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.


// My variant:

var findAverage = function (nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i = i + 1) {
      total = total + nums[i]
    }
    const count = nums.length;
    const avg = total / count;
    return avg
}

// ohters:

const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

var findAverage = function(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

// Who ate the cookie?
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.
// Please leave feedback for this kata. Cheers!

// My variant:

function cookie(x){
    if (typeof(x) === 'string') {
      return "Who ate the last cookie? It was Zach!"
    } else if (typeof(x) === 'number') {
      return "Who ate the last cookie? It was Monica!"
    } else {
      return "Who ate the last cookie? It was the dog!"
    }
}

// ohters:

function cookie(x) {
    var t = typeof x
    var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
}

function cookie(x){
    return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}

function cookie(x){
    return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}

cookie = x => `Who ate the last cookie? It was ${x.big ? 'Zach' : x.toFixed ? 'Monica' : 'the dog'}!`



