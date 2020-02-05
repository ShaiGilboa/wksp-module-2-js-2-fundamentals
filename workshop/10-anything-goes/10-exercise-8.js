// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q8
// - filter(lst, func) returns a list with all the elements of lst that does not satisfy f removed
// - filter(lst, func) has fewer elements than lst
// - if lst_ = filter(lst, f) and x is an element of lst_ it means that:
//      x is an element of lst
//      f(x) is true
//
// Example:
// function isEven(x) {return x % 2 === 0;}
// filter([1, 2, 3, 4, 5], isEven) returns [2,4];

function filter(lst, func) {
    // lst is an array and f is a function
    // func takes one argument and returns a boolean (true or false)
    let answer = [];
    lst.forEach(function (element) {
        if (func(element)) {
            answer.push(element);
        }
    })
    return answer;
}
// -------------------------------------------------------------------------
function keepLong(str) { return str.length > 5 }
function isEven(x) {return x % 2 === 0;}
function checkArmstrong (number) {
    let length = (number.toString()).length;
    let sum = 0;
    for (let index = 0; index < length; index ++) {
        sum = sum + (Math.pow(number.toString()[index],3));
    }
    if (sum === number) {
        return true;
    }
    return false;
}
console.log('Q8: ', filter(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], keepLong));
console.log('Q8b: ', filter([1,2,3,4,5,6,7,8,'y',9,10,'g',true], isEven));
console.log('Q8c: ', filter([1,2,3,4,5,6,7,8,9,370,371,369,], checkArmstrong));