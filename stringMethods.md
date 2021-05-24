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
MDN Description:

My Description:

How it works:

Examples:

---

_indexOf_
MDN Description:

My Description:

How it works:

Examples:

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
