
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


  hello world