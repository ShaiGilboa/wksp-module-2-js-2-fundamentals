// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
  
function greetLong(lst) {
    // lst is an array of strings
    let above5 = lst.filter(function (number) {
        return number.length>=4;
    })
    let answer=[];
    above5.forEach(function (element) {
        element = 'Hello ' + element;
        answer.push(element);
    })
    return answer;
}
// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim', 'daniel']));