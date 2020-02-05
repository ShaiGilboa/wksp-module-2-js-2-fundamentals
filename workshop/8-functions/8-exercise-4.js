// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {

    return (!array.every(function (element) {
        return element!==item;
    }
    ))
    // let i = 0;
    // array.forEach(function(element) {
    //     if (element === item) {
    //         i++;
    //     }
    // })
    // if (i !== 0 ) {
    //     return true;
    // }

    // return false;
}


// Test case
const myArray = ['bacon', 'purple', 'door', 'window', 'exist', 'code', 'program', 'funky'];

console.log(itemIsPresent(myArray, 'fun'));
