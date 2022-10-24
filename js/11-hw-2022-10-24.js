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


