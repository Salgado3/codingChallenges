
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
// String ends with? (3/7/2021)

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
