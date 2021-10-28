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

