Please research the following methods:


Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

*map*
MDN Description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
Arrow Syntax: map((element, index, array) => { ... } )

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
MDN Description: "The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value."
Arrow syntax: reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

My Description: The reduce method allows you to iterate through the elements of the array and produce a single value. (in other words, taking an array and reducing it to a single element)

How it works: "The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second."

Examples:
//sum of number(1)
let arr = [1,2,3,4,5,6,7,8]
let sum = arr.reduce((a,b)=> a+b)
console.log(sum) //36

//difference of numbers(2)
let arr = [23,4,21,12,11,15,65]
let difference = arr.reduce((a,b)=> a-b)
console.log(difference) //-105

//spell the word (3)
let arr = ["h","e","l","l","o"]
let spell = arr.reduce((a,b)=> a+b)
console.log(spell) // hello

______________________________________________________________
*filter*
MDN Description: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
Arrow syntax: filter((element, index, array) => { ... } )

My Description: The filter method allows you to implement tests/functions and allows you to create a new array with the elements that pass the test

How it works: Filter works by checking each element in an array to see if it passes the "test" or paremeters set in our function call. The new array is generated with elements that pass the test.

Examples:
lessThan20 (1)
let arr = [1,2,4,25,67,3]
let lessThanTwenty = arr.filter(x => x<20)
console.log(lessThanTwenty) //[ 1, 2, 4, 3 ]

applestoapples(2)
let arr = ["apple", "apple sauce", "apple juice", "banana"]
let apples = arr.filter(x => x =="apple")
console.log(apples) //Array [ "apple" ]

inbetween(3)
let arr = [221,43,12,18,32,56]
let betweenTwentyoneAndFourty = arr.filter(x => x<40 && x > 21)
console.log(betweenTwentyoneAndFourty) // Array [ 32 ]
______________________________________________________________
*forEach*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________

*sort*
MDN Description:

My Description:

How it works:

Examples:

______________________________________________________________
*slice*
MDN Description:

My Description:

How it works:

Examples:

______________________________________________________________
*pop*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*shift*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*push*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*unshift*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*includes*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*indexOf*
MDN Description:

My Description:

How it works:

Examples:
______________________________________________________________
*every*
MDN Description:

My Description:

How it works:

Examples: