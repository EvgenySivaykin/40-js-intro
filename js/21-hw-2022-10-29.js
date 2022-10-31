// Grasshopper - Basic Function Fixer
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?

// My variant: 
function addFive(num) {
    var total = num + 5;
    return total
}

// ohters:

const addFive = n => n + 5;

function addFive(num) {
    return num += 5;
}

// No Loops 2 - You only need one
// *** No Loops Allowed ***
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
// Looking for more, loop-restrained fun? Check out the other kata in the series:


// My variant: 

function check(a,x){
    if (a.includes(x) == true) {
      return true
    } else {
      return false
    }
};

// ohters:

function check(a,b){
    return a.includes(b);
};

const check = (a,x) => a.includes(x);

check=(a,x)=>a.some(v=>v==x)

check = (a,x) => a.indexOf(x) >= 0


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// My variant: 

function smash (words) {
    let x = words.join(' '); 
    return x
};

// ohters:

// Smash Words
const smash = words => words.join(' ');

// Smash Words
function smash (words) {
    "use strict";
    return words.join(' ');
};

// Smash Words
function smash (words) {
    "use strict";
    return words.join(" ").trim();    
};


// Enumerable Magic - Does My List Include This?
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.


// My variant: 

function include(arr, item){
    if (arr.includes(item) == true) {
      return true
    } else {
      return false
    }
}

// ohters:

function include(arr, item) {
    return arr.indexOf(item) !== -1;
}

var include = (a, i) => a.indexOf(i) > -1;

function include(arr, item){
    return arr.indexOf(item)>-1
}//z.

Convert to Binary
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// My variant: 

function toBinary(n){
    return +n.toString(2)
}

// ohters:

let toBinary = n => +n.toString(2)

toBinary = (n) => parseInt(n.toString(2));

// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

// My variant:

function reverseWords(str){
    let x = str.split(' ');
    let y = x.reverse();
    let ats = y.join(' ');
    
    return ats
}

// ohters:

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

const reverseWords = (str) => str.split(" ").reverse().join(" ");

const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;


// Get Planet Name By ID
// The function is not returning the correct values. Can you figure out why?

// My variant:

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        return name = 'Mercury';
      case 2:
        return name = 'Venus';
      case 3:
        return name = 'Earth';
      case 4:
        return name = 'Mars';
      case 5:
        return name = 'Jupiter';
      case 6:
        return name = 'Saturn';
      case 7:
        return name = 'Uranus';
      case 8:
        return name = 'Neptune';
    } 
}


// ohters:

function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
}

const BODIES = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const getPlanetName = id => BODIES[id];




// Online RPG: player to qualifying stage?
// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
// Otherwise return, False/false (according to the language in use).


// My variant:

function playerRankUp (points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  } else {
    return false
  }
}

// ohters:

function playerRankUp (points){
  return points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}


// Jenny's secret message
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?


// My variant:

function greet(name){
  if (name === "Johnny") {
    return "Hello, my love!"
  } else {
    return "Hello, " + name + "!";
  }
}

// ohters:


// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My variant:

function defineSuit(card) {
  if (card.includes('♣') === true) {
    return 'clubs'
  } else if (card.includes('♦') === true) {
    return 'diamonds'
  } else if (card.includes('♥') === true) {
    return 'hearts'
  } else if (card.includes('♠') === true) {
    return 'spades'
  }
}

// ohters:

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}


function defineSuit(card) {
  return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}

defineSuit=([a,b,c])=>({"♣":'clubs',"♠":'spades',"♦":'diamonds',"♥":'hearts'})[c||b]

defineSuit = c => ({
  '♣': 'clubs',
  '♦': 'diamonds',
  '♥': 'hearts',
  '♠': 'spades'
})[c.slice(-1)]

// USD => CNY
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


// My variant:

function usdcny(usd) {
  let a = usd * 6.75;
  const ats = a.toFixed(2);
  
  return `${ats} Chinese Yuan`
}


// ohters:

usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

function usdcny(usd) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan`
}

const usdcny = (bucks) => (bucks * 6.75).toFixed(2) + ' Chinese Yuan';

// Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


// My variant:

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy'
  } else if (old < 18) {
    return 'drink coke'
  } else if (old < 21) {
    return 'drink beer'
  } else {
    return 'drink whisky'
  }
};

// ohters:

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer'

const peopleWithAgeDrink = (age) => {
  switch (true) {
    case (age >= 21): return 'drink whisky'
    case (age >= 18): return 'drink beer'
    case (age >= 14): return 'drink coke'
    default: return 'drink toddy'
  }
};


UEFA EURO 2016
Finish the uefaEuro2016() function so it return string just like in the examples below:

// My variant:

function uefaEuro2016(teams, scores){
  const a = scores[0];
  const b = scores[1];
  let ta = teams[0];
  let tb = teams[1];
  
  if (a > b) {
    return `At match ${ta} - ${tb}, ${ta} won!`
  } else if (a == b) {
    return `At match ${ta} - ${tb}, teams played draw.`
  } else if (a < b) {
    return `At match ${ta} - ${tb}, ${tb} won!`
  }
}


// ohters:

const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;


function uefaEuro2016(teams, scores){
  return "At match " + teams[0] + " - " + teams[1] + ", " + ((scores[0] > scores[1]) ? teams[0] + " won!" : (scores[0] < scores[1]) ? teams[1] +" won!":  "teams played draw.");
};

function uefaEuro2016(teams, scores){
  const [team1, team2] = teams;
  const [value1, value2] = scores;
  const result = value1 === value2 ? 'teams played draw.' : `${value1 > value2 ? team1 : team2} won!`;
  return `At match ${team1} - ${team2}, ${result}`;
}

// Alan Partridge II - Apple Turnover
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// My variant:

function apple(x){
  const ats = Math.pow(x, 2);
  if (ats > 1000) {
    return 'It\'s hotter than the sun!!'
  } else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
}

// ohters:

function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}

// Surface Area and Volume of a Box
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My variant:

function getSize(width, height, depth) {
  const area = (width * height + width * depth + height * depth) * 2;
  const volume = width * height * depth;
  
  return [area, volume]
}

// ohters:

const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];

const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];

// Hex to Decimal
// Complete the function which converts hex number (given as a string) to a decimal number.


// My variant:

function hexToDec(hexString){
  return parseInt(hexString, 16)
}


// ohters:

const hexToDec = h => parseInt(h, 16);

function hexToDec(hexString){
  let hexVal = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },  clone = hexString.split('').map(x => x.toLowerCase()), isNeg = false;
  if(clone[0] === '-') {
    isNeg = true;
    clone.splice(0,1);
  }
  let output = Number(clone
    .reverse()
    .map((e,i)=> hexVal[e] ? hexVal[e]*Math.pow(16, i) : e*Math.pow(16, i))
    .reduce((a,b) => a+b), 10);
  return isNeg ? output * -1 : output;
}

// Price of Mangoes
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.


// My variant:
function mango(quantity, price){
  const q = (quantity / 3) * 2;
  const ats = price * q;
  
  return ats
}

// ohters:


