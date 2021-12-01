// function targetSum (nums, target){

//     let pairs = new Map()
    
    
//     for(let i=0; i <nums.length; i++){
    
//     console.log(pairs)
//     let num1 = nums[i]
//     let num2 = target -num1
    
    
//     if(pairs.has(num2)){
//     return [pairs.get(num2), i]
    
//     }
//     pairs.set(i, num1)
    
//     }
    
//     }
    
    
//     console.log(targetSum([2,11,15,7],9))

// function zeroAtEnd (arr) {

//     let count = 0; //3
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) arr[count++] = arr[i]; 
//         console.log(arr[i], "<-this is arr[i] for loop", `this is the the count-> ${count}`)
//     }
//     while (count < arr.length) arr[count++] = 0;
//     console.log(`while loop count ${count} and arr[count]-> ${arr[count]}`)
//     return arr;
//     }
    
    
//     console.log(zeroAtEnd([1,2,3,0,4,6,0,2]))

// let num1 = [[1, 2], [3, 4], [5, ]]
// let num2 = [...num1]
// num1[0][0] = 100
// console.log(num1)
// num1.pop()
// console.log(num2)

// var romanToInt = function(s) {
//     const map =  {
//     "I":1,
//     "V":5,
//     "X":10,
//     "L":50,
//     "C":100,
//     "D":500,
//     "M":1000
//     }
    
//      let result = 0; 
    
//         for (i=0; i < s.length; i++){
//             const cur = map[s[i]]; //map[s[0]] = map[I] = 1
//             const next = map[s[i+1]]; //map[s[0 + 1]] = map[V] = 5
    
//             if (cur < next){
//                 result += next - cur // IV -> 5 - 1 = 4
//                 // 0 += 5 - 1
//                 // 0 += 4
//                 i++
//             } else {
//                 result += cur
//             }
//         }
    
//         return result; 
//     };
    
//     // romanToInt(('XXVII'), 27)
//     // romanToInt(('IV'), 4)
//     console.log(romanToInt(('C'), 100000))

// var minDominoRotations = function(tops, bottoms) {
//     const len = tops.length;

//     const findMinRotations = (swaps, num) => {
//         for (let i = 0; i < len; i++) {
//             if (num !== tops[i] && num !== bottoms[i]) {
//                 return -1;
//             }
//             swaps[0] += num !== tops[i];
//             swaps[1] += num !== bottoms[i];
//             console.log(num !== bottoms[i], `this is swaps 1 for i = ${i}`)
//         }
//         return Math.min(...swaps);
//     };

//     let minSwaps = findMinRotations([0, 0], tops[0]);
    
//     if (minSwaps === -1)
//         minSwaps = findMinRotations([0, 0], bottoms[0]);

//     return minSwaps;
// };

// minDominoRotations([2,1,2,4,2,2],[5,2,6,2,3,2])



// 219. Contains Duplicate II
// Easy

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// var containsNearbyDuplicate = function(nums, k) {
//     let map = new Map()
    
//     for(let i = 0; i <nums.length; i++){
//             let current = nums[i]
//             console.log(map)
//      if( map.has(current) && i - map.get(current)<=k){
//     return true
//     } else{
//             map.set(nums[i], i)}

    
//        } 
    
//     return false
//     };
    
    
//     containsNearbyDuplicate([1,2,3,1,2,3],2)



// function maxCost(cost, labels, dailyCount) {
//     // Write your code here
//     let map = new Map()
//     let maxSum = 0
//     let tempSum = 0
//     let laptopCount = 0
    
//      for(let i =0; i<labels.length;i++){
//          map.set(labels[i],cost[i])
//      }
//     console.log(map)
    
//     for(let i =0; i<labels.length;i++) {
//         if(labels[i] === "legal"){
//             laptopCount++
//             tempSum += map.get(labels[i])
//         }else if(labels[i] === "illegal"){
//             tempSum += map.get(labels[i])
//         }

//             if(laptopCount=dailyCount){
//             maxSum = Math.max(tempSum, maxSum)
//             tempSum = 0
//             laptopCount = 0
//             }
        
        
        
//     }
    
    
//     return maxSum

// }
    
//     console.log(maxCost([2,5,3,11,1], ["legal","illegal", "legal","illegal","legal"], 2))


// var gimme = function (inputArray) {
// console.log(inputArray, `this is array before reassignment`)

// function sort() {
    
//    let sorted = inputArray.sort((a,b)=> a-b)[1]
//    console.log(sorted, `this is sorted after being sorted`)
//    return sorted
   
// }

    
//     return inputArray.indexOf(sort())
   
//    };
//    console.log((gimme([2, 3, 1])))
   
   
//    console.log((gimme([5, 10, 14])))




// var freqAlphabets = function(s) {
//     let map = new Map()
//     let result = ""
  
  
  
//   // //hash map built
//    let alpha= " abcdefghijklmnopqrstuvwxyz"
//   for(let i= 1; i<alpha.length;i++){
//       if(i <=9){
//    map.set(String(i),alpha[i])
//   }else{
//       map.set(i+"#",alpha[i])
//   }
//   }
  
  
//   //iritarating through map and adding to result
//   for(let i= 0; i<s.length;i++){
  
//   if(s[i+2]=="#"){
  
//   result += map.get(s.slice(i,i+3))
//   i+=2;
//   }else {
//      result+=map.get(s[i])
  
  
//   }
    
//   }
  
//  return map
  
//   };

// console.log(freqAlphabets("10#11#12"))


//11/2

// var isValid = function(s) {

//     let stack = []
//     for(let i=0;i<s.length;i++){
//      if(s[i]=="(" || s[i]=="{" || s[i]=="[")   {
         
//          stack.push(s[i])
//      } else {
//          let last = stack.pop()
//     if(!((s[i] =="}" && last =="{")||(s[i] ==")" && last =="(")||(s[i] =="]" && last =="[") )){
//         return false
//     }
         
//      }
    
//     }if(stack.length !== 0){
//         return false}
//        return true
//     };

//     console.log(isValid("()[]{}"))

// var singleNumber = function(nums) {
    
//   let map = new Map()
//   let singleNum;

// for(let i=0;i<nums.length; i++){

//       if(map.has(nums[i])){
//         map.set(nums[i], 2)
//       }else{
  
//       map.set(nums[i], 1)
//     }


// }
// nums.map(number => {
//   map.get(number) == 1 ? singleNum = number: false
// })
//   return map
// };

// console.log(singleNumber( [4,1,2,1,2]))

// 11/12/2021

// function absentVowel(x){
 
//   let map = new Map()
//     map.set("a",0)
//     map.set("e",1)
//     map.set("i",2)
//     map.set("o",3)
//     map.set("u",4)
//   let iterator = map.values()

//   for(let i = 0; i<x.length; i++){
//     map.delete(x[i])
// }
 
 
// return iterator.next().value
//   }
  
//   console.log(absentVowel("John Doe hs seven red pples under his bsket"))

//   function decode(message){

    // let alpha = "abcdefghijklmnopqrstuvwxyz"
    // let reverseAlpha = alpha.split("").reverse().join("")
    
    // let indexArr = [...message].map((x,index,arr)=>alpha.indexOf(x))
    
    // return indexArr.map(x=> reverseAlpha[x]== " "? " ":reverseAlpha[x]).join("")
    
    
    
    // }


    // for (let n = 1; n <= 100; n++) {
    //   let output = "";
    //   if (n % 2 == 0) output += "Fizz";
    //   if (n % 3 == 0) output += "Buzz";
    //   console.log(output || n);
    // }

  //   var addDigits = function(num) {
  //     if (isNaN(num) || num === 0) return 0;
  //     if (num < 10) return num;
  //     return num % 9 === 0 ? 9 : num % 9;
  // };

  //    console.log(addDigits(38))


//   var reverseString = function(s) {
//     let stack = []
// for(let i=s.length-1; i>=0 ;i--) {
// stack.push(s[i])

// }
// return stack
// };


// console.log(reverseString(["h","e","l","l","o"]))


// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


// var reverseString = function(s) {
 
// for(let i =0; i<s.length/2;i++){
// let j = s.length-1

//     temp = s[i]
//       s[i] = s[j-i]
//    s[j-i] = temp
//  }

// return s
// };

// // console.log(reverseString(["h","e","l","l","o"]))
// // console.log(reverseString(["h","e","l","l","o","!"]))
// console.log(reverseString(["h","e"]))




// var isAnagram = function(s, t) {

//   let map = new Map()
  
//   if(s.length!=t.length){
//       return false
//   }
  
  
//   for(let i= 0;i<s.length;i++){
//       if(map.has(s[i])){
       
//         map.set(s[i], map.get(s[i])+1)
//         console.log(map)
//       }

//    map.set(s[i],1)
//   }
  
//   for(let i= 0;i<s.length;i++){
// if(map.get(s[i])==0){
//   map.delete(s[i])
// }

//   if(!map.has(t[i])){
//       return false
//   }else{
   
//     map.set(s[i], map.get(s[i])-1)
//   }
  
//   }
  
//   return true    
//   };


//   // console.log(isAnagram("anagram",
//   // "nagaram"))


//   console.log(isAnagram( "aacc","ccac"))





  // function count (string) {  
  //   let map = new Map() 
  
  // if(string == "")
  // return {}
  
  //   for(let i =0; i<string.length;i++){
  //   if(map.has(string[i])){
  //        map.get(string[i])++
  // }else {
  //   map.set(string[i],1)
  // }
  
  // }
   
  // return map.entries()
  
  // }

  // console.log(count("abadfefdfgd"))

  // 11/26

 

// function maxMin(arr) {

//   let sorted = arr.sort((a,b)=>a-b)
//   let max = sorted[arr.length-1]
//   let min = sorted[0]

// return [max,min]
// }

// console.log(maxMin([1,2,41,43,2,56,23,455]))

// ________________________________________________________________________
/**
* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 
Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", s = "dog dog dog dog"
Output: false

 */

// const wordPattern = function(pattern, str) {
//     const words = str.split(" ");
//     const map = new Map();
    
//     if(words.length !== pattern.length) return false;
//     if(new Set(words).size !== new Set(pattern).size) return false;

//     for(let i = 0; i < pattern.length; i++) {
//         if(map.has(pattern[i]) && 
//            map.get(pattern[i]) !== words[i]) return false;
//         map.set(pattern[i], words[i]);
//     }
//     return true;
// };

// console.log(wordPattern("abba","dog cat dog cat"))
// console.log(wordPattern("abba","dog dog dog dog"))

// console.log(wordPattern("abba","dog cat cat dog fish"))


// for (let n = 1; n <= 100; n++) {
  //   let output = "";
  //   if (n % 2 == 0) output += "Fizz";
  //   if (n % 3 == 0) output += "Buzz";
  //   console.log(output || n);
  // }


//   Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


// function mostStrings(str) {
// let noSpaceStr = str.split(" ").join("")
// let map = new Map()

// for(let i=0;i<noSpaceStr.length; i++){
//     if(map.has(noSpaceStr[i])){
//         map.set(noSpaceStr[i],map.get(noSpaceStr[i])+1) 

//     }else{
//       map.set(noSpaceStr[i],1)
//     }

// }

// return [...map.entries()].reduce((a,c)=>c[1]>a[1]? c: a)[0]
// }

// console.log(mostStrings("hello world"))
// console.log(mostStrings("Welcome to the Jungle and all that jazz"))

// __________________________________

//11/30

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


function dups(arr) {
 let map = new Map() 

 for(let i =0; i<arr.length; i++) {
  if (map.has(arr[i])) {
    return true
  }else {
    map.set(arr[i], true)
  }

 }
 return false


}

// return new Set(arr).size != arr.length
console.log(dups([1,1,1,3,3,4,3,2,4,2]))
console.log(dups([1,2,3,4]))
console.log(dups([1,2,3,1]))