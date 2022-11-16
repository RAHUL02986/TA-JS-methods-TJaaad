Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
parameter:
touppercase
returnvalue: A new string representing the calling string converted to upper case.
```js
let userName = "AltCaampus"
userName.toUpperCase();
```


3. `toLowerCase`
parameter :
toLowerCase
return:A new string representing the calling string converted to lower case.
```js
let userName = "AltCaampus"
userName.toLowerCase();
```


4. `trim`
parameter:
trim
return: A new string representing str stripped of whitespace from both its beginning and end.


5. `trimEnd`
parameter:
trimEnd
return: A new string representing str stripped of whitespace from end.

6. `trimStart`
parameter:
trimStart
return: A new string representing str stripped of whitespace from start.

7. `concat`
parameter:valueN
return: A new Array instance.
The concat method creates a new array. The array will first be populated by the elements in the object on which it is called. 


8. `endsWith`
parameter:
searchstring
endPosition- optional
return: true if the given characters are found at the end of the string; otherwise, false.
```js
const str1 = 'Cat are the best!'
str1.endsWith('best!');
```

9. `includes`
parameter:
search element-The value to search for.


fromIndex-optional-Zero-based index at which to start searching.
return- A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).
```js
const array2 = [1, 2, 4, 6];
array2.includes('3');//false
array2.includes('2');//true
array2.includes('6');//true
```


10. `indexOf`
parameter:
(searchstring) default to indexof() return= 0;
postion(optional);
returns : the index of the first occurrence of searchingstring founnd or -1 if not found.
Strings are zero-indexed: The index of a string's first character is 0, and the index of a string's last character is the length of the string minus 1.


11. `lastIndexOf`
parameter: searchstring , position
return:The index of the last occurrence of searchString found, or -1 if not found.

Strings are zero-indexed: The index of a string's first character is 0, and the index of a string's last character is the length of the string minus 1.


12. `padEnd`
parameter:
targetLength,
padString
return : A String of the specified targetLength with the padString applied at the end of the current str.
```js
const str1 = 'New york';
str1.padEnd(14, '-');
str1.padEnd(12);
```
13. `padStart`
parameter:
targetLength,
padString
return: The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
```js
const str1 = '5';
str1.padStart(5, '0');
```

14. `repeat`
15. `replace`
parameter:pattern, replacement
return : A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

```js
const p = 'the quick brown fox jum over the lazy dog';
p.replace('dog','monkey');
```

16. `slice`
parameter :
start, end
return: A new array containing the extracted elements.
```js
const animals = ['mokey','dog','elephent','duck',]
animals.slice(2);
animal.slice(1,3);
```

17. `split`
parameter : - seperator - optional - [string data type]
-limit - optional - (number data type)
return : an array of strings 
example:
```js
let userName = " rahul kapoor"
userName.split(' ');
useName.split('');
useName.split('0');
useName.split('', 4);
useName.split('0', 10);

```
18. `substring`
parameter :
indexStart, 
indexEnd-optional
return:A new string containing the specified part of the given string.

```js
const str = 'mozilla';
str.substring(1);
str.substring(1,3);
```

