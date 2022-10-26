// Will there be enough space?

// My variant: 

function enough(cap, on, wait) {
    if (cap >= (on + wait)) {
      return 0
    } else {
      return wait - (cap - on);
    }
}

// Ohters:

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}

function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
}

function enough(cap, on, wait) {
    return cap - wait - on < 0 ? on + wait - cap : 0;
}

const enough = (cap, on, wait) => Math.max(0,wait-cap+on);

function enough(cap, on, wait) {
    console.log(cap, on, wait)
    return (cap-on) >= wait ? 0 : wait-(cap-on)
}

function century(year) {
    let century = Math.ceil(year / 100);
    return `${century}, 'Testing for year' ${year}`;
  }


// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// My variant: 


class Kata {
    static getVolumeOfCuboid(length, width, height) {
    return length * width * height
    }
}

// Ohters:

class Kata {
    static getVolumeOfCuboid(l, w, h) {
      return l * w * h;
    }
};

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if(l<=0 || w<=0 ||h <= 0)  return 0;
    
    return l*w*h;
  };

  return Kata;

})();

const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
}


const Kata = {
    getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
}


// Calculate Price Excluding VAT
// Write a function that calculates the original product price, without VAT.
// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
// Thus, if your function receives 230.00 as input, it should return 200.00
// Notes:
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

// My variant: 

//return price without vat
function excludingVatPrice(price){
  if (price == null) {
    return -1;
  } else {
    const PriceWithoutVat = price / 1.15;
    return Math.round(PriceWithoutVat * 100) / 100;
  }
}


// Ohters:

excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);

function excludingVatPrice(price) {
  return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}

const excludingVatPrice = price =>
  price === null ? -1 : Math.round(price / 1.15 * 10**2) / 10**2;

function excludingVatPrice(price){
    return (price == null)? -1 : ((price/115)*100).toFixed(2)*1;
}


excludingVatPrice = price => price == null? -1: +(price/1.15).toFixed(2)

//return price without vat
function excludingVatPrice(price){
  let i = price - (price*15/115)
return price === null  ? -1 : +(i.toFixed(2))
  console.log(price)
}

//return price without vat
function excludingVatPrice(price){
  console.log(price);
    // your code
    return (price === +price ? (price / 1.15).toFixed(2) - 0 : -1);
}

//return price without vat
function excludingVatPrice(price){
  return price == undefined ? -1 : +((price / 1.15).toFixed(2)) 
}


// MakeUpperCase
// Write a function which converts the input string to uppercase.

// My variant: 

function makeUpperCase(str) {
  return str.toUpperCase() 
}


// Ohters:

const makeUpperCase = str => str.toUpperCase();

function makeUpperCase(str) {
  return str.toLocaleUpperCase();
}

function makeUpperCase(str) {
  // Code here
  var res = str.toUpperCase();
  return res;
}

function makeUpperCase(str) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    const chr = (charCode >= 97 && charCode <= 122) ? String.fromCharCode(charCode - 32) : str[i];

    output += chr;
  }
  
  return output;
}

const makeUpperCase = (s) => s.toUpperCase()



// Holiday VIII - Duty Free
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.


// My variant: 

function dutyFree(normPrice, discount, hol){
  const x = (hol * 100) / (normPrice * discount);
  return Math.floor(x)
}


// Ohters:

function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}

function dutyFree(normPrice, discount, hol){
  var saving = normPrice * discount / 100;
  return Math.floor(hol / saving);
}

const dutyFree = (normPrice, discount, hol) => {
  return Math.floor(1 / (normPrice * discount / 100) * hol);
}

const dutyFree = (normPrice, discount, hol) =>
  hol / (normPrice * discount / 100) ^ 0;




// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n, EASY!

// My variant: 

function oddCount(n){
  return Math.floor(n / 2);
}


// Ohters:

const oddCount = n => Math.floor(n/2) ;

function oddCount(n){
  /*
   var returnArray = [];
   for(var i=1;i<n;i=i+2) {
     returnArray.push(i);
   }
   return returnArray.length;
  */
  return parseInt(n/2);
 }

 function oddCount(n){
  // your code here
  console.log(n)
  var result = 0
  result = Math.floor(n/2)
  return result
}

function oddCount(n){
  let odd = Math.round((n - 1) / 2);
  return odd;
}

// Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

// My variant: 

function century(year) {
  const cent = Math.ceil(year/100);                      
  return cent;
}


// Ohters:

function century(year) {
  return (year + 99) / 100 | 0;
}

function century(year) {
  // Finish this :)
  return Math.ceil(year/100);
}

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

function century(year) {
  if (year <= 100){
    return 1;
  }

  let cen = parseInt(year / 100);
  let rem = year % 100;
  
  return rem === 0 ? cen : cen + 1;
}

Find the Remainder
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.

// My variant: 

function remainder(n, m){
  if (n >= m) {
    const nm = n % m;
    return nm;
  } else {
    const mn = m % n;
    return mn;
  } 
}


// Ohters:

function remainder(a, b){
  return a > b ? a % b : b % a;
}

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var min = Math.min(a,b);
  var max = Math.max(a,b);

  return min ? max % min : NaN;
}

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  if(b>a)
    return b%a;
  else
    return a%b;
}

function remainder(a, b){
  return (a > b) ? a % b : b % a;
}

function remainder(a, b){  
  return Math.max(a,b) % (Math.min(a,b) || NaN);
}

function remainder(a, b){ return Math.max(a,b) % Math.min(a,b); }

const remainder = (a, b) => a > b ? a % b : b % a;

// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


// My variant:

var summation = function (num) {
  const x = (1 + num) * num / 2;
  return x
}

// Ohters:


var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);

// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


// My variant:

function basicOp(operation, value1, value2)
{
  if (operation == '+') {
    return value1 + value2;
  } else if (operation == '-') {
    return value1 - value2;
  } else if (operation == '*') {
    return value1 * value2;
  } else if (operation == '/') {
    return value1 / value2;
  }
}

// Ohters:

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

function basicOp(o, a, b) {
  return eval(a+o+b);
}

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': return value1 / value2;
      default: return 'Operation must be one of + - * /';
  }
}

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}


// Improving Math.round(x)
// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:


// My variant:

Math.roundTo = function (number, precision) {
  return +(number).toFixed(precision)
}


// Ohters:

Math.roundTo = (number, precision) => Number(number.toFixed(precision));

Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}

Math.roundTo = function (number, precision) {
  return +(number.toFixed(precision));
}

Math.roundTo = (number, precision) =>
  Math.round(number * `1e${precision}`) / `1e${precision}`;



// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


// My variant:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const lucky = (mpg * fuelLeft) - distanceToPump;
  if (lucky >= 0) {
    return true
  } else if (lucky < 0) {
    return false
  }
};


// Ohters:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump;
};

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return (distanceToPump > mpg * fuelLeft) ? false : true;
}

const zeroFuel = (deth, now, fuck) => deth/now <= fuck;

// NBA full 48 minutes average
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.


// My variant:


function pointsPer48(ppg, mpg) {
  if (ppg == 0 || mpg == 0) {
    return 0
  }  else return parseFloat((ppg * 48 / mpg).toFixed(1))
}



// Ohters:

function pointsPer48(ppg, mpg) {
  return +(ppg/mpg*48).toFixed(1)||0
}

const pointsPer48 = (ppg, mpg) => mpg ? +(ppg*48/mpg).toFixed(1) : 0;

function pointsPer48(ppg, mpg) {
  var num = (48/mpg) * ppg
  return +num.toFixed(1) || 0
}

// game 48
var pointsPer48 = (ppg, mpg) => mpg == 0 ? 0 : Math.round( ppg / mpg * 48 * 10 ) / 10

let pointsPer48 = (a, b) => a === 0 && b === 0 ? 0 : Math.round(480 * a / b) / 10;

// Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


// My variant:

function litres(time) {
  const aqua = time * 0.5;
  return Math.floor(aqua);
}


// Ohters:

function litres(time) {
  return Math.floor(time * 0.5);
}

function litres(time) {
  return Math.floor(time/2);
}

litres = t => ~~(t / 2);

function litres(time) {
  return time>>1
}

// Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// My variant:

const stringToNumber = function(str){
  return parseInt(str);
}

// Ohters:

var stringToNumber = function(str){
  return +str;
}

const stringToNumber = str => Number(str)



// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// My variant:

function boolToWord( bool ){
  if (bool == true) {
    return "Yes"
  } if (bool == false) {
    return "No"
  }
}


// Ohters:
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

let boolToWord = bool => bool ? 'Yes' : 'No';


// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// My variant:

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 != 0) {
    return true
  } else if (flower1 % 2 != 0 && flower2 % 2 === 0) {
    return true
  } else {
    return false
  }
}


// Ohters:

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

function lovefunc(flower1,flower2){
  if (flower1%2==0&&flower2%2!==0) {
    return true;
  }else if(flower1%2!==0&&flower2%2==0){
    return true;
  }else return false;
}

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 == 1;
}

let lovefunc = (f1, f2) => !!((f1+f2)%2)

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// My variant:

function solution(str){
  let ats = '';
  for (let i = 0; i < str.length; i = i + 1) {
    const index = str.length - 1 - i;
    const symbol = str[index];
    ats += symbol;
  }
  return ats;
}

// Ohters:

function solution(str){
  return str.split('').reverse().join('');  
}

const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('')


// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My variant:

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}


// Ohters:

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

function even_or_odd(number) {
  return number%2==0 ? 'Even' : 'Odd'
}

function even_or_odd(number) {
  return number & 1 ? 'Odd' : 'Even';
}


// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

// My variant:

function numberToString(num) {
  return num.toString()
}

// Ohters:

function numberToString(num) {
  return ''+num;
}

const numberToString = num => `${num}`;

numberToString = String;


// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


// My variant:

function bmi(weight, height) {
  const bmi = weight / (height * height); 
  
  if (bmi <= 18.5) {
    return "Underweight"
  } else if (bmi <= 25.0) {
    return "Normal"
  } else if (bmi <= 30.0) {
    return "Overweight"
  } else if (bmi > 30) {
    return "Obese"
  }
}


// Ohters:

function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  
}

function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
}

function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

const bmi = (weight, height) => {

  let x = (weight / (height * height))
  
  return x <= 18.5 ? "Underweight"
       : x <= 25.0 ? "Normal"
       : x <= 30.0 ? "Overweight"
       : x > 30   && "Obese"
}


// You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:


// My variant:

var isSquare = function(n){
  const x = Math.sqrt(n)
  const y = x % 1
  if (y === 0) {
    return true
  } if (y != 0) {
    return false
  }
}


// Ohters:

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

var isSquare = function(n){
  for (var x = 0; x <= n; x++) {
    if (n === 0) {
      return true;
    } else if (n / x === x) {
      return true;
    }
  }
  
  return false;
}

// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.

// My variant:

function doubleInteger(i) {
  return i * 2;
}




// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.


// My variant:

function booleanToString(b){
  if (b == true) {
    return "true"
  } if (b == false) {
    return "false"
  }
}

// Ohters:

function booleanToString(b){
  return b.toString();
}

function booleanToString(b){
  return String(b);
}


// Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// My variant:

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}


// Ohters:
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// My variant:

function otherAngle(a, b) {
  return 180 - a - b;
}

// Ohters:

const otherAngle = (a, b) => 180 - a - b


// Reverse List Order
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// My variant:

function reverseList(list) {
  return list.reverse()
}


// Ohters:

function reverseList(list) {
  let revList = list.reverse();
  return revList;
}


const reverseList = L => L.reverse()

// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]


// My variant:

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Ohters:

function greet(name){
  return "Hello, <name> how are you doing today?".replace("<name>", name);
}

// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.


// My variant:

function past(h, m, s){
  const result = (h * 3600000) + (m * 60000) + (s * 1000); 
  return result
}


// Ohters:

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

function past(h, m, s){
  return (((h*60) + m)*60 + s)*1000;
}


// Welcome!
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

// My variant:

function greet(language) {
  if (language == 'czech') {
    return 'Vitejte'
  } else if (language == 'danish') {
    return 'Velkomst'
  } else if (language == 'dutch') {
    return 'Welkom'
  } else if (language == 'estonian') {
    return 'Tere tulemast'
  } else if (language == 'finnish') {
    return 'Tervetuloa'
  } else if (language == 'flemish') {
    return 'Welgekomen'
  } else if (language == 'french') {
    return 'Bienvenue'
  } else if (language == 'german') {
    return 'Willkommen'
  } else if (language == 'irish') {
    return 'Failte'
  } else if (language == 'italian') {
    return 'Benvenuto'
  } else if (language == 'latvian') {
    return 'Gaidits'
  } else if (language == 'lithuanian') {
    return 'Laukiamas'
  } else if (language == 'polish') {
    return 'Witamy'
  } else if (language == 'spanish') {
    return 'Bienvenido'
  } else if (language == 'swedish') {
    return 'Valkommen'
  } else if (language == 'welsh') {
    return 'Croeso'
  } else {
    return 'Welcome'
  }
}

// Ohters:

function greet(lang) {
  return langs[lang]||langs['english'];
}
var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};


function greet(language) {
  
  switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
    }
  
}

// Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.


// My variant:

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m
  }
}


// Ohters:

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m

const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);

// String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


// My variant:

function repeatStr (n, s) {
  return Array(n).fill(s).join('');
}

// Ohters:

function repeatStr (n, s) {
  return s.repeat(n);
}

const repeatStr = (n,s) => s.repeat(n) ;

function repeatStr (n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}

// You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// My variant:

function check(a, x) {
  if (a.includes(x)) {
    return true
  } else {
    return false
  }
}

// Ohters:

const check = (a,x) => a.includes(x);

function check(a,x){
  return a.includes(x);
};

function check(a,x){
  return a.indexOf(x) > -1 ? true : false;
};

// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My variant:
function removeChar(str){
  return str.slice(1, -1)
}; 

// Ohters:

const removeChar = str => str.slice(1,-1)

function removeChar(str){
  return str.substring(1, str.length-1);
};

function removeChar(str){
  //You got this!
   str1 = str.split('');
   str1.shift();
   str1.pop();
   return str1.join('');
     
};


function removeChar(str){
  return str.slice(1, str.length - 1);
};

// The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// My variant:

function feast(beast, dish) {
  let pr1 = beast.slice(0, 1);
  let pr2 = dish.slice(0, 1);
  let gal1 = beast.slice(-1);
  let gal2 = dish.slice(-1);
  
  if (pr1 == pr2 && gal1 == gal2) {
    return true
  } else {
    return false
  }
}

// Ohters:

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:


// My variant:

function areYouPlayingBanjo(name) {
  let first = name.slice(0, 1);
  if (first == 'R' || first == 'r') {
    return `${name} plays banjo`
  } else {
    return`${name} does not play banjo` 
  }
}

// Ohters:

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");

const areYouPlayingBanjo = name => {
  const plays = name.toLowerCase().startsWith('r')
    ? 'plays'
    : 'does not play';
  return `${name} ${plays} banjo`;
}

// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


// My variant:

function removeEveryOther(arr){
  var firstArr = []
  for (var i = 0; i < arr.length; i = i+2) {
    firstArr.push(arr[i]);
  }
  return firstArr
}


// Ohters:

const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));

function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

function removeEveryOther(arr){
  return arr.filter((_,i)=>i%2==0)
}





