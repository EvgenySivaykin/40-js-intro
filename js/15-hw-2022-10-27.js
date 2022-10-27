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





