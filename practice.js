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


// function dups(arr) {
//  let map = new Map() 

//  for(let i =0; i<arr.length; i++) {
//   if (map.has(arr[i])) {
//     return true
//   }else {
//     map.set(arr[i], true)
//   }

//  }
//  return false


// }

// // return new Set(arr).size != arr.length
// console.log(dups([1,1,1,3,3,4,3,2,4,2]))
// console.log(dups([1,2,3,4]))
// console.log(dups([1,2,3,1]))

// -------
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// function majorityElement(arr) {

//   let map = new Map()

//   for(let i = 0; i<arr.length; i++){
//     if(map.has(arr[i])){
//       map.set(arr[i], map.get(arr[i])+1)
//     }else{
//       map.set(arr[i], 1)
//     }
   
    
// }
// return [...map.entries()].reduce((a,c)=>c[1]>a[1]? c: a)[0]
// }
// console.log(majorityElement([2,2,1,1,1,2,2]))
// console.log(majorityElement([3,2,3]))


// const maxNumberOfBalloons = text => {
//   let obj = {}, balloonCount = 0;
//   for (let el of text) {
//     obj[el] = (obj[el] || 0) + 1;
//   }
//   while (obj['a'] > 0 && obj['b'] >0 && obj['l']>1 && obj['n']>0 && obj['o']>1) {
//     balloonCount++;
//     obj['a']--;
//     obj['b']--;
//     obj['l'] -= 2;
//     obj['n']--;
//     obj['o'] -= 2;
//   }
//   return balloonCount;
// }


// console.log(maxNumberOfBalloons("nlaebolko"))

// daily pratice Binary Tree

class Node {
constructor(val) {
  this.val = val;
  this.left = null;
  this.right = null;
   }
}


const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

//     a
//    /  \
//   /    \
//  b      c
// / \      \
// d  e      f

a.left = b;
a.right =c;
b.left = d;
b.right = e;
c.right = f;

//BFS

// const breadthFirstPring = (root) => {
// const queue = [ root ];

// while(queue.length >0) {
//   const curr = queue.shift();
//       console.log(curr.val)

//       if(curr.left !== null){
//         queue.push(curr.left)
//       }

//       if(curr.right !== null){
//         queue.push(curr.right)
//       }

// }

// }

// breadthFirstPring(a)



// const  bfs = (root) => {
//       let queue = [root ]
   

//       while(queue.length > 0) {
//             curr = queue.shift()
          
//             if(curr.left){
//               queue.push(curr.left)
//             }

//             if(curr.right){
//               queue.push(curr.right)
//             }
//             console.log(curr.val)
//       }

     


// }

// bfs(a)

// const bfs = (root) => {
//     let queue = [ root ]

//     while(queue.length>0){
//         curr = queue.shift()
       

//         if(curr.left){
//           queue.push(curr.left)
//         }
//         if(curr.right){
//           queue.push(curr.right)
//         }
//         console.log(curr)
//     }


// }

// bfs(a)

// LeetCode 404. Sum of Left Leaves

// var sumOfLeftLeaves = function(root) {
//   let queue = [ root ]
//     let leftSum = 0
//         while(queue.length > 0){
//           let currNode = queue.shift()  
          
//           if(currNode.left){
//             queue.push(currNode.left)
//                 leftSum+=currNode.left.val
//             }

//             if(currNode.right){
//             queue.push(currNode.right)
//             }


// }    


// return leftSum
// };


// sumOfLeftLeaves([3,9,20,null,null,15,7])


// const isSameTree = function(p, q) {
//   const q1 = [];
//   q1.push(p);
  
//   const q2 = [];
//   q2.push(q);
  
//   while (q1.length && q2.length) {
//     const curr1 = q1.shift();
//     const curr2 = q2.shift();
    
//     // checking null
//     if (curr1 === null || curr2 === null) {
//       if (curr1 !== curr2) {
//         return false;
//       } else {
//         continue;
//       }
//     }
    
//     // checking val
//     if (curr1.val !== curr2.val) return false;
    
//     // adding children to queues
//     q1.push(curr1.left, curr1.right);
//     q2.push(curr2.left, curr2.right);
//   }
  
//   if (q1.length || q2.length) {
//     return false;
//   }
  
//   return true;
// };
// // 12/6/2021

// // 206. Reverse Linked List
// // Easy

// // Given the head of a singly linked list, reverse the list, and return the reversed list.

//  /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//   let prev = null
//   let next = null


// while(head !== null){
//   next = head.next
//   head.next = prev
//   prev = head
//   head = next

// }

// return prev
// };

/////////////////////////////

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

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

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// function RansomNote (note, magazine) {

// let magMap = magazine.split(" ")

// let map = new Map()

// for(let i=0; i<magMap.length;i++){
// map.set(magMap[i], map.get(magMap[i]) +1 || 1)

// }

//     let noteLetters = note.split(" ")
// for(let i=0; i<noteLetters.length;i++){
//         if(map.get(noteLetters[i]) >0){
//           map.set(noteLetters[i], map.get(noteLetters[i])-1 )
         
//         }else{
//           return false
//         }
// }
//   return true
// }

// console.log(RansomNote("sit ad est love", magazine),false)
//  console.log(RansomNote("sit ad est sint in in", magazine),true)
//  console.log(RansomNote("sit ad est sint in in in in", magazine),false)

// Euclids algo 

// let gcd = (a,b) => {

// if(!b) {
//   return a
// }

// return gcd(b, a%b)

// }

// console.log(gcd(1680,640))

// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// function twoSum (nums, sum) {
//     let map = new Map() 
//     let resultArr = []

//   for(let i=0; i<nums.length; i++){
//     let target = sum - nums[i]

//     if(!map.has(target)){
//       map.set(nums[i], true)
//     }else{
//         resultArr.push([target,nums[i]])
   
//     }
//   }


// return resultArr

// }



// var twoSum = function(nums, target) {
//   let map = new Map();
  
//   for(let i = 0; i < nums.length; i ++) {
//       if(map.has(target - nums[i])) {
//           return [map.get(target - nums[i]), i];
//       } else {
//           map.set(nums[i], i);
//       }
//   }
// return [];
// };
// console.log(twoSum([1, 2, 2, 3, 4], 4))

// daily challenge


// const productExceptSelf = function(nums) {
//   const res = [ 1 ];

//   for (let i = 1; i < nums.length; i++)
//       res.push( res[i - 1] * nums[i - 1] );

//   let right = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//       res[i] *= right;
//       right *= nums[i];
//   }

//   return res;
// };

// console.log(productExceptSelf([-1,1,0,-3,3]),[0,0,9,0,0])

/// 12/13

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

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


// Euclids algo 

// let gcd = (bigNum, smallNum) => {

// if(!smallNum) {
//   return bigNum
// }

// return gcd(smallNum, bigNum % smallNum)

// }

//12/16/2021


// function fib(n){
//   let arr = [0,1]
//   for(let i = 2; i <= n; i++){
//     arr[i] = arr[i - 2] + arr[i - 1]
//   }
//   return arr[n]
// }
// console.log(fib(2), 1)
// console.log(fib(4), 3)




function fib(n) {
  let memo = new Map
if (n <2){
  return n
}

  if(!memo.has(n)){
    let result = fib(n-1) + fib(n-2)
    memo.set(n,result)
    return result
  }else {
    return memo.get(n)
  }


}

console.log(fib(2), 1)
console.log(fib(4), 3)