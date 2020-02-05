// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q9
// - every(lst, func) returns a true if func returns true for every element of lst
//
// Example:
// function isEven(num) { return num % 2 === 0 }
// every([2,4,12], isEven) returns true
// every([2,3,12], isEven) returns false

function every(lst, func) {
    // lst is an array and f is a function
    // func takes 1 argument and returns a boolean
    for (i = 0; i < lst.length; i++){
        if (!func(lst[i])){
            return false;
        }
    }
    return true;
}
// -------------------------------------------------------------------------
function isEven(num) { return num % 2 === 0 }
function isLong(str) { return str.length > 5 }
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
console.log('Q9: ', every([2, 42, 540, 8, 64], isEven));
console.log('Q9: ', every([2, 42, 540, 3, 64], isEven));
console.log('Q8: ', every(['Cyborg', 'Batman', 'Superman', 'Aquaman'], isLong));
console.log('Q8b: ', every([1,2,3,4,5,6,7,8,'y',9,10,'g',true], isEven));
console.log('Q8c: ', every([1,370,371,], checkArmstrong));