
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
{return eval(value1 + operation + value2)}


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