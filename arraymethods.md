Please research the following methods:


Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

*map*
MDN Description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."

My Description: .map is an array method that allows you to iterate through all the elements within the array. It does not change the original array, but creates a new array.

How it works: Map works by calling the function provided to each element in the array. The result is a new array with the function calls

Examples:
//double numbers(1)
const numbers = [1,2,4,5,6]

const doubleNums = numbers.map(x => x*2)
console.log(doubleNums) //[ 2, 4, 8, 10, 12 ]

//square numbers(2)
const nums = [2, 3, 4, 5, 6];
const numsSquared = nums.map(x=> x*x);
console.log(numsSquared);

//add puncuation(3)
const hello = ["hey", "hi", "holi", "hola"]

const excited = hello.map(x => x+"!")
console.log(excited)
______________________________________________________________
*reduce*
MDN Description:

My Description:

How it works:

Examples:

*filter*
MDN Description:

My Description:

How it works:

Examples:

*forEach*
MDN Description:

My Description:

How it works:

Examples:

*sort*
MDN Description:

My Description:

How it works:

Examples:

*slice*
MDN Description:

My Description:

How it works:

Examples:

*pop*
MDN Description:

My Description:

How it works:

Examples:

*shift*
MDN Description:

My Description:

How it works:

Examples:

*push*
MDN Description:

My Description:

How it works:

Examples:

*unshift*
MDN Description:

My Description:

How it works:

Examples:

*includes*
MDN Description:

My Description:

How it works:

Examples:

*indexOf*
MDN Description:

My Description:

How it works:

Examples:

*every*
MDN Description:

My Description:

How it works:

Examples: