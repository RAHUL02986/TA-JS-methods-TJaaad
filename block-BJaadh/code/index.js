// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called");
strings.push("sentence")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
let allIs =  strings.filter((string)=> string.includes("is") );

// - Find all the words that contain 'is' use string method 'indexOf'
 strings.filter((string)=> string.includes("is") );


// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => num % 3 ===0);

// -  Sort Array from smallest to largest

// - Remove the last word in strings
console.log([...strings].pop());
// - Find largest number in numbers
// let largest = [...numbers].sort((a-b) >= a-b).pop();

// - Find longest string in strings
// let longestString  = [...string].sort((a-b) >= a.length-b.length).pop;

// - Find all the even numbers
let isEven = numbers.filter((num) => num % 2 === 0);
console.log(isEven);

// - Find all the odd numbers
let isOdd = numbers.filter((num) => num % 2 !== 0);
console.log(isOdd);


// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("new world"));

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,4));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3,4));

// - Replace 12 & 18 with 1221 and 1881
//numbers.splice(numbers.indexOf(12),1, 1221);
console.log(numbers.map((num) => {
  if(num === 12){
    return 1221;
  }else if(num === 18){
 return 1881;
  }else{
    return num;
  }

}
))
// - Replace words in strings array with the length of the word
strings.slice(3,5);

// - Find the sum of the length of words using above question
let stringsLength = (strings.map((string) => string.length));
stringsLength.reduce((acc, cv) =>{
  acc = acc + cv;
  return acc;
});

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'


// - Create new array with only first name
let firstNameCustomer = customers.map(customer => customer.firstname);
console.log(firstNameCustomer);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNameCustomer =customers.map(
  (customer) =>
   `${customer.firstname} ${customer.lastname}`
    );
    console.log(fullNameCustomer);

// - Sort the array created above alphabetically
console.log([...fullNameCustomer].sort());


// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = customers.filter((customer) => {
  if(
    customer.firstname.includes("a") ||  
    customer.firstname.includes("e") ||
    customer.firstname.includes("i") ||
    customer.firstname.includes("o") ||
    customer.firstname.includes("u") 

  ){
    return true;
  }else{
    return false;
  }
});
console.log(vowel);