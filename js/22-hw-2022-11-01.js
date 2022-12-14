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

function add(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

function mod(a, b) {
  return a % b
}

function exponent(a, b) {
  return a ** b
}

function subt(a, b) {
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

{
  var { add, subtract, multiply, divide, modulo } = require('ramda')
  var [mod, subt, exponent] = [modulo, subtract, Math.pow]
}

add = (ᅟ, ᅠ) => ᅟ + ᅠ;
divide = (ᅟ, ᅠ) => ᅟ / ᅠ;
multiply = (ᅟ, ᅠ) => ᅟ * ᅠ;
mod = (ᅟ, ᅠ) => ᅟ % ᅠ;
exponent = (ᅟ, ᅠ) => ᅟ ** ᅠ;
subt = (ᅟ, ᅠ) => ᅟ - ᅠ;

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

function closeCompare(a, b, margin) {
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

function closeCompare(a, b, m = 0) {
  return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
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

function problem(x) {
  if (typeof (x) !== 'number') {
    return "Error"
  } else {
    const ats = x * 50 + 6;
    return ats
  }
}

// ohters:

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;

function problem(x) {
  return x === +x ? 50 * x + 6 : 'Error'
}

// Find out whether the shape is a cube
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// My variant:

var cubeChecker = function (volume, side) {
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

var cubeChecker = function (volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
};

var cubeChecker = function (v, s) {
  return s > 0 && v == s * s * s;
};

const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);

cubeChecker = (v, s) => s > 0 && v === Math.pow(s, 3)

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
  if (score > 1 || score < 0.6) return 'F'
  if (score < 0.7) return 'D'
  if (score < 0.8) return 'C'
  if (score < 0.9) return 'B'
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

var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

// Who ate the cookie?
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.
// Please leave feedback for this kata. Cheers!

// My variant:

function cookie(x) {
  if (typeof (x) === 'string') {
    return "Who ate the last cookie? It was Zach!"
  } else if (typeof (x) === 'number') {
    return "Who ate the last cookie? It was Monica!"
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}

// ohters:

function cookie(x) {
  var t = typeof x
  var who = t == "string" ? 'Zach' : t == "number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}

function cookie(x) {
  return `Who ate the last cookie? It was ${({ string: "Zach", number: "Monica" }[typeof x] || "the dog")}!`;
}

function cookie(x) {
  return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
}

cookie = x => `Who ate the last cookie? It was ${x.big ? 'Zach' : x.toFixed ? 'Monica' : 'the dog'}!`


// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

// My variant:

function findDifference(a, b) {
  const s = a[0] * a[1] * a[2];
  const q = b[0] * b[1] * b[2];
  const d = s - q;

  return Math.abs(d)
}

// ohters:

function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

function find_difference([a, b, c], [d, e, f]) {
  return Math.abs(a * b * c - d * e * f)
}

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
}

find_difference = (a, b) => (c = (a, b) => a * b, Math.abs(a.reduce(c) - b.reduce(c)))

// simple calculator
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// My variant:

function calculator(a, b, sign) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    return "unknown value"
  } else if (sign === "+") {
    return a + b
  } else if (sign === "-") {
    return a - b
  } else if (sign === "*") {
    return a * b
  } else if (sign === "/") {
    return a / b
  } else {
    return "unknown value"
  }
}

// ohters:

function calculator(a, b, sign) {
  try { return eval(a + sign + b); }
  catch (e) { return "unknown value"; }
}

function calculator(a, b, sign) {
  switch (sign) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return "unknown value";
  }

}

const calculator = (a, b, sign) => !isNaN(a) && !isNaN(b) && ['+', '-', '*', '/', '%'].includes(sign) ? eval(a + sign + b) : "unknown value"

// Age Range Compatibility Equation
// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


// My variant:

function datingRange(age) {
  if (age <= 14) {
    const a = age - 0.10 * age;
    const b = age + 0.10 * age;
    const aa = Math.floor(a);
    const bb = Math.floor(b);

    return `${aa}-${bb}`
  } else {
    const r = age / 2 + 7;
    const w = (age - 7) * 2;
    const rr = Math.floor(r);
    const ww = Math.floor(w);

    return `${rr}-${ww}`
  }
}

// ohters:

function datingRange(n) {
  return [n <= 14 ? 0.9 * n : 0.5 * n + 7, n <= 14 ? 1.1 * n : 2 * n - 14].map(Math.floor).join("-");
}

function datingRange(age) {
  var min = age > 14 ? age / 2 + 7 : age - (0.10 * age);
  var max = age > 14 ? (age - 7) * 2 : age + (0.10 * age);

  return Math.floor(min) + "" + '-' + Math.floor(max) + ""
}

function datingRange(age) {
  let over14 = `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) * 2)}`;
  let under14 = `${Math.floor(Math.abs((age * .10) - age))}-${Math.floor((age * .10) + age)}`;

  return (age <= 14 ? under14 : over14);
}


// Grasshopper - Order of operations
// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.


// My variant:

function orderOperations() {
  return (2 + 2) * (2 + 2) * 2
}


// Return to Sanity
// This function should return an object, but it's not doing what's intended.What's wrong?

// My variant:

function mystery() {
  var results =
    { sanity: 'Hello' };
  return results;
}

// ohters:

const mystery = () => ({ sanity: 'Hello' });

var mystery = () => Object({ sanity: 'Hello' })


// Max Headroom and JavaScript style
// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

// My variant:

function getMax1() {
  var max =
  {
    name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  var max =
  {
    name: 'Max Headroom'
  }
  return max;
}

// ohters:

function getMax1() {
  var max =
  {
    name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  // note Javascript does not require the semicolon but can assume it meaning nothing is returned
  // instead move the brace up
  return {
    name: 'Max Headroom'
  }
}

const getMax1 = () => {
  const max = { name: `Max Headroom` };
  return max;
};

const getMax2 = () =>
  ({ name: `Max Headroom` });

const getMax1 = () => ({ name: 'Max Headroom' })
const getMax2 = () => ({ name: 'Max Headroom' })

getMax1 = getMax2 = _ => ({ name: 'Max Headroom' })


// Remove the time
// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:
// Weekday Month Day, time e.g., Friday May 2, 7pm
// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
// Write a function, shortenToDate, that takes the Website date / time in its original string format, and returns the shortened format.
// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

// My variant:

function shortenToDate(longDate) {
  let x = longDate.split(',');

  return x[0]
}

// ohters:

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

const shortenToDate = longDate => longDate.split(",")[0];

function shortenToDate(longDate) {
  // your code here
  return longDate.slice(0, longDate.indexOf(","));
}

const shortenToDate = str => str.split(",")[0];


// Leonardo Dicaprio and Oscars
// You have to write a function that describe Leo:
// if oscar was(integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86(and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"


// My variant:

function leo(oscar) {
  if (oscar > 88) {
    return "Leo got one already!"
  } else if (oscar == 88) {
    return "Leo finally won the oscar! Leo is happy"
  } else if (oscar == 86) {
    return "Not even for Wolf of wallstreet?!"
  } else {
    return "When will you give Leo an Oscar?"
  }
}

// ohters:

const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
    oscar === 86 ? 'Not even for Wolf of wallstreet?!' :
      oscar < 88 ? 'When will you give Leo an Oscar?' :
        'Leo got one already!';
};

const leo = oscar => oscar > 88 ? "Leo got one already!" : (oscar == 88 ? "Leo finally won the oscar! Leo is happy" : (oscar == 86 ? "Not even for Wolf of wallstreet?!" : "When will you give Leo an Oscar?"));


function leo(oscar) {
  return oscar == 88 ? "Leo finally won the oscar! Leo is happy" :
    oscar == 86 ? "Not even for Wolf of wallstreet?!" :
      oscar < 88 ? "When will you give Leo an Oscar?" :
        "Leo got one already!"
}


// Formatting decimal places #0
// Each number should be formatted that it is rounded to two decimal places.You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

// My variant:

function twoDecimalPlaces(n) {
  const t = n.toFixed(2);

  return +t
}

// ohters:

const twoDecimalPlaces = n => Number(n.toFixed(2))

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}

const twoDecimalPlaces = n => +n.toFixed(2)

const twoDecimalPlaces = (n) => Math.round(n * 100) / 100;

function twoDecimalPlaces(n) {
  return parseFloat(n.toFixed(2));
}

// ES6 string addition
// It is easy to join two strings together like this string1 + string2.
// Another way to get the desired result would be with string1.concat(string2)
// ES6 has introduced another way of joining strings.Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
// + , .concat() & .join() will not be allowed in this exercise.I have also removed some other methods that can be used to cheat!
// If one of the arguments is a number your code must coerce it into being a string.

// My variant:

function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

// ohters:


// Closest elevator
// Given 2 elevators(named "left" and "right") in a building with 3 floors(numbered 0 to 2), write a function elevator accepting 3 arguments(in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor("left" / "right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0 - 2.


// My variant:

function elevator(left, right, call) {
  if (left == right) {
    return 'right'
  } else if (call == 0 && left < right) {
    return 'left'
  } else if (call == 0 && left > right) {
    return 'right'
  } else if (call == 1 && left == 0 && right == 2) {
    return 'right'
  } else if (call == 1 && left == 2 && right == 0) {
    return 'right'
  } else if (call == 1 && left == 0 && right == 1) {
    return 'right'
  } else if (call == 1 && left == 1 && right == 0) {
    return 'left'
  } else if (call == 1 && left == 2 && right == 1) {
    return 'right'
  } else if (call == 1 && left == 1 && right == 2) {
    return 'left'
  } else if (call == 2 && left > right) {
    return 'left'
  } else if (call == 2 && left < right) {
    return 'right'
  }
}

// ohters:

const elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'

const elevator = (l, r, c) => Math.abs(c - l) < Math.abs(c - r) ? 'left' : 'right'

function elevator(left, right, call) {
  return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
}

function elevator(left, right, call) {
  if (left === 0 && right === 1 && call === 0 ||
    left === 0 && right === 2 && call === 0 ||
    left === 1 && right === 0 && call === 1 ||
    left === 1 && right === 0 && call === 2 ||
    left === 1 && right === 2 && call === 0 ||
    left === 1 && right === 2 && call === 1 ||
    left === 2 && right === 0 && call === 2 ||
    left === 2 && right === 1 && call === 2) {
    return 'left';
  } else {
    return 'right';
  }
}

function elevator(a, b, c) {
  return (c - a) ** 2 < (c - b) ** 2 ? "left" : "right"
}


// Fuel Calculator
// In this kata you will have to write a function that takes litres and pricePerLitre(in dollar) as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre.But total discount per litre cannot be more than 25 cents.Return the total cost rounded to 2 decimal places.Also you can guess that there will not be negative or non - numeric inputs.
// Good Luck!
// Note
// 1 Dollar = 100 Cents



// My variant:

function fuelPrice(litres, pricePerLitre) {
  if (litres < 2) {
    let t = litres * pricePerLitre;
    const j = t.toFixed(2)
    return parseFloat(j)

  } else if (litres < 4) {
    let x = litres * (pricePerLitre - 0.05);
    const z = x.toFixed(2)
    return parseFloat(z)

  } else if (litres < 6) {
    const y = litres * (pricePerLitre - 0.10);
    const g = y.toFixed(2)
    return parseFloat(g)

  } else if (litres < 8) {
    let o = litres * (pricePerLitre - 0.15);
    const w = o.toFixed(2)
    return parseFloat(w)

  } else if (litres < 10) {
    let u = litres * (pricePerLitre - 0.20);
    const d = u.toFixed(2)
    return parseFloat(d)

  } else {
    let h = litres * (pricePerLitre - 0.25);
    const l = h.toFixed(2)
    return parseFloat(l)
  }
}


// ohters:

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i += 2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}

function fuelPrice(litres, pricePerLiter) {
  var discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  var price = litres * (pricePerLiter - discount);
  return Math.round(price * 100) / 100;
}

function fuelPrice(l, p) {
  return Math.round(100 * l * Math.max(p - 0.05 * ~~(l / 2), p - 0.25)) / 100;
}


// Get the Middle Character
// You are going to be given a word.Your job is to return the middle character of the word.If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// My variant:

function getMiddle(s) {
  let p = s.length / 2;
  let z = p % 1;

  if (z === 0) {
    let f = p - 1;
    let a = `${s[f]}${s[p]}`;

    return a
  } else {
    let t = Math.floor(p);
    return `${s[t]}`
  }
}

// ohters:

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2)
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}


// Binary Addition
// Implement a function that adds two numbers together and returns their sum in binary.The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// My variant:

function addBinary(a, b) {
  let s = a + b;
  let d = Number(s).toString(2);

  return d
}

// ohters:

function addBinary(a, b) {
  return (a + b).toString(2)
}

function decimalToBinary(decimal) {
  return (decimal >>> 0).toString(2);
}
function addBinary(a, b) {
  return decimalToBinary(a + b);
}

function addBinary(a, b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}

const addBinary = (a, b) => Math.trunc(a + b).toString(2)


// Localize The Barycenter of a Triangle
// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides.The three medians of a triangle intersect at the same point, called the barycenter or the centroid.Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.
// The function bar_triang() or barTriang or bar - triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array[xO, yO]
// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).
// You know that the coordinates of the barycenter are given by the following formulas.

// My variant:

function barTriang(p1, p2, p3) {
  let x = (p1[0] + p2[0] + p3[0]) / 3;
  let y = (p1[1] + p2[1] + p3[1]) / 3;
  let a = x.toFixed(4);
  let b = y.toFixed(4);

  return [parseFloat(a), parseFloat(b)]
}

// ohters:

function barTriang(p1, p2, p3) {
  return [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
  +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];
}

const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [Math.round((xA + xB + xC) / .0003) / 10000, Math.round((yA + yB + yC) / .0003) / 10000];

const roundToFour = n => +`${Math.round(`${n}e+4`)}e-4`;
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [
  roundToFour((xA + xB + xC) / 3),
  roundToFour((yA + yB + yC) / 3)
];


// Coefficients of the Quadratic Equation
// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots(x1 and x2).
// Equation will be the form of ax ^ 2 + bx + c = 0
// Return type is a Vector(tuple in Rust, Array in Ruby) containing coefficients of the equations in the order(a, b, c).
// Since there are infinitely many solutions to this problem, we fix a = 1.
// Remember, the roots can be written like(x - x1) * (x - x2) = 0


// My variant:

function quadratic(x1, x2) {
  const b = - x1 - x2;
  const d = (x2 - x1) * (x2 - x1);
  const s = b * b;
  const c = (s - d) / 4;

  return [1, b, c]
}

// ohters:

function quadratic(x1, x2) {
  return [1, -(x2 + x1), (x1 * x2)]
}

// quadratic equation
var quadratic = (x1, x2) => [1, (x1 + x2) * -1, x1 * x2]

function quadratic(x1, x2) {
  return [1, -x1 - x2, x1 * x2];
}

const quadratic = (a, b) => [1, -a - b, a * b];

// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string).

// My variant:

function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true
  } else {
    return false
  }
}

// ohters:

function solution(str, ending) {
  return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);

function solution(str, ending) {
  if (typeof (str) != "string" || typeof (ending) != "string")
    throw "wrong type";
  if (ending.length > str.length)
    return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}


// Power
// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power(ie multiplies number by itself power times).
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// My variant:

function numberToPower(number, power) {
  console.info(Math.log2(1024));
  let result = 1;
  for (i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

// ohters:

function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}

const numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;

// Counting sheep...
// Consider an array / list of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).


// My variant:

function countSheeps(arrayOfSheep) {
  let arrayOfSheepCount = 0;
  let arrayOfSheepPos = 0;
  const fullarrayOfSheep = arrayOfSheep;
  const searchTerm = true;

  while (fullarrayOfSheep.indexOf(searchTerm, arrayOfSheepPos) >= 0) {
    arrayOfSheepCount++;
    arrayOfSheepPos = fullarrayOfSheep.indexOf(searchTerm, arrayOfSheepPos) + 1;
  }
  return arrayOfSheepCount
}

// ohters:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

let countSheeps = x => x.filter(s => s).length;

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(function (result, current) {
    if (current) result++;
    return result;
  }, 0);
}


// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My variant:

function removeExclamationMarks(s) {
  let x = s.split('!');
  let z = x.join('');
  return z
}

// ohters:

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

const removeExclamationMarks = s => s.replace(/!/g, "");

let removeExclamationMarks = (s) => s.replace(/!/g, '');

// Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.Return the result rounded to two decimals.
// Note: use the π value provided in your language(Math:: PI, M_PI, math.pi, etc)

// My variant:

function squareArea(A) {

  let p = 3.1416;
  let w = (2 * A) / p;
  let Area = Math.pow(w, 2);
  let ats = +Area.toFixed(2);

  return ats
}

// ohters:

function squareArea(A) {
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area * 100) / 100
}

squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

function squareArea(A) {
  return Math.round(Math.pow(A * 2 / Math.PI, 2) * 100) / 100
}

function squareArea(A) {
  // Calculate the circumference of A 
  const circumference = A * 4;

  // Calculate the radius of A
  const radius = circumference / (Math.PI * 2);

  // Calculate the area of the square, rounded to 2 decimal places
  const area = Number((radius ** 2).toFixed(2));

  // Return the result
  return area;
}


// Type of sum
// Return the type of the sum of the two arguments

// My variant:

function typeOfSum(a, b) {
  const ats = a + b;
  if (typeof ats === 'number') {
    return 'number'
  } else {
    return 'string'
  }
}

// ohters:

const typeOfSum = (a, b) => typeof (a + b);

function typeOfSum(a, b) {
  return typeof (a + b);
}

function typeOfSum(a, b) {
  let res = a + b;
  return typeof res;
}

function typeOfSum(a, b) {
  if (typeof a === 'string' || a instanceof String) { return 'string' }
  if (typeof b === 'string' || b instanceof String) { return 'string' }
  return 'number'
}


// Find Nearest square number
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// My variant:

function nearestSq(n) {
  let a = Math.sqrt(n);
  let b = Math.round(a);
  let ats = Math.pow(b, 2);

  return ats
}

// ohters:

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2
}

const nearestSq = n => (Math.round(Math.sqrt(n))) ** 2

function nearestSq(n) {
  let a = Math.round(Math.sqrt(n));
  return a * a;
}






