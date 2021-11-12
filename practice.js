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

var singleNumber = function(nums) {
    
  let map = new Map()
  let singleNum;

for(let i=0;i<nums.length; i++){

      if(map.has(nums[i])){
        map.set(nums[i], 2)
      }else{
  
      map.set(nums[i], 1)
    }


}
nums.map(number => {
  map.get(number) == 1 ? singleNum = number: false
})
  return singleNum
};

console.log(singleNumber( [4,1,2,1,2]))