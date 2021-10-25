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

function zeroAtEnd (arr) {

    let count = 0; //3
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) arr[count++] = arr[i]; 
        console.log(arr[i], "<-this is arr[i] for loop", `this is the the count-> ${count}`)
    }
    while (count < arr.length) arr[count++] = 0;
    console.log(`while loop count ${count} and arr[count]-> ${arr[count]}`)
    return arr;
    }
    
    
    console.log(zeroAtEnd([1,2,3,0,4,6,0,2]))