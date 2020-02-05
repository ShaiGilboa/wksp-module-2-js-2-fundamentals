// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q7
// - map returns an array with the same number of elements as lst
// - if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
// - map returns a new array created by applying func to the elements of the original array
//
// Example:
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]

function map(lst, func) {
    // lst is an array and func is a function
    let answer = [];
    let index = 0;
    lst.forEach(function (element) {
        answer[index] = func(element);
        index++;
    })
    return answer;
}
// -------------------------------------------------------------------------
function charCount(str) { return str.length };
function toUpperCase(str) {return str.toUpperCase()}
function toLowerCase(str) {return str.toLowerCase()}
console.log('Q7: ', map(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], toUpperCase));
console.log('Q7: ', map(['Scott', 'Bob', 'Ric', 'Jim'], toLowerCase));
console.log('Q7c: ', map(['dog', 'cat', 'horse', 'elephant'], charCount));