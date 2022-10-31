https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript

// Simple Fun #1: Seats in Theater

// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.


// My variant: 

function seatsInTheater(nCols, nRows, col, row) {
    const x = (nCols - col + 1) * (nRows - row);
    return x
}

// ohters:

function seatsInTheater(nCols, nRows, col, row) {
    var totalObstructedRows = nRows - row;
    var totalObstructedCols = nCols - (col - 1);
    
    return totalObstructedRows * totalObstructedCols;
}

// Grasshopper - Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.


// My variant: 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    const sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return sum 
}

// Switch it Up!
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

// My variant: 

function switchItUp(number){
    if (number === 0) {
      return 'Zero'
    } else if (number === 1) {
      return 'One'
    } else if (number === 2) {
      return 'Two'
    } else if (number === 3) {
      return 'Three'
    } else if (number === 4) {
      return 'Four'
    } else if (number === 5) {
      return 'Five'
    } else if (number === 6) {
      return 'Six'
    } else if (number === 7) {
      return 'Seven'
    } else if (number === 8) {
      return 'Eight'
    } else if (number === 9) {
      return 'Nine'
    }
}


// ohters:

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    }
}


// Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.


// My variant: 

function updateLight(current) {
    if (current == 'green') {
      return 'yellow'
    } else if (current == 'yellow') {
      return 'red'
    } if (current == 'red') {
      return 'green'
    }
}


// ohters:

function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
}

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]


// Grasshopper - Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'


// My variant: 

function getGrade (s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3;
    if (x >= 90 && x <= 100) {
      return 'A'
    } else if (x >= 80 && x < 90) {
      return 'B'
    } else if (x >= 70 && x < 80) {
      return 'C'
    } else if (x >= 60 && x < 70) {
      return 'D'
    } else if (x >= 0 && x < 60) {
      return 'F'
    }
}


// ohters:

function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
}

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
}

// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite

// My variant: 

function opposite(number) {
    return -1 * number
}


// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// My variant: 

function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

// ohters:

function generateLink(user) {
  return 'http://www.codewars.com/users/' + encodeURIComponent(user);
}

function generateLink(user) {
  let link = 'http://www.codewars.com/users/';
  const value = encodeURIComponent(user);
  return link + value;
}


function generateLink(user) {var url = 'http://www.codewars.com/users/';
  var Obj = {
    ' ':'%20',
    ';':'%3B',
    "`":'%60',
    '"':'%22',
    '/':'%2F',
    '+':'%2B',
    ',':'%2C',
    '^':'%5E',
    '|':'%7C',
    '?':'%3F',
    '#':'%23',
    '$':'%24',
    '&':'%26',
    '}':'%7D',
    ':':'%3A',
    '{':'%7B',
    ']':'%5D',
    '[':'%5B',
    '@':'%40',
    '<':'%3C',
    '>':'%3E',
  }
  user = user.replace(/%/g,'%25');
  for(var i = 0; i < user.length; i++){
    for(var key in Obj){
      if(user[i] == key){user = user.replace(user[i],Obj[key]);}
    }
  }
  return url + user;
}

// Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// My variant: 

const quarterOf = (month) => {
  if (month == 1 || month == 2 || month == 3) {
    return 1;
  } else if (month == 4 || month == 5 || month == 6) {
    return 2;
  } else if (month == 7 || month == 8 || month == 9) {
    return 3;
  } else if (month == 10 || month == 11 || month == 12) {
    return 4;
  }
}


// ohters:

const quarterOf = m => Math.ceil(m/3);

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}

const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
}


// Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// My variant: 

function hoopCount (n) {
  if (n >= 10) {
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }   
}

// ohters:

function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

function hoopCount (n) {
  const HOPS_LIMIT = 10
  return n >= HOPS_LIMIT
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
}

// Grasshopper - Check for factor
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.


// My variant: 

function checkForFactor (base, factor) {
  const x = base % factor;
  if (x == 0) {
    return true
  } else {
    return false
  }
}

// ohters:

function checkForFactor (base, factor) {
  return base % factor === 0;
}

const checkForFactor = (base, factor) => base % factor === 0;

function checkForFactor (base, factor) {
  return !(base%factor);
}

checkForFactor = (b, f) => !(b % f) && f != 0;


// N-th Power

// This kata is from check py.checkio.org
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.


// My variant: 

function index(array, n){
  const x = array[n];
  const y = Math.pow(x, n);
  if (array.length <= n) {
    return -1
  } else { 
    return y
  }
}


// ohters:

const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

function index(array, n){
  //your code here
  return array[n] ** n || -1;
}

function index(array, n){
  return array[n] ? Math.pow(array[n], n) : -1 
}


// Function 2 - squaring an argument
// Now you have to write a function that takes an argument and returns the square of it.

// My variant: 

function square (n) {
  const x = Math.pow(n, 2);
  return x
}

// ohters:

const square = (n) => n * n;

var square = function(a){
  return a*a;
}

function square(num){
  return num * num;
}



// Training JS #7: if..else and ternary operator


// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90


// My variant: 

function saleHotdogs(n){
  if (n < 5) {
    return n * 100
  } else if (n < 10) {
    return n * 95
  } else if (n >= 10) {
    return n * 90
  }
}


// Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)


// My variant: 

function hero(bullets, dragons){
  const dbull = dragons * 2;
  if (bullets >= dbull) {
    return true
  } else {
    return false
  }
}

// ohters:

function hero(bullets, dragons){
  return bullets >= dragons * 2
}


function hero(bullets, dragons){
  //Get Coding!
  return (bullets / 2 >= dragons) ? true : false;
}

// Transportation on vacation
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// My variant: 

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50
  } else if (d >= 3) {
    return d * 40 - 20
  } else {
    return d * 40
  }
}

// ohters:

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

function rentalCarCost(d) {
  var amount,
    dailyCharge = 40;
  if(d >= 7) {
    amount = (dailyCharge * d) - 50;
  } else if (d >= 3) {
    amount = (dailyCharge * d) - 20;
  } else {
    amount = dailyCharge * d;
  }
  return amount;
}


// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// My variant: 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const ats = args.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
    return ats[0]
  }
}

// ohters:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(this,args);
  }
}


// Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

// My variant: 

function twoSort(s) {
  let x = s.sort();
  const y = x[0];
  let z = y.split('');
  let ats = z.join('***');
  return ats
}

// ohters:

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}


twoSort = s => s.sort()[0].split('').join('***')

function twoSort(q) {
  let a = q.sort(); 
  a = a[0].replace(/(.)(?=.{1,}$)/g, '$1***');
 return a;
}

function twoSort(array) {
  return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}

Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F


// My variant: 

function abbrevName(name){

  let x = name.split(' ');
  let u = x[0];
  let r = x[1];
  let n = u[0];
  let f = r[0];
  let nn = n.toUpperCase();
  let ff = f.toUpperCase();
  const ats = `${nn}.${ff}`;
  return ats
}


// ohters:

function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

// Twice as old

// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


// My variant: 

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const n = Math.abs(dadYearsOld - 2 * sonYearsOld); 
  return n
}


// ohters:

function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // dadYearsOld must be sonYearsOld * 2
  // dadYearsOld when son is 0 is dadYearsOld - sonYearsOld
  let difference = dadYearsOld - sonYearsOld;
  return Math.abs(dadYearsOld - difference*2);
}

Calculate average
Write a function which calculates the average of the numbers in a given list.


// My variant: 

function findAverage(array) {
  const count = array.length;
  
  if (count == 0) {
    return 0
  } else {
    let total = 0;
  for (let i = 0; i < array.length; i = i + 1) {
    total = total + array[i];
  }
    const count = array.length;
    const avg = total / count;
    return avg
  }
}


// ohters:

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;


// Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).


// My variant: 

function isTriangle(a,b,c)
{
  if ((a + b) > c && c >= a && c >= b) {
    return true
  } else if ((a + c) > b && b >= a && b >= c) {
    return true
  } else if ((b + c) > a && a >= b && a >= c) {
    return true
  } else {
    return false
  }
}

// ohters:

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

function isTriangle(a,b,c) {
  var sides = [a, b, c].sort();
  return (sides[0] + sides[1] > sides[2]);
}

const isTriangle = (a$,b$,c$) => a$ + b$ > c$ && a$ + c$ > b$ && b$ + c$ > a$;

// Name Shuffler
// Write a function that returns a string in which firstname is swapped with last name.

// My variant: 

function nameShuffler(str){
  let x = str.split(' ');
  let y = x[0];
  let z = x[1];
  const ats = `${z} ${y}`;
  return ats
}

// ohters:

function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}

const nameShuffler = str => str.split(' ').reverse().join(' ');

// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.


// My variant: 

function noSpace(x){
  let y = x.split(' ');
  let ats = y.join('');
  return ats
}

// ohters:

function noSpace(x){
  return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

const noSpace = x => x.replace(/ /g, "");

const noSpace=x=>x.split(" ").join("");



// Cat years, Dog years
// Kata Task
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// My variant: 

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let a = humanYears;
  if (a == 1) {
    return [1,15,15]
  } else if (a == 2) {
    return [2,24,24]
  } else if (a > 2) {
    const b = 15 + 9 + (a - 2) * 4;
    const c = 15 + 9 + (a - 2) * 5;
    return [a,b,c]
  }
}

// ohters:

var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];

var humanYearsCatYearsDogYears = x => x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x , 24 + ( 4 * (x-2)), 24 + (5 * (x-2))];


// Is it even?

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.


// My variant: 

function testEven(n) {
  const x = n % 2;
  if (x === 0) {
    return true
  } else {
    return false
  }
}

// ohters:

function testEven(n) {
  return n%2===0;
}

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

function testEven(n){
  return !(n % 2);
}

const testEven = n => !(n % 2);

// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

// My variant: 

function stringToArray(string){

	let nstring = string.split(' ');
  return nstring
}

// ohters:

function stringToArray(string){
  return string.split(' ');
}

const stringToArray = string => string.split(' ');

stringToArray=(s)=>s.split(' ')



// A wolf in sheep's clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.


// My variant: 

function warnTheSheep(queue) {
  const rev = queue.reverse()
  if (rev[0] == 'wolf') {
    return "Pls go away and stop eating my sheep"
  } else {
    let w = rev.indexOf('wolf');
    return `Oi! Sheep number ${w}! You are about to be eaten by a wolf!`
  }
}

// ohters:

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}

function warnTheSheep(queue) {
  let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
  if (sheepIndex === 0)
      return 'Pls go away and stop eating my sheep';
  return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}

const warnTheSheep = queue =>
  (val => val ? `Oi! Sheep number ${val}! You are about to be eaten by a wolf!` : `Pls go away and stop eating my sheep`)
  (queue.reverse().indexOf('wolf'));

// Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


// My variant: 
// Sum Numbers
function sum (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    total = total + numbers[i];
  }
    return total  
};


// ohters:

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Sum Numbers
sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};

const sum = n => n.reduce((a,b) => a+b, 0);

const sum = num => num.reduce((acc, curr)=> acc+curr, 0);

const sum = numbers => numbers.reduce((sum, number) => sum += number, 0);


// How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My variant: 

function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for  (let i = 0; i < classPoints.length; i = i + 1) {
    total = total + classPoints[i]; 
  }
  const count = classPoints.length;
  const average = total / count;
  
  if (yourPoints >= average) {
    return true
  } else {
    return false
  }
}


// ohters:

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
  const classAverage = classPointsSum / classPoints.length;
  const isBetter = yourPoints > classAverage;
  return isBetter;
}

const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((pre, val) => pre + val, yourPoints) / (classPoints.length + 1);

// 5 without numbers !!
// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

// My variant: 

function unusualFive() {
  const at = 'abcde';
  const ats = at.length;
  
  return ats
}


// ohters:

function unusualFive() {
  return 'fucku'.length
}

const unusualFive = () =>
  Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

unusualFive=_=>'     '.length



// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// My variant: 
function combat(health, damage) {
  const ats = health - damage;
  if (health > damage) {
    return ats
  } else {
    return 0
  }
}


// ohters:

function combat(health, damage) {
  return health < damage ? 0 : health - damage
}

const combat = (health, damage) => Math.max(0, health - damage);

function combat(health, damage) {
  if (isNaN(health) || isNaN(damage)) return;
  return health > damage ? health - damage : 0;
}


// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".


// My variant: 

function arithmetic(a, b, operator){
  if (operator == "add") {
    return a + b
  } else if (operator == "subtract") {
    return a - b
  } else if (operator == "multiply") {
    return a * b
  } else if (operator == "divide") {
    return a / b
  }
}


// ohters:

function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

function arithmetic(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}

const arithmetic = (a, b, operator) => {
  return  ( 
    operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
  )
}

function arithmetic(a, b, op){
  return ({
    'm': (a, b) => a*b,
    'd': (a, b) => a/b,
    'a': (a, b) => a+b,
    's': (a, b) => a-b
  })[op[0]](a, b);
}

function arithmetic(a, b, operator){
  return ops[operator](a, b);
}

const ops = {
  "add"      : (a, b) => a + b,
  "subtract" : (a, b) => a - b,
  "multiply" : (a, b) => a * b,
  "divide"   : (a, b) => a / b
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


// My variant: 

function remove (string) {
  let kord = string.length - 1;
  let x = string[kord]
  if (x != '!') {
    return string
  } else {
    return string.slice(0, kord)
  }
}

// ohters:
const remove = s => s.replace(/!$/, '');

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

function remove(s){
  return s.replace( /!$/, '') 
}

const remove = s =>
  s.replace(/!$/, ``);

//RegExp is power
var remove = s => s.replace(/!$/, '')

// Reversing Words in a String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.


// My variant: 

function reverse(string){
  let x = string.split(' ');
  let y = x.reverse();
  let z = y.join(' ');
  return z
}

// ohters:

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

reverse = s => s.split(' ').reverse().join(' ')

const reverse = str => str.split(' ').reverse().join(' ');

Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.

// My variant: 

function isPalindrome(x) {
  const e = x.toUpperCase()
  let y = e.split('');
  let z = y.reverse();
  let j = z.join('');
  if (e == j) {
    return true
  } else {
    return false
  }
}


// ohters:

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();









