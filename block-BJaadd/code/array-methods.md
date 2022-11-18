Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
parameter- Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

-example
```js
let element = ['fire', 'air', 'water'];
console.log(element.join()),//"fire,air,water"
console.log(element.join(''));//"fireairwater"
console.log(element.join("-"));//"fire-air-water"
```
`join`--The string conversions of all array elements are joined into one string. If an element is undefined, null, it is converted to an empty string instead of the string "null" or "undefined".
-   - No it does not mutate the original array


3. `flat`
parameter-depth-The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
```js
let arr1 = [0,1,2,3,[4,5,[6,7]]];
arr1.flat();//[0,1,2,3,4,5,array(2)];
arr1.flat(infinity);//[0,1,2,3,4,5,6,7];
arr1.flat(2);// [0,1,2,3,4,5,[6,7]];
```
flat-The flat() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array.
-   - No it does not mutate the original array



4. `push`
The push() method adds one or more elements to the end of an array and returns the new length of the array.

```js
let animal = ["tiger", "goats", "sheep","elephent"];
let count = animal.push("cow");// ["tiger", "goats", "sheep","elephent", "cows"];
animal.push("chicken", "dog","horse");// ["tiger", "goats", "sheep","elephent","cow","chicken", "dog","horse"];
- its muted the original array.

```
5. `indexOf`
parameter-searchelement
fromIndex- optional
```js
let beasts = ['ant', 'bison', 'camel', 'duck','bison'];
beasts.indexof('camel');//2
beasts.indexof('ant')//0
beasts.indexof('cow');//-1
```
   - No it does not mutate the original array

6. `lastIndexOf`
parameter-searchelement
fromIndex- optional
```js
let beasts = ['ant', 'bison', 'camel', 'duck','bison'];
beasts.lastindexof('camel');//2
beasts.lastindexof('ant')//0
beasts.lastindexof('bison');//4
beasts.lastindexof();//-1
```
   - No it does not mutate the original array


7. `includes`
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
let colors = ['red', 'blue', 'grey', 'yellow'];
colors.includes('red')//true
colors.includes('grey');//true
colors.inxludes('orange');//false
```
   - No it does not mutate the original array


8. `reverse`
The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
```js
let arr2 = ['1','2','3','4','5'];
arr2.reverse();//["5","4", "3","2","1"]

```
-it change the orignal array.

9. `every`
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```js
let arr2 = ['1','2','3','4','5'];
arr2.every(arr)=> arr < 6;// true
arr2.every(arr)=> arr < 3;// flase

```
it is not change the orignal array.

10. `shift`
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
```js
let arr1 = [1,2,3,4,5];
arr1.shift();// [2,3,4,5];

```
it change the orignal array.

11. `splice`
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

```js
let some = ['months','year','days','weeks'];
some.splice(0,'hours');//['hours','months','year','days','weeks'];
let num = [1,2,3,4,5,6];
num.splice(0,2,32,43);// [32,43,3,4,5,6];

```
- it will change the orignal array.
12. `find`
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
parameters : callback function 
thisArg - optional
```js
let number = [1,2,3,4,5,6,7];
function isGrade(num){
  return num === 5;
}
number.find(isGrade);// 5
function isGrade(num){
  return num === 20;
}
number.find(isGrade);//undefined

```

13. `unshift`
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
let arr = [1,2,3,4,5];
arr.unshift(8,9);//[8,9,1,2,3,4,5];
```
it will change the array.
14. `findIndex`
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
parameeter- callbackfunnction
thisArg
```js
let arr = [1,5,3,8,9,32,43];
let isLargerNumber = (element) => element > 5;
arr.findIndex(isLargerNumber);//3

```
it is not change the orignal array.

15. `filter`
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
parameter- callbackfn
thisArg-optional
```js
let  words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function result(cb){
  return word.lenth > 5;
}
words.filter(result);//["xuberant", "destruction", "present"]
```

16. `flat`
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

parameter- flat
depth - optional
```js
let num = [0, 1, 2, [3, 4]];
num.flat();//[0,1,2,3,4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
arr2.flat(2);//[0,1,2,[3,4]];
const arr2 = [0, 1, 2, [[[3, 4]]]];
arr2.flat(infinity);//[0,1,2,3,4];

```
it will not change the orignal array.
17. `forEach`
The forEach() method executes a provided function once for each array element.
```js
let numbers = [12, 5, 6, 33, 45, 54, 65, 67];
function log(number){
  console.log(number);
};
numbers.forEach(log);

```
it is not change the orignal array.

18. `map`
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
parameter - call backfn
thisArg- optional
```js
let  array1 = [1, 4, 9, 16];
fuunction double(num){
  return num * 2;
};
array1.map(double);
```


19. `pop`
The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
let num = [1,2,3,4,5,6];
num.pop();//[1,2,3,4,5];
```
it is muted the array.
20. `reduce`
parameter - callbackfn
initialvalue-optional
```js
const array1 = [1, 2, 3, 4];
array1.reduce((acc, num)=>{
  return acc + num;
},0);
```
it is not muted the array.
21. `slice`
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2);

```
it can;t be muted the orignal array.

22. `some`
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```js
let numbers = [1,2,3,4,5,6];
let even = (element)=> element % 2 === 0;
numbers.some(even);

```
it can't muted the orignal array.
