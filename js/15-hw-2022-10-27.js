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











