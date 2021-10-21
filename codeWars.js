
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
// String ends with? (3/7/2021).

function solution(str, ending){
 
    return str.endsWith(ending)
    }

    // Very simple, given a number, find its opposite.

    function opposite(number) {
        return -(number)
      }

    //   Write a function called repeat_str which repeats the given string src exactly count times.

    function repeatStr (n, s) {
        return s.repeat(n);
      }

//       Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
  let small = args.sort(function(a, b) {
          return a - b; } )
  
  return small.shift()
    }
  }


//  March 9 Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

//  Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
 
//  Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.
 
//  Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
function converter (mpg) {
    let kmp = 1 * 1.609344 
    let liter = 1 * 4.54609188
    let arr = kmp/liter*mpg
    return Number(arr.toFixed(2))
    
  }
//   Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

// #Examples

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

var min = function(list){
    list.sort((a,b)=> (a-b));
    return list[0];
}

var max = function(list){
    list.sort((a,b) => b-a)
    return list[0]
}
// March 14th
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  let waterPerHour = Math.floor(time / 2)
  return waterPerHour;
}

// Your task is to create a function that does four basic mathematical operations.***

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples

// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7
function basicOp(operation, value1, value2)
{
  // Code
  if( operation == "+") {
    return value1 + value2
  }
  if( operation == "-") {
    return value1 - value2
  }
  if( operation == "*") {
    return value1 * value2
  }
  if( operation == "/") {
    return value1 / value2
  }
}
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  if(n%x ===0 && n%y === 0){
    return true
  }else {return false}
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result..
function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2).sort((a,b)=>a-b).reduce((unique,item)=> unique.includes(item)? unique : [...unique,item],[])
  let mySet = new Set(merged)
 return merged
 }

//  3/18/2021

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return Number(x.reduce((a,b)=>(Number(a)+Number(b))))

}
// 3/19/2021
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
  

  function bmi(weight, height) {
    let b = weight / height**2;
    return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese';
  }
  // Given an array of integers.

  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
  
  // If the input array is empty or null, return an empty array.

  function countPositivesSumNegatives(input) {
    return !input || input.length <1 ? [] : [
      input.filter(n => n > 0).length,
      input.filter(n => n < 0).reduce((a, b) => a + b)
    ];
  }
  
//March 23

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
  return a.map(num => {
    return String.fromCharCode(num) === 'a' ? 'a'
         : String.fromCharCode(num) === 'e' ? 'e'
         : String.fromCharCode(num) === 'i' ? 'i'
         : String.fromCharCode(num) === 'o' ? 'o'
         : String.fromCharCode(num) === 'u' ? 'u'
         : num;
  });

}

// 3/29/2021
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string. The "g" is global so that it will find every individual occurance of !. gi would make it case sensative

function removeExclamationMarks(str) {
   
  return str.replace(/!/g,"");
}
// April 3 codewars
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//April 7 2020
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

//why it works: we are putting Math floor to get whole number. Then we are saying if it is even, then take the two middle numbers, if it is odd then just take the middle element
function getMiddle(s)

  {
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}




//April 12th
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

//April 20.
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.


function switcher(x){
  let alphabet = {
    29 : ' ',
    28 : '?',
    27 : '!',
    26 : 'a',
    25 : 'b',
    24 : 'c',
    23 : 'd',
    22 : 'e',
    21 : 'f',
    20 : 'g',
    19 : 'h',
    18 : 'i',
    17 : 'j',
    16 : 'k',
    15 : 'l',
    14 : 'm',
    13 : 'n',
    12 : 'o', 
    11 : 'p',
    10 : 'q',
    9  : 'r',
    8 : 's',
    7 : 't',
    6 : 'u',
    5 : 'v',
    4 : 'w',
    3 : 'x',
    2 : 'y',
    1 : 'z'
};
  return x.map((el) => alphabet[el]).join('');
}

// 4/22/21 (1 of 5 strings)
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a valid integer number.

// X will be either a number or a string. Both are valid. 

function apple(x){
  if (Math.pow(x,2) >=1000){
    return "It's hotter than the sun!!"
  }else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
  }

  // OR
  function apple(x){
    return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }
  //April 25th (2 of 5 strings)
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F
return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');

//April 26 (3 of 5 strings)
// The wide mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
function mouthSize(animal) {
  if(animal.toLowerCase() == "alligator"){
    return "small"
  }else{
    return "wide"
  }
}
// OR

function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide"
 }
// (4 of 5 strings)
//  Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

// (5 of 5 String)
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.
function check(a,x){
  return a.includes(x);
};

//April 29 (Array 1 of 5)
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
function smallEnough(arr, limit){
  return arr.every(arr => arr <= limit) 
  }

  // or
  function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

// (Array 2 of 5)
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:
function getEvenNumbers(numArray){
  return numArray.filter(x=> x%2 == 0)
}
// (Array 3 of 5)
// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
function oddOrEven(arr) {
  return arr.reduce((a,b)=> a+b,0)%2 ==0 ? "even" : "odd"
   }
  
   
  //  May 2nd (Array 4 of 5)
  // Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

  // For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
  
  const quarterOf = (month) => {
    return (month <=3 ? 1: month <=6 ? 2 : month<=9 ? 3: month>9 ? 4: "NAN")
    
  }

  // or
  const quarterOf = m => Math.ceil(m/3);

  // May 3 (5 of 5 array)
//   Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false.
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true
function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}
// May 7th


//May 8th

// Questions to practice:

// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const arr = [1, 2, 3, 4] 

function mult(arr){

return arr.map((a,b)=> a*b

)}
console.log(mult(arr))

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

let arr = [.5, 6, 3, 45, 24]

function diffOfAges (arr) {
  let youngest = arr.sort((a,b)=> a-b)
  let oldest = arr.sort((a,b)=> b-a)
  let difference = oldest - youngest
  return [youngest,oldest,difference]
}



// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
function sumSansHighLow(arr) {
const rmHighLow = arr.sort((a,b)=> a-b).pop().shift()
const sum = rmHighLow.map((a,b)=> a+b)
return sum
}
// May 13th 
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"

// Notes:

//     If either input is an empty string, consider it as zero.

function sumStr(a,b) {
  let sum = Number(a) + Number(b)
  return sum.toString()
  }

  // or

  function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

  // Number two for 5/13

//   Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here
// Examples

// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3
function getRealFloor(n) {
  if(n >= 14){
    return n-2 
  }else if(n == 1 || n == 0) {
    return 0   
  }else if(n < 0){
    return n
    }else if(n<13){
      return n-1
    }

else{
 return n-1  }

//  or

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// May 14th

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'

function greet (name, owner) {
  if(name == owner){
    return "Hello boss"
  }else{
    return "Hello guest"
  }
 }

//  or 
function greet (name, owner) {
  return name == owner ? "Hello boss" : "Hello guest"
 }
 

//  Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.

// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort()
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(f1, f2){
  return (f1%2 ==0 && f2%2 !==0) || (f1%2 !==0 && f2%2 ==0) ? true : false
}

// or

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

//May 15th
// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task

// Given an integral number, determine if it's a square number:

//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples

// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}

// or
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

// May 18th (String 1 for due date may25th)
// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(" ")
}

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"



function calculate(str) {
  return eval(str.split("plus").join("+").split("minus").join("-")).toString();

}

// or

function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}


// May21st (String 2 for due date may25th)
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// May21st (String 3 for due date may25th)
// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

// May24st (String 4 for due date may25th)

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  var diemvoweledStr = str.replace(/[aeiou]/gi,"");
  return diemvoweledStr;
}

// or 

function disemvowel(string) {

  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  };
  return result;
};

// May24st (String 5 for due date may25th)
// Description

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

var stringToNumber = function(str){
  return Number(str)
 }

// May24st (String 6 for due date may25th)
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
 
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}
// June 19th

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:

// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.




function nbYear(p0, percent, aug, p) {
  var year = 0;
  while (p0 < p) {
    p0 += (p0 * (percent/100)) + aug;
    year++;
  }
  return year;
}


//June 28th 

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  
  var vowelCount = str.match(/[aeiou]/gi)
  return vowelCount === null ? 0 : vowelCount.length
  
}


// or 

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

// or

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }
// July 3rd 2021

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

// or
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// Fourth of July

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"


function likes(names) {
  if (names.length < 1){
    return "no one likes this"
  }else if (names.length == 1) {
    return `${names} likes this`
    
  }else if (names.length >1 && names.length <3){
    return `${names[0]} and ${names[1]} like this`
    
  }else if (names.length >2 && names.length <4) {
  return `${names[0]}, ${names[1]} and ${names[2]} like this`
  
  }else{
     return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
  }
}

// or

function likes(names) {
  switch(names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//second July 4th problem

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return Number(('' + num).split('').map(a => (a * a)).join(''));
    }

    //July 6th 

//     If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//     Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number){
  var sum = 0;
  for (let i=1; i < number; i++){
  if (i%3 == 0 || i%5 == 0){
    sum+=i
  
    
    
  }}
 return sum 
}
//Stand up

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbs){
  // Need to loop through each element in array and sqaure it.
    
    return numbs.map(a => a*a).reduce((a,b)=> a+b, 0)
    //add each squared element and return the Sum
    
    
    
  }
  
  // squareSum([1,2,3]) "15"
  // squareSum([1,2]) "5"

  or

  function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

  //7/8/21
  //Please create a function that determines whether or not a word is a palindrome. You must make each letter lower case before doing the comparison, but we now exist in a world where .toLowerCase() only works on an indiviual letter...


//word will always be a string. Always have a word. No special characters 

function isWordPalindrome(str) {

  //make all letters lowercase 
  //reverse the word and see if the new word is equal to old word
  newStr = str.split("").map(x => x.toLowerCase()).reverse().join("")
   str = str.split("").map(x => x.toLowerCase()).join("")
  
  
  // if (str == newStr){
  //   return `The word ${str} is a Palindrome`
  // }else{
  //   return `The word ${str} is NOT a Palindrome`
  // }
  
  return ((str == newStr)? `The word ${str} is a Palindrome`: `The word ${str} is NOT a Palindrome`)
  
  
  //If equal the result would be it is a palindrome
  
  //if not equal the resutl is not a  palindrome
  
  
  }
  
  
  
  
  console.log(isWordPalindrome("mOm"), "The word mom is a Palindrome")
  console.log(isWordPalindrome("rAt"), "The word rat is NOT a Palindrome")
  console.log(isWordPalindrome("Bob"), "The word bob is a Palindrome")
  console.log(isWordPalindrome("BobDSDKsfhhjfs"), )


  // Given two arrays of strings, return the number of times each string of the second array appears in the first array.
// //Case does not matter


function addedArray(arr1, arr2){
  //first we need to iterate through arr 1 and compare each element to array 2.
   return arr2.map(x => arr1.filter(y=> y===x).length)
  
   
  
  
  
  
  //var array = [[1, 2], [3, 4]];
  // var double = x => x * 2;
  // var doubledArray = array.map( subarray => subarray.map( double ));
  
  
  //count the amount of times an element in arr1 appears in arr 2 and put that count into a new array 
  
  // for(let i = 0 ; i > arr1.length ; i++){
  //   for(let j= 0 ; j > arr2; j++){
  //     arr1[i] == arr2[j]
  //   }
  // }
  
  //filter:  words.filter(word => word.length > 6);
    //  arr1.map()
    //map(function callbackFn(element, index) { ... })
  
  }
  
  
  //array1.map(x => x * 2);
  
  console.log(addedArray(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']))
  
  
  Example
  array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
  array2 = ['abc', 'cde', 'uap']
  
  Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
  Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
  Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);
  

  //7/9/2021

//   Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(arr){
  return arr.map(x=> Number(x)).reduce((a,b)=> a+b)
  }

  //7/10/2021

//   Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
function findShort(str){
  return str.split(" ").map(x=> x.length).sort((a,b)=> a-b).shift()
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// //Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

console.log(descendingOrder(12434367))
// Please make sure everyone at your table understands reduce before you start! Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero). Examples: Input: [0] Output: "even" Input: [0, 1, 4] Output: "odd" Input: [0, -1, -5] Output: "even"


// Params 

//always will have an array. if empty, treat as a 0
//whole numbers, both negative and positive

// Return 

//result will be string of "odd" or "even"
//determine if the SUM is odd or even number
// Examples

console.log(sumOddOrEven([1,2,3]), 6, "even")
console.log(sumOddOrEven([1,2,3,1]), 7, "odd")
console.log(sumOddOrEven([1,2,3,-1]), 5, "odd")
console.log(sumOddOrEven([]), 0, "even")
// Pseudocode

function sumOddOrEven (arr) {
//obtain the sum of the array 
 let sum = arr.reduce((a,c)=>a+c,0) 
// confirm if the sum is odd or even
return (sum%2 == 0) ? "even":"odd"
//return string of "even" or "odd"


//_____________________________________________
// Remove the spaces from the string, then return the resultant string. One solution must use filter!

let x = 'Hello World'
let y = 'Remove the spaces'

//Answer No filter
function RemoveSpaces (str) {
  return str.replace(/ /g, '') //Replaces all
  //str.replace(' ', '') //Replaces only the first space
}
console.log(RemoveSpaces(x))
console.log(RemoveSpaces(y))

console.log('\nWith Filter')
//With Filter
function RemoveSpacesWithFilter (str) {
  return str.split('').filter(word => word !== ' ').join('')
}
console.log(RemoveSpacesWithFilter(x))
console.log(RemoveSpacesWithFilter(y))

console.log('\nWith Iterator')
function RemoveSpacesWithIterator (str) {
  let ans = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      ans += str[i]
    }
  }
  return ans
}
console.log(RemoveSpacesWithIterator(y))

//Daily challenge 

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


function solve (str) {
  return [...str].filter(letter => letter === letter.toUpperCase()).length > str.length / 2 ?
    str.toUpperCase() :
    str.toLowerCase()
}

//
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

function repeats(arr){
  return arr.filter(x => arr.indexOf(x) ===arr.lastIndexOf(x)).reduce((a,c)=> a+c,0)
 };

 //7/12/21

//  Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

//Create a function that returns the capitilization of a name. No Arrays, No REGEX!
//leon ~> Leon
//bob ~> Bob
//John ~> John

// always strings. no empty strings. One name. 
//no arrays and regex 
function capitilization(str){
  //isolate the first letter in our string and caplitalize 
  return str.slice(0,1).toUpperCase() +
   str.slice(1).toLowerCase()
  
  
  
   
  //look at the remainding letters are all lower case. 
  
  //return string with proper capitilization
  
  
  
  }
  
  console.log(capitilization("sAM"), "Sam")
  // console.log("sam"), "Sam"
  
  const cap = (str) => {
    return str
  
  
  }
  console.log(cap('jIm'))


  // Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"



// truncate("I would like one job plz", 10), "I would lik…"
// truncate("I would like one job plz", 30), "I would like one job plz"

function truncate (str, maxlength) {
  //need to check to see if string is less than max length or not
  // if (str.length <= maxlength) {
  //   return str
  // }else if (str.length > maxlength){
  
  // return str.slice(0,maxlength-1) + "…"
  
  // }
  // if string is less than length we can return the string as is
  return str.length <= maxlength? str : str.slice(0,maxlength-1) + "…" 
  // if string is greater than maxlength, we need to reduce the string to add up to maxlength and return new string with ellipsis
  
  }
  
  console.log(truncate("What I'd like to tell on this topic is:", 20))
  
  // "What I'd like to te…"


  // Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false

// P: will my function only take in a string? Will be different capitalization that I should account for? Will there ever be an empty string?
// R: Am I returning a boolean? 
// E: "I'm ready to interview!" => false
//    "I can't interview yet!" => true
      //"The pizza is ready!" => false
// P:

  //Make a function that takes in a string
  function checkForImposterSyndrome(str) {
    str = str.toLowerCase()
    //check if the string includes "not ready" or "can't interview yet"
    return str.includes("not ready") || str.includes("can't interview yet") 
  }
  
  //if the str has either within it, return tru
  //else return false


console.log(checkForImposterSyndrome("I'm ready to interview!"))
console.log(checkForImposterSyndrome("I can't interview yet!"))
console.log(checkForImposterSyndrome("The pizza is ready"))
console.log( checkForImposterSyndrome("The pizza is NOT ready"))

//7/14/2021

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  return url.replace("http://","").replace("https://","").replace('www.', "").split(".")[0]
}

//7/15/2021

// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => v == v.toUpperCase() ?
      v.toLowerCase() :
      v.toUpperCase())
    .join('');
}

// / Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longString (a,b) {
  const longStr = a+b
  return longStr.split("").sort().filter((v,i,arr) => v!==arr[i-1]).join()
  }
  
  console.log(longString ("xyaabbbccccdefww","xxxxyyyyabklmopq"))
  
  
  const newStr = a.concat(b).split("").sort().filter((v,i,arr) => v!==arr[i-1]).join("")


  or

  const longestPossible = (str1,str2) =>
  [...new Set(str1+str2)].sort().join|


  /* / John has invited some friends. His list is: */

// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.


// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

function sortedNames (s) {
  return s.toUpperCase()
    .split(";")
    .map(name=> name.split(":").reverse())
    .sort()
    .map(name => `(${name[0]}, ${name[1]})`)
    .join("")
  
  }
  
  /* return s.toUpperCase().split(";").map(name=> name.split(":").reverse()).sort().map(name => "("+ name[0]+ ", "+ name[1] + ")").join("") */
  console.log(sortedNames("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

  //Daily Challenge

//   You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}


// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];

// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];
function greetDevelopers(list) {

  return list.map( function( a ) {
                     a.greeting = `Hi ${a.firstName}, what do you like the most about ${a.language}?`;
                     return a;
                    });
  }
//7/19/2021

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
	return [...s].map((e,i)=> e.toUpperCase()+ e.repeat(i).toLowerCase()).join("-")
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length  === str.filter(x => x === 'o').length;
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(x => typeof x == "number");
}

//daily challenge 

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

//7/27/2021

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

function sortArray(arr) {

  let odd = arr.filter(x=> x%2).sort()
  
  return arr.map(x=> x % 2 ? odd.shift(): x )
}
//7/28/2021
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

function twoOldestAges(ages){
  return ages.sort((a,b)=> a-b).slice(-2)
 }
 //7/29/2021
//  Instructions

//  Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//  Example
 
//  Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 

 
var capitals = function (word) {
	let arr = word.split("")
  return arr.filter(x=> x == x.toUpperCase()).map(x=>arr.indexOf(x))
};

//8/2/2021

/* An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
 */
 
function findDeletedNumber(arr, mixArr) {
 
  if (arr < 1){
   return 0
 }else{
   return arr.map((e,i,arr)=> e = mixArr.includes(e)? 0: e).sort().pop()
 
 }
 
 }

//  or

function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a,b) => a + b, 0)
  let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
  return arrSum - mixArrSum
}

// or
function findDeletedNumber(arr, mixArr) {
  return arr.find ((element) => {return !mixArr.includes (element)}) || 0;
}
 //8/4/2021

//  You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

var gimme = function (arr) {

  let middle = [...arr].sort((a,b)=> a-b).slice(1,2)  
   
   return arr.indexOf(middle[0])
   
 
 }

 //daily challenge 8/5

//  Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


function averageLength(arr) {
  const avg = Math.round(arr.join("").length / arr.length)
  return arr.map( e => e[0].repeat(avg) )
}
//8/12/21

/* Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force... */

function vowelCount(str) {
  let count = 0 
  let vowels = ["a","e","i","o","u"]
  for(let char of str.toLowerCase()){
  
  
  if(vowels.includes(char)){
  count++;
  }
  }
  return count
  }
  
    
  
  
  
  console.log(vowelCount("hello how are you? you are doing great"))
  console.log(vowelCount("hello"))
  //8/13

//   Given an array of items, reverse the order.

// No reverse method! Unless that is your brute force first...

function reverseItems(arr){
  let newItems = []
  
  for(let char of arr){
     newItems.unshift(char)
    
  }
  return newItems
  }
  
  console.log(reverseItems(["pan", "door", "milk", "tree", "water"]))

  //8/16/2021
//   Given a phrase, reverse the order of the characters of each word.

// describe("Reverse Words", () => {
//  it("Should reverse words", () => {
//   assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//  });
// });

// No Reverse Method! Unless that is your brute force...

function reverseWords (str){

  return str.split(" ").map(x => x.split("").reduce((a,b)=>b+a)).join(" ")
  
  
  }
  //8/17

//   Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });





//8/19

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

 

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104



var maxProfit = function(prices) {
  let min = Number.MAX_VALUE
  let maxProf = 0;
  
  for(let i=0;i<prices.length;i++){
      if(prices[i]<min){
          min = prices[i];
      }
      if(maxProf<(prices[i] - min)){
          maxProf = prices[i] - min;
      }
  }
  return maxProf;
};

//8/26

// Write function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("") 
}


// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// Task

// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]

// Note

//     min < max
//     step > 0
//     the range does not HAVE to include max (depending on the step)

function generateRange(min, max, step){
  let newArr =[]
  
  for(let i = min; i<=max; i+=step){
    newArr.push(i)
  }
    return newArr
  }
  //8/27/2021

//   The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//9/5/2021
// Write function which will create a string from a list of strings, separated by space.

// Example:

// ["hello", "world"] -> "hello world"



function wordsToSentence(words) {
  return words.join(" ")
}
//9/8/2021

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}

//9/10/2021

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = []
  for(let i =a; i<=b; i++){
 arr.push(i)
}
  return arr
}

//Daily challenge

// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"



const remove = s => s.replace(/!+$/, '');

//second problem

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let pass = x.filter(e=> e=="good").length
  
  return pass >2 ? 'I smell a series!':pass > 0? "Publish!":"Fail!"
  
  }
// 9/14/2021

// LeetCode

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

var runningSum = function(nums) {
    
  let newArr =[]


newArr[0]=nums[0]
for(i=1;i<nums.length;i++){

  newArr[i] = newArr[i - 1] + nums[i];
  }

  return newArr
}

  // 9/15/2021

  // Fizzbuzz recap 

  function fizzBuzz(num) {

    for(let i=1;i <=num; i++){
      if(i%15 == 0){
        console.log("fizzBuzz")
      }else if(i%3 ==0){
        console.log("fizz")

      }else if(i%5 === 0){
        console.log("buzz")
      }else{
        console.log(i) 
      }
    }
   
  }
//

// Daily challenges. Did 6 codewars. One Leet. 

//9/20/2021

// 121. Best Time to Buy and Sell Stock
// Easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
  let min = Number.MAX_VALUE
  let maxProf = 0;
  
  for(let i=0;i<prices.length;i++){
      if(prices[i]<min){
          min = prices[i];
      }
      if(maxProf<(prices[i] - min)){
          maxProf = prices[i] - min;
      }
  }
  return maxProf;
};

//9/21/2021
// Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

//     array - non-empty array of elements of any type;
//     direction - 'left' or 'right' - tells how to loop array;
//     steps - number of steps to loop array (less or equal to array size);

// Examples:

//     loopArr([1, 5, 87, 45, 8, 8], 'left', 2);

// should produce result: [87, 45, 8, 8, 1, 5]

//     loopArr([1, 5, 87, 45, 8, 8], 'right', 2);

// should produce result: [8, 8, 1, 5, 87, 45]

function loopArr(arr, direction, steps) {

  for (let i = 0; i < steps; i++) {
    if (direction === 'right'){
      arr.unshift(arr.pop());
    };
    if (direction === 'left') {
       arr.push(arr.shift());
    };
  }
    return arr;
}


// _----------------------------------
// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Examples(input --> output)

// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false




function isPrime(n) {
  if (n < 2) { return false }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
//9/29/2021
// Leetcode
// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).


var smallerNumbersThanCurrent = function(nums) {
  let newArr = [];
  for(let i = 0; i < nums.length; i++){
      let count = 0; 
      for(let j = 0; j < nums.length; j++){
        if (i === j) continue; 
        if (nums[i] > nums[j]) count++; 
    };
      newArr[i] = count; 
  };
  return newArr; 
};
// 10/3

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"


function longest(s1, s2) {
  let newString = [...new Set(s1+s2)].sort().join("")
 return newString
 
 
 }
 //10/4/2021
//  Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:

//     If D > (the number of digits of N), return all the digits.
//     If D <= 0, return an empty list.

// Examples:

// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

function lastDigit(n, d) {
  if(d<=0){
    return []
  }
    let nArr =[n].toString().split("").slice(-d).map(x=>Number(x))
    
    return nArr
  }
  
   //10/5/2021



//    Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


// function solution(str){

  //using array methods
  //   return str.split("").reverse().join("")
  
  //response#2
  // let reversedStr = []
  // for(let i=0;i<str.length;i++){
  // reversedStr.unshift(str[i])
  
  // }
    
  //   return reversedStr.join("")
  
  // response#3
  let revStr = ''
  for(let i = str.length - 1; i >= 0; i--){
    revStr+=str[i]
    
  }
    return revStr
//10/6/2021
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
  let newStr = ""
  for(let i = 0; i <one.length; i++){
    newStr+=one[i]
  newStr+=two[i]
  newStr+=three[i]
    
  }
  
  return newStr
   }

   //10/8/2021

//    Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

//     array - non-empty array of elements of any type;
//     direction - 'left' or 'right' - tells how to loop array;
//     steps - number of steps to loop array (less or equal to array size);

// Examples:

//     loopArr([1, 5, 87, 45, 8, 8], 'left', 2);

// should produce result: [87, 45, 8, 8, 1, 5]

//     loopArr([1, 5, 87, 45, 8, 8], 'right', 2);

// should produce result: [8, 8, 1, 5, 87, 45]
function loopArr(arr, direction, steps) {

  for (let i = 0; i < steps; i++) {
    if (direction === 'right'){
      arr.unshift(arr.pop());
    };
    if (direction === 'left') {
       arr.push(arr.shift());
    };
  }
    return arr;
}

10/11/2021

unction tripleTrouble(one, two, three){
  let newStr = ""
  for(let i = 0; i <one.length; i++){
    newStr+=one[i]
  newStr+=two[i]
  newStr+=three[i]
    
  }
  
  return newStr
   }

   // 10/13
//    You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
function billboard(name, price = 30){
  let newPrice = 0
  for(let i =0; i <name.length;i++){
    newPrice+=price
    
  }
  return newPrice
  } 

  10/15/2021

//   Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  return array.filter(num=> num%2 == 0).slice(-number)
 }

 //daily challenge 10/17

 // You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function noRepeatSum(arr){ 
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,c)=>a+c,0)

}

console.log(noRepeatSum([4,5,7,5,4,8]), 15)
console.log(noRepeatSum([4,5,3,5,4,8]), 11)
//10/19/2021

// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

function nthSmallest(arr, pos){
  return arr.sort((a,b)=> a-b)[pos-1]
}


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
  return word.toLowerCase().split("").map(x=>word.indexOf(x)== word.lastIndexOf(x) ? "(":")").join("")
}
//10/21/2021
