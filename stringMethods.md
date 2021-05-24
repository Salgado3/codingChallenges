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

My Description:

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
MDN Description:

My Description:

How it works:

Examples:

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
