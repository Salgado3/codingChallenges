Please research the following methods:

Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

_map_
MDN Description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
Arrow Syntax: map((element, index, array) => { ... } )

My Description: .map is an array method that allows you to iterate through all the elements within the array. It does not change the original array, but creates a new array.

How it works: Map works by calling the function provided to each element in the array. The result is a new array with the function calls

Examples:
//double numbers(1)
const numbers = [1,2,4,5,6]

const doubleNums = numbers.map(x => x\*2)
console.log(doubleNums) //[ 2, 4, 8, 10, 12 ]

//square numbers(2)
const nums = [2, 3, 4, 5, 6];
const numsSquared = nums.map(x=> x\*x);
console.log(numsSquared);

//add puncuation(3)
const hello = ["hey", "hi", "holi", "hola"]

const excited = hello.map(x => x+"!")
console.log(excited)

---

_reduce_
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

---

_filter_
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

---

_forEach_
MDN Description: "The forEach() method executes a provided function once for each array element."
Arrow Syntax: forEach((element, index, array) => { ... } )
My Description:

How it works:
The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".
Examples:
add2 (1)
let arr = [1,2,3,4,5]
let addTwo = arr.forEach(function(x){
console.log(x+2)
}) // 3 4 5 6 7

subtract 5(2)
let arr = [1,2,3,4,5]
let addFive = arr.forEach(function(x){
console.log(x-5)
}) // -4 -3 -2 -1 0

---

_sort_
MDN Description: "The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."

My Description: The sort method allows you to sort an array in any order that you chose

How it works: If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

Examples:
ascending order(1)
let arr = [4,12,5,4,1]
let ascending = arr.sort((a,b)=>a-b)
console.log(ascending) //[ 1, 4, 4, 5, 12 ]

decending order(2)
let arr = [4,12,5,4,1]
let decending = arr.sort((a,b)=>b-a)
console.log(decending) //[ 1, 4, 4, 5, 12 ]

---

_slice_
MDN Description:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified."
Syntax:
slice()
slice(start)
slice(start, end)

My Description: Slice allows you to take a portion of an array and produce a new array.

How it works: Slice takes in one or two parameters. The first param. is the start index and the second is the end index. It does not modify the original array

Examples:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

---

_pop_
MDN Description: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array."

My Description: The pop method removes that last element in the array

How it works: Pop removes the last element in an array

Examples:
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

---

_shift_
MDN Description:"The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array."

My Description: Shift removes the first element

How it works: shift removes the first element in an array.

Examples: (MDN)
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

---

_push_
MDN Description: "The push() method adds one or more elements to the end of an array and returns the new length of the array."

My Description: Push is pretty much the opposite of pop. It adds an element to the end of the array

How it works:
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)

Examples:mdn
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports) // ['soccer', 'baseball', 'football', 'swimming']
console.log(total) // 4

---

_unshift_
MDN Description: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."

My Description: the opposite of shift, it adds an element to the beginning of the array

How it works:
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)

Examples:mdn
let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]

---

_includes_
MDN Description: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate."

My Description: Includes method checks to see if there is an element that matches our parameter. If there is a match, it returns true, otherwise it returns false.

How it works:
includes(searchElement)
includes(searchElement, fromIndex)

Examples:
[1, 2, 3].includes(2) // true
[1, 2, 3].includes(4) // false
[1, 2, 3].includes(3, 3) // false
[1, 2, 3].includes(3, -1) // true
[1, 2, NaN].includes(NaN) // true

---

_indexOf_
MDN Description: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

My Description: The indexof method finds the first occurence of the element and returns the index location. If not preset, it returns -1

How it works:
indexOf(searchElement)
indexOf(searchElement, fromIndex)

Examples:
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

---

_every_
MDN Description: "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."

My Description: The Every method checks all elements in an array. if they pass the test implimanted in our function it returns true. If one element does not pass, it returns false

How it works:
The every method executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all elements, every returns true.
// Arrow function
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

Examples:MDN
function isBigEnough(element, index, array) {
return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true

---
