// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
    let uniqueArray = [];
    uniqueArray = array.filter(function (element) {
        return (array.indexOf(element) === array.lastIndexOf(element))
    })
    return uniqueArray;
}

console.log(filterNonUnique([1,2,8,3,3,'g',4,5,6,7,7,'g',8,1]));
