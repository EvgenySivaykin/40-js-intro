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







