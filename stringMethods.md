## Please research the following string methods:

_charAt_
MDN Description: "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string."

My Description: A string method that utilizes the index of an array to create a new array with the UTF-16 (16-bit Unicode Transformation Format)

How it works:
charAt(index)

index
An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.

Examples:
const str = new String( "This is string" )
str.charAt(0) //"T"
str.charAt(1) // "h"
str.charAt(2) // "i"
str.charAt(3) // "s"

---

_charCodeAt_
MDN Description: "The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index."

My Description: This string method returns the number associated with the given element of the string. https://asecuritysite.com/coding/asc2

How it works:
charCodeAt(index)

Parameters

index
An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.

Return value

A number representing the UTF-16 code unit value of the character at the given index. If index is out of range, charCodeAt() returns NaN.

Examples:
'ABC'.charCodeAt(0) // returns 65

const words = "the red sheep jumped over the moon"
const index = 3;
console.log(`The character code ${words.charCodeAt(index)} is equal to ${wrods.charAt(index)}`); // "The character code 101 is equal to e"

---

_concat_
MDN Description: "The concat() method concatenates the string arguments to the calling string and returns a new string. The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

If the arguments are not of the type string, they are converted to string values before concatenating."

My Description: This method allows us to combine strings together.

How it works:
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)

Examples:
let hello = 'Hello, '
console.log(hello.concat('Jimbo', '. Have a nice day.'))
// Hello, Jimbo. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList) // "Hello Venkat!"

"".concat({}) // [object Object]
"".concat([]) // ""
"".concat(null) // "null"
"".concat(true) // "true"
"".concat(4, 5) // "45"

---

_includes_
MDN Description: "The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate."

My Description: The includes string method checks to see if the parameter is in the string. More or less it searches the string to see if what we are looking for is there. If so, returns true, else false.

How it works:
includes(searchString)
includes(searchString, position)

searchString
A string to be searched for within str.
position Optional
The position within the string at which to begin searching for searchString. (Defaults to 0.)

Return value

true if the search string is found anywhere within the given string; otherwise, false if not.

Examples:
'Blue Whale'.includes('blue') // returns false
'Blue Whale'.includes('Blue') // returns True

---

_indexOf_
MDN Description: "The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found."

My Description: The indexOf method finds the first occurrence in a string and returns its index position. If it is not found, it will return -1.

How it works:
indexOf(searchValue)
indexOf(searchValue, fromIndex)
Return value

The index of the first occurrence of searchValue, or -1 if not found.

An empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:

Examples:
const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
count++
position = str.indexOf('e', position + 1)
}

console.log(count) // displays 4

'Blue Whale'.indexOf('Blue') // returns 0
'Blue Whale'.indexOf('Blute') // returns -1
'Blue Whale'.indexOf('Whale', 0) // returns 5
'Blue Whale'.indexOf('Whale', 5) // returns 5
'Blue Whale'.indexOf('Whale', 7) // returns -1
'Blue Whale'.indexOf('') // returns 0
'Blue Whale'.indexOf('', 9) // returns 9
'Blue Whale'.indexOf('', 10) // returns 10
'Blue Whale'.indexOf('', 11) // returns 10

---

_match_
MDN Description:

My Description:

How it works:

Examples:

---

_repeat_
MDN Description:

My Description:

How it works:

Examples:

---

_replace_
MDN Description:

My Description:

How it works:

Examples:

---

_search_
MDN Description:

My Description:

How it works:

Examples:

---

_slice_
MDN Description:

My Description:

How it works:

Examples:

---

_split_
MDN Description:

My Description:

How it works:

Examples:

---

_substr_
MDN Description:

My Description:

How it works:

Examples:

---

_toLowerCase_
MDN Description:

My Description:

How it works:

Examples:

---

_toUpperCase_
MDN Description:

My Description:

How it works:

Examples:

---

_trim_
MDN Description:

My Description:

How it works:

Examples:

---
