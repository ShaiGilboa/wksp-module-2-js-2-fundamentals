# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo); //Array(8) [ "think", "dream", "learn", "write", "thought", "dreams", "knowledge", "truth" ]

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join(); //"The,large,shaggy,dog,barked,at,the,silence" // the opposite of split

lexicon.join(' '); // "The large shaggy dog barked at the silence"  // we cansdecide what value to be in between items from the array. the default is ","

//the difference between .join() and .toString() is that .join() has the option of replacing the divider

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()` 
3. `.pop()`, `.sort()`
4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---
.include()
'the .include() nethod ceckes if the array includes a selected value.'
it can recieve two parameters, (the value we are looking for, where should we begin?)

the returned value is boolean

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Banana", 3); // n = false

var fruits2 = ["Banana", "Orange", true, "Mango"];
var m = fruits2 .includes("true", 0); // m = false
```
this method is strict

.slice()
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //Array [ "Orange", "Lemon" ]


var fruits2 = [ "Orange", "Lemon", "Apple", "Mango"];
var c = fruits.slice(8, 9);  ///Array []

```

if the selected range is empty (or beyond the array) the method would return an empty array

---

[Next lecture: Functions](../lecture-8-functions)