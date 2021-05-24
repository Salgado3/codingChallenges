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
MDN Description: "The match() method retrieves the result of matching a string against a regular expression."

My Description: This method allows us to locate part of the string using regex (mainly).

How it works:
match(regexp)
Return value

An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

    If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
    if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.

Additional properties

As explained above, some results contain additional properties as described below.

groups
An object of named capturing groups whose keys are the names and values are the capturing groups or undefined if no named capturing groups were defined. See Groups and Ranges for more information.
index
The index of the search at which the result was found.
input
A copy of the search string.
Examples:
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

---

_repeat_
MDN Description:"The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together."

My Description: The repeat method creates a new string and returns the given value x amount of times (depends on the count parameter)

How it works:
repeat(count)

count
An integer between 0 and +Infinity, indicating the number of times to repeat the string.

Return value

A new string containing the specified number of copies of the given string.

Examples:
const sayHello = "hello"
console.log(sayHello.repeat(5)) //"hellohellohellohellohello"

---

_replace_
MDN Description: "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

The original string is left unchanged."

My Description: The replace method allows you to find a string and replace it with a new string. You can also use regex patterns.

How it works:
replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)
Parameters

regexp (pattern)
A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
substr
A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
newSubstr (replacement)
The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
replacerFunction (replacement)
A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

Return value

A new string, with some or all matches of a pattern replaced by a replacement.

Examples:
let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

---

_search_
MDN Description: "The search() method executes a search for a match between a regular expression and this String object. When you want to know whether a pattern is found, and also know its index within a string, use search(). (If you only want to know if it exists, use the similar test() method on the RegExp prototype, which returns a boolean.)

For more information (but slower execution) use match() (similar to the regular expression exec() method)."

My Description: This method allows you to search using a reg extression.

How it works:
search(regexp)
Parameters

regexp

    A regular expression object.

    If a non-RegExp object regexp is passed, it is implicitly converted to a RegExp with new RegExp(regexp).

Return value

The index of the first match between the regular expression and the given string, or -1 if no match was found.

Examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

---

_slice_
MDN Description:"The slice() method extracts a section of a string and returns it as a new string, without modifying the original string."

My Description: The string method allows you to take a portion of a string. It takes in two parameters (second is optional). First param. is the index on where to begin the new string, the second is the ending index. If no second param. it will go till end of string.

How it works:
slice(beginIndex)
slice(beginIndex, endIndex) endIndex non inclusive.

Examples:
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

---

_split_
MDN Description:"The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call."
Return value

An Array of strings, split at each point where the separator occurs in the given string.

My Description: The split method is used to split a string into an array of substrings. Creates new array.

How it works:
split()
split(separator)
split(separator, limit)
Parameters

separator Optional

    The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.

        The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
        If separator contains multiple characters, that entire character sequence must be found in order to split.
        If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
        If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
        If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".

limit Optional

    A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

        The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
        If limit is 0, [] is returned.

Examples:
var str = "How are you doing today?";
var res = str.split("o"); //H,w are y,u d,ing t,day?

var str = "How are you doing today?";
var res = str.split(""); //H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?

---

_substr_
MDN Description: "The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards."

My Description: https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

Seems to work just like slice.

How it works:
substr(start)
substr(start, length)
Parameters

start
The index of the first character to include in the returned substring.
length
Optional. The number of characters to extract.

Return value

A new string containing the specified part of the given string.

Examples: (MDN)
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

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
