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


// var productExceptSelf = function(nums) {
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




// function fib(n) {
//   let memo = new Map()
// if (n <2){
//   return n
// }

//   if(!memo.has(n)){
//     let result = fib(n-1) + fib(n-2)
//     memo.set(n,result)
//     return result
//   }else {
//     return memo.get(n)
//   }


// }

// var fib = function(n) {
//   let memo = new Map()
//     if(n< 2){
//       return n
//   }
  
//       if(!memo.has(n)){
//         let result = fib(n-1) + fib(n-2)
//         memo.set(n,result)
//         return result
//   }else {
//       return memo.get(n)
//   }
//       console.log(memo)
//   };

// console.log(fib(2), 1)
// console.log(fib(4), 3)

// const anagrams = (s1, s2) => {
//   let map1 = new Map()
//   let map2 = new Map()

// for(let i=0; i <s1.length; i++){
//     if(map1.has(s1[i])) {
//     map1.set(s1[i],map1.get(s1[i])+1)
//     }else {
//         map1.set(s1[i],1)
//       }

// } 
// console.log(map1)
// };

// anagrams('restful', 'fluster');

// const pairSum = (numbers, targetSum) => {
//   let map = {}

// for(let i = 0; i<numbers.length; i++) {
//     let num1 = numbers[i] 
//     let compliment = targetSum - num1
      
//       if(map[compliment]!== undefined) {
//         console.log([i,map[compliment]])
    
//     }
//      map[num1] = i
    
// }

// };



// pairSum([3, 2, 5, 4, 1], 8)

// function bfs (root) {
//   let queue = [ root ]


//   while(queue>0) {
//       let current  = queue.shift()

//       if(current.left!==null) {
//           queue.push(current.left)

//       }
//       if(current.right!==null) {
//         queue.push(current.right)

//     }



//   }


// }





// function meanArrays(arr) {
//   let set = new Set()
//   let meanArr = []
//   let resultArr = []
// for(let i = 0; i<arr.length; i++) {
// let mean = arr[i].reduce((a,c)=> a+c,0)/arr[i].length
//  meanArr.push(mean)

// }

// for(let i = 0; i<arr.length; i++) {
//  if(meanArr.indexOf(meanArr[i])!== meanArr.lastIndexOf(meanArr[i])){
//      set.add([meanArr.indexOf(meanArr[i]),meanArr.lastIndexOf(meanArr[i])])
// }else {
//   set.add(meanArr.indexOf(meanArr[i]))
// }

// }
  
// return set
// }


// console.log(meanArrays([[3,3,4,2], [4,4],[4,0,3,3],[2,3],[3,3,3]]))



// function division(a, k) {
// let hashMap = new Map()
// let count = 0
// //check if we add two elements together can we get 0 from % k
// for(let i = 0 ; i < a.length; i++) {
//        let current = a[i]
//        let compliment = current % k
//     if(hashMap.has()) {

//       count++
//     }else {
//       hashMap.set(current)
//     }



// }




// }

// console.log(division([1,2,3,4,5], 3))

//google
// let number;
// for(var i =0 ; i <5; i++) {
//   number = i;
// setTimeout(function(){
//   console.log(number)},1000)

// }
// console.log(number)



// for(let i =0 ; i <5; i++) {
 
// setTimeout(function(){
//   console.log(i)},1000)

// }

// 1/6/2022
// most frequent char

// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.


//1/8/2022

// remove node

// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const removeNode = (head, targetVal) => {
//   if(head.val === targetVal) return head.next
//          let previous = null
//          let current = head
  
  
//       while(current!==null){
//         if(current.val === targetVal) {
//           prev.next = current.next
//            break;
//          }
//              prev = current
//            current = current.next
//       }
  
//     return head
//   };
  
// 1/12/2022 

// String ends with? (JavaScript)
// ← back to kata solutions
// 55015767,542jhoffner
// countTheShellz12

// function solution(str, ending){
 
// for(let i = 0; i < ending.length; i++) {
//     if(str[str.length-1-i] === ending[ending.length-1-i]){
//            continue
//           }else {return false} 
     
// }

// return true
// }
// 1/14/2022

// const mostFrequentChar = (s) => {
//   let map = new Map() 
//   let max = 0
//   let maxChar
// for( let char of s) {
//    map.has(char) ? map.set(char,map.get(char)+1): map.set(char,1)
// }


// for(let [key,value] of map.entries()) {
//   if(value> max) {
//      max =value
//     maxChar = key
// }

// }

// return maxChar
// };

// console.log(mostFrequentChar('bookeeper'))

// 1/15/2022 building a graph from edge list

// undirected path

// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
// test_00:
// const undirectedPath = (edges, nodeA, nodeB) => {
//   let graph = buildGraph(edges)
//   let stack = [nodeA]
//   let visited = new Set()
  
//   while(stack.length > 0) {
//     let current = stack.pop()
//     if(current === nodeB) return true

// for(let neighbor of graph[current]){
//    if(visited.has(neighbor)){
//           continue;
//        }else{
//        visited.add(neighbor)  
//        stack.push(neighbor)  
//         }

//    }

//   }

// return false
// };


// function buildGraph(edges) {
//  const graph = {} 


// for(let edge of edges) {
//     const [a,b] = edge

// if(!(a in graph)) graph[a] = []  
// if(!(b in graph)) graph[b] = []   
//  graph[a].push(b)
//  graph[b].push(a)
// }
// return graph
// }



// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// console.log(buildGraph(edges)); // -> true

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


// function sellStock(arr) {
//    let profit = 0
//    let min = Infinity

// for(let prices of arr) {
//     if(prices < min) min = prices 
//     if(profit <prices-min) profit = prices-min
// }

// return profit
// }

// console.log(sellStock([7,1,5,3,6,4]),  5)

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

// function minMaxArr(arr) {
//   let sorted = arr.sort((a,b)=>a-b)
//   let resultArr =[]
//   while(arr.length > 0) {
//    if(arr.length > 0) resultArr.push(sorted.pop())
//    if(arr.length > 0) resultArr.push(sorted.shift())
//   }

//  return resultArr
// }

// console.log(minMaxArr([15,11,10,7,12]),[15,7,12,10,11])


// function zerosAtEnd (arr){
//   let i = 0
//   let j = arr.length-1


//   while(i<j){
//   if(arr[j] == 0) {
//    j--
//   }else if(arr[i] !== 0){
//     i++
//   }else {
//    [arr[i],arr[j]] = [ arr[j],arr[i] ]
   
//   }

// }
// return arr
// }

// console.log(zerosAtEnd([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))



// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];


// console.log(grid[0])
// console.log(grid[0].length)

// console.log(grid)
// console.log(grid.length)

// given a grid, find if a string exists on the grid. it must be connected and you can only have neighbors up, down, right, left.




// word: "ABC" => true
// word : "FAD"=> true
// word : "ACE" => false

// function wordSearch(grid, word) {
//     let visited = new Set()
//   for(let r = 0; r < grid.length; r++) {
//    for(let c = 0; c <grid[0].length; c++){
//        if(grid[r][c] === word.charAt(0) && explore(grid,word, r, c, visited, 0)) {

//         return true

//        }

//    }

//   }
//   return false
// }

// function explore(grid,word, r, c, visited, count) {
//   const rowInbounds = 0<= r && r < grid.length
//   const colInbounds = 0<= c && c < grid[0].length
//   if(!rowInbounds || colInbounds) return false

//   let pos = `${r},${c}`
//   if(visited.has(pos)) return false
//   visited.add(pos)
    
//       if(!grid[r][c] !== word.charAt(count)) return false

    
//   explore(grid,word, r, c, visited, count+1)
//   explore(grid,word, r, c, visited, count+1)
//   explore(grid,word, r, c, visited, count+1)
//   explore(grid,word, r, c, visited, count+1)
 
//   return true
// } 

// let grid = [
//   ["A","B","C","D"],
//   ["A","A","F","A"],
//   ["A","B","D","D"],
// ]

// console.log(wordSearch(grid,"ABC"))


// The idea

// Since it's obvious that there will be a lot of repetitive work, such as checking up, down, left, right for lots of characters, we can use recusion to simplify our code.
// Our base case will need to check:

//     are we getting out of boundary? if yes, get out.
//     are we getting a wrong character? If yes, get out.
//     did we find every character from the work? If yes, great, we have found this word.
//     Otherwise keep exploring characters for all directions.

// /**
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function(board, word) {
//     let result = false;
//     var check = function(r, c, i) {
//         if (!result) {
//             if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
//             if (board[r][c] != word[i]) return; // wrong character
//             if (i == word.length - 1) { // got to the end means we found a correct path
//                 result = true;
//                 return;
//             }
//             board[r][c] = null; // mark our path so we dont go back and forth
// 			// try all directions
//             check(r+1,c,i+1)
//             check(r-1,c,i+1)
//             check(r,c+1,i+1)
//             check(r,c-1,i+1)
//             board[r][c] = word[i] // reset our board , very important
//         }
//     }

//     for (let i=0;i<board.length;i++) {
//         for (let j=0;j<board[0].length;j++) {
//             if (board[i][j] == word[0]) {
//                 check(i, j, 0)
//                 if (result) return result;
//             }
//         }
//     }
    
//     return result;
// };


// 1/21/2022

// const anagrams = (s1, s2) => {
//   let map = new Map()

//  for(char of s1) {
//    !map.has(char) ?  map.set(char, 1):  map.set(char, map.get(char)+1)



// }
// return map
// };

// console.log(anagrams('night', 'thing'))


// const rotate = function(nums, k) {
//   k = k % nums.length

// nums.reverse()
//   revNums(nums,0, k-1)
//   revNums(nums, k, nums.length-1)

// return nums

// }

// const revNums = (nums, start, end)=> {
 
//   while(start < end){
//    [nums[start], nums[end]] =  [nums[end], nums[start]]

//   start++
//   end--
// }

// }


// const maxArea = function(height) {
//   let area = 0, left = 0, right = height.length-1


//  while(left < right) {
//       const tempArea =(right-left)*Math.min(height[left], height[right])

//     height[left] <= height[right] ? left++ : right --    

//    area = Math.max(tempArea, area)


//  }
//   return area
// };





// const numIdenticalPairs = function(nums) {
//   const map = {}
//   let count = 0
  
//   for (const number of nums) {
//       if (map[number]) {
//           count += map[number];
//           map[number] += 1;
//       } else {
//           map[number] = 1;
//       }
//   }
//   return count
// };
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3



// function mostNum (nums) {
//   let map = new Map()
//   let max = 0
//   let maxKey = 0
//   for(let num of nums) {
//   if(map.has(num)) map.set(num, map.get(num)+1)
  
//   else map.set(num, 1)
  
//   }
//   for(let [key,value] of map.entries()) {
//    if(value > max){ 
//    max = value 
//    maxKey = key
//   }
//    if(value === max) {
//        if(maxKey < key) {
//    max = value 
//    maxKey = key
//     }
//      }
//     }
  
//   return maxKey
//   }
  


// console.log(mostNum([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
// console.log(mostNum([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12) 
// console.log(mostNum([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]),3)



// const runningSum = nums => {
//   nums.reduce((a,c,i,arr) => arr[i] += a)
//   return nums
// }
// var runningSum = function(nums) {
//   for(let i=1;i<nums.length;i++){
//       nums[i]+=nums[i-1]
//   }
//   return nums
// };

// 169. Majority Element 

// function majorityEl (arr) {
// let map = new Map()

// for (let num of arr) {
// if(map.has(num)) map.set(num,map.get(num)+1);
// else map.set(num,1);
// }

// for(let i=0; i < arr.length; i++){
//  return map.get(arr[i]) > arr.length/2 ? arr[i] :false

// }
// }

// console.log(majorityEl([3,2,3]), 3)
// console.log(majorityEl([2,2,1,1,1,2,2]), 2)


// Write a function that takes a list of pin objects, each with a height attribute and an id attribute, and returns a grid layout.  

// 1. The function also takes a number of columns.
// 2. Column ‘height’ is the sum of the heights of the pins already placed in that column.  
// 3. The highest scoring pins, should be placed in the column with the smallest column height.  If there is a tie, insert the pin into the first/leftmost column.  Return a grid layout of the pins.
// 4. The output should be a list of lists

// Input

// pins = [ {'id': 1, 'height':200},
// {'id': 2, 'height':150},
// {'id': 3, 'height':50},
// {'id': 4, 'height':100} ]

// layout(pins, 2)

// Output
// [
//    # This list has the pins for the first column
//    [ {'id': 1, 'height': 200}, 
//      {'id': 4, 'height': 100} ], 
//    # This list has the pins for the second column
//    [ {'id': 2, 'height': 150}, 
//      {'id': 3, 'height': 50} ]
// ]



// function pinterestGrid(pins, colNums) {
//   let resultArr = []
//   let i = 0
//   while(i < colNums ) {
//   resultArr.push([])
//    i++
//   }
  
//   for(let pin of pins) {
//      let {id, height} = pin
//   if(resultArr[0].length === 0){
//     resultArr[0].push({id, height})
//     continue
//   } 
  
  
//   let min = Infinity
//   let minIndex = 0
//   if(resultArr[0].length>0){
  
//   for(let i = 0; i<resultArr.length; i++) {
  
//          let totalHeight = 0
//      for(let obj of resultArr[i]){
//          totalHeight+=obj.height
  
//      }
//       if(totalHeight < min) {
//         min = totalHeight
//         minIndex = i  
//       }
//   }
  
//   }
  
//   resultArr[minIndex].push({id, height})
//   }
  
//   return resultArr
//   }
  
//   console.log(pinterestGrid([ {'id': 1, 'height':200},
//   {'id': 2, 'height':150},
//   {'id': 3, 'height':50},
//   {'id': 4, 'height':100} ], 2))
  

// function vowelShift(str) {
// let vowels = "aeiou"
// let vowelArr = []

// for(let char of str){
// if(vowels.includes(char)) vowelArr.push(char)
// }
// vowelArr.unshift(vowelArr.pop())

// let result = []
// for(let char of str) {
//   if(vowels.includes(char)) result.push(vowelArr.shift())
//   else result.push(char)
// }

// return result.join("")
// }


//  console.log(vowelShift( "codesignal"),"cadosegnil")  

//  ///


//  Simple Text Editor

//  function processData(input) {
//   let lines = input.split("\n");
//   let str = "";
//   let last = [];
  
//   for (var i=1; i <= parseInt(lines[0]); i++) {
//       var command = parseInt(lines[i].split(" ")[0]),
//           args = lines[i].split(" ")[1];

//       switch (command) {
//           case 1:
//               last.push(str);
//               str = str + args;
//               break;
//           case 2:
//               last.push(str);
//               str = str.substring(0, str.length - parseInt(args));
//               break;
//           case 3:
//               console.log(str.charAt(parseInt(args) - 1));
//               break;
//           case 4:
//               str = last.pop();
//               break;
//       }
      
//   }
  
// } 


// let obj ={
// jotNote: "Testing on the 27th to make sure it still works",
// timeStamp: "0:02",
// title: "Do You Know Enough JavaScript To Learn React",
// url: "https://youtu.be/JR9wsVYp8RQ?t=2",}

// for(let keys in obj) {
//   if(keys ==="jotNote") obj[keys] = "hello world"
// }


// console.log(obj)
// 3. Longest Substring Without Repeating Characters
// var lengthOfLongestSubstring = function(s) {
//   const set = new Set();
//   let longest = 0;
//   let i = 0;
//   let j = 0;

//   while (i < s.length && j < s.length) {
//       if (!set.has(s[j])) {
//           set.add(s[j]);
//           longest = Math.max(longest, j - i + 1);
//           j += 1;
//       } else {
//           set.delete(s[i]);
//           i += 1;
//       }
//   }
//   return longest;
// };
// console.log(lengthOfLongestSubstring("pwwkew"),3)
// // console.log(lengthOfLongestSubstring("dvdf"),3)

// let text = "Hello, this is CodeSignal!" 
// let letters = ["e", "i", "h", "l", "o", "s"]


// function oneJobPlease (text, letters) {
//   let textArr = text.split(" ")
//   let count = 0
//  for(let word of textArr) {
//    for(let i = 0; i<word.length; i++) {
//      if(letters.includes(word[i]) || word.charCodeAt(word[i]) <65){
//        console.log(word.charCodeAt(word[i]))
//      }else {
//      count++
//       break
//    }
      
//    }
 
   
//  }
 
//  return textArr.length - count
 
//  }
//  console.log(oneJobPlease(text,letters),2)
// function performActions(actions) {
//   const result = [];
//   const undoStack = [];
//   const redoStack = [];

//   actions.reverse();

//   for (
//     let action = actions.pop();
//     action !== undefined;
//     action = actions.pop()
//   ) {
//     if (action[0] === "INSERT") {
//       result.push(action[1]);
//       undoStack.push(action);
//     } else if (action[0] === "DELETE") {
//       const deletedLetter = result.pop();
//       undoStack.push([action[0], deletedLetter]);
//     } else if (action[0] === "UNDO") {
//       if (undoStack.length) {
//         const undoAction = undoStack.pop();
//         if (undoAction[0] === "INSERT") result.pop();
//         else if (undoAction[0] === "DELETE") result.push(undoAction[1]);
//         redoStack.push(undoAction);
//       }
//     } else if (action[0] === "REDO") {
//       if (redoStack.length) actions.push(redoStack.pop());
//     }
//   }
//   console.log(result.join(""));
//   return result.join("");
// }

// performActions([
//   ["INSERT", "a"],
//   ["INSERT", "b"]
// ]);
// // Output: 'ab';

// performActions([["INSERT", "a"], ["INSERT", "b"], ["UNDO"]]);
// // Output: "a"

// performActions([["INSERT", "a"], ["INSERT", "b"], ["UNDO"], ["REDO"]]);
// // Output: "ab"

// performActions([
//   ["INSERT", "a"],
//   ["INSERT", "b"],
//   ["UNDO"],
//   ["REDO"],
//   ["DELETE"]
// ]);
// // Output: "a"

// performActions([
//   ["INSERT", "a"],
//   ["INSERT", "b"],
//   ["UNDO"],
//   ["REDO"],
//   ["DELETE"],
//   ["UNDO"]
// ]);
// // Output: "ab"

// performActions([
//   ["INSERT", "a"],
//   ["INSERT", "b"],
//   ["UNDO"],
//   ["REDO"],
//   ["REDO"]
// ]);
// const fib = (n, memo = {}) => {
//   if (n === 0 || n === 1) return n;

//   if (n in memo) return memo[n];

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// };

// const fib = (n) => {
 
//   if(n ===0 || n === 1) return n
//       let result = []
//         result[0] = 1
//         result[1] = 1
    
//      for(let i =2; i < n; i++) {
//      result[i] = result[i-1] + result[i-2]
//      console.log(result)
//    }
  
//   return result[n-1]
//   };
  
  
// console.log(fib(1000), 9227465)  
// const graph = {
//   a: ['c', 'b'],
//   b: ['c'],
//   c: [],
//   q: ['r'],
//   r: ['s', 'u', 't'],
//   s: ['t'],
//   t: ['u'],
//   u: []
// };

// const longestPath = (graph) => {
//   let distance = {}
  
//   for(let node in graph) {
//   if(graph[node].length === 0) distance[node] = 0

// }

//   for(let node in graph) {
//    traverse(graph, node, distance)

//  }
//  console.log(...Object.values(distance))
// return Math.max(...Object.values(distance))
// };



// const traverse = (graph, node, distance)=> {
//  if(node in distance) return distance[node]
 
//   let maxPath = 0
//  for(let neighbor of graph[node]) {
//    let attempt = traverse(graph, neighbor, distance)
//    if(attempt > maxPath) maxPath = attempt

//  }
 
//  distance[node] = 1 + maxPath

//  return distance[node]
// }


// console.log(longestPath(graph))



// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

// var exist = function(board, word) {
//   let visited = new Set()
  
//   let count = 0
// for(let r = 0; r < board.length; r++){
// for(let c = 0; c < board[0].length; c++){
 
//    if(traverseBoard(board, r, c, word, visited, count) === true) {
//     count++
//         visited = new Set()
        
//         console.log(count, visited)
//    }
   

// }

// }

// return count === word.length-1 ? true : false
// };


// const traverseBoard = (board, r, c, word, visited, count) => {
//  const rowInbounds = 0 <= r && r < board.length
//  const colInbounds = 0 <=  c && c < board[0].length
//  if(!rowInbounds || !colInbounds) return false


//   // let pos = r +"," + c 
//   // if(visited.has(pos)) return false
//   // visited.add(pos)
 
//   if(board[r][c] !== word[count]) return false
//   if(board[r][c] === word[count]) return true
//      traverseBoard(board, r+1, c, word, visited, count)
//      traverseBoard(board, r-1, c, word, visited, count)
//      traverseBoard(board, r, c+1, word, visited, count)
//      traverseBoard(board, r, c-1, word, visited, count)


// }
// console.log(word[1])
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
// "SEE"
// ))

// console.log(exist(board,word))


// const exist = function(board, word) {
//   const n = board.length, m = board[0].length;
//   if (word.length < 1) return false;

//   const dfs = (i, j, pos) => {
//       if (i === n || i < 0 || j === m || j < 0 || board[i][j] !== word[pos]) return false;
//       if (pos === word.length-1) return true;
//       board[i][j] = "."; // choose this elem so we don't find it again
//       const found = 
//           dfs(i+1,j, pos+1) || // check every direction and see if any of them return a match
//           dfs(i-1,j, pos+1) ||
//           dfs(i,j+1, pos+1) ||
//           dfs(i,j-1, pos+1);

//       board[i][j] = word[pos]; // unchoose element
//       return found;
//   };
  
//   for (let i=0;i<n;i++) {
//       for (let j=0;j<m;j++) {
//           if (board[i][j] === word[0]) {
//               const match = dfs(i,j, 0);
//               if (match) return true;
//           }
//       }
//   }

//   return false; 
// };

// var frequencySort = function(s) {
//   let map = {}
//   let result = []
//   for(let char of s) {
//   if(map[char]) map[char]+=1
//   else map[char] = 1
// }
 
// let sortedMap = Object.keys(map).sort((a,b)=> map[b]-map[a])

//   for(let char of sortedMap){
//      result.push(char.repeat(map[char]))  
     
//   }
// return result.join("")
// };
// console.log(frequencySort("tree"))


// var exist = function(board, word) {
//   if(word.length < 1) return false

// for(let r = 0; r < board.length; r++){
// for(let c = 0; c < board[0].length; c++){

// if(traverseBoard(board, r, c, word, i=0)) return true
//  }
// }

// return false
// };


// const traverseBoard = (board, r, c, word,i) => {
// const rowInbounds = 0 <= r && r < board.length
// const colInbounds = 0 <=  c && c < board[0].length
// if(!rowInbounds || !colInbounds) return false

// if(board[r][c] !== word[i]) return false

// if(i === word.length-1) return true

//  board[r][c] = "-"

// let result =
//    traverseBoard(board, r+1, c, word, i+1)||
//    traverseBoard(board, r-1, c, word, i+1)||
//    traverseBoard(board, r, c+1, word, i+1)||
//    traverseBoard(board, r, c-1, word, i+1)
   
//   board[r][c] = word[i]
//   return result
// };


// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(Object.keys(map1));
// // expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // expected output: 97

// console.log(map1.size);
// // expected output: 3

// map1.delete('b');

// console.log();
// // expected output: 2
// primative

// Numbers, strings, booleans, NAN, undefined, null

// let string = "hi"
//  string+="!"
 


//    let obj = [
//      {"language": "javaScript", "name": "john"},
//      {"language": "C"},
//      {"language": "C"},
//      {"language": "javaScript"}
//     ]
//    let map = new Map()

//    let newObj = { 
//   }
//   for(let key of obj){ //{"language": "javaScript", "name": "john"},
//    if(newObj[key.language]) map.set(key.language, map.get(key.language)+1)
 
//    else map.set(key.language, 1)
//   }
  
   
//    for(let key of obj){ //{"language": "javaScript", "name": "john"},
//     if(newObj[key.language]) newObj[key.language]+1
  
//     else newObj[key.language] = 1
//    }
   
//  console.log(Object.values(newObj))

//  console.log(map.values())


//  let stack = [] // pop() push()
//  let queue = [] // pop() shift()
//2/13/2022
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript/6209e04457240a0049310afa
// function duplicateCount(text){
//   let sorted =text.toLowerCase()
//   let obj = {}
 
  
//   for(let char of sorted){
//     if(obj[char]) obj[char]++
//     else obj[char] = 1
//   }
  
//   let count = 0
//  for(let vals in obj) {
//    if(obj[vals]> 1) count++
//  }
  
//   return count
// }
// 2/20
// function isPangram(string){
//   let map = new Map()
  
//   for(let char of string) {
//     if(!map.has(char)) map.set(char, true)
    
//   }
//   console.log(map.size)
//   return map.size > 25 ? true: false
//   }


//   console.log(isPangram("abcdefghijklmopqrstuvwxyz"))