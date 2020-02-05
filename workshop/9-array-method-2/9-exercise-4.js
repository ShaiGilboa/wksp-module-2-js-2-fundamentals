// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q4
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
function removeEvens(lst) {
    let noEvenNumbers = lst.filter(function (number) {
        if (parseInt(number)){
        return number % 2 !== 0;
        }
    })
    return noEvenNumbers;
}
// -------------------------------------------------------------------------
console.log('Q4 removeEvens()', removeEvens([1, '2', 3, 4, '5', '6', 7, 'f', 'd', 10, 11, 120, 121]));