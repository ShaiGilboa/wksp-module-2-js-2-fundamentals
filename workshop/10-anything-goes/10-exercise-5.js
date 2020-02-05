// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

let armstrongNumbers = [];
function checkArmstrong (number) {
    let length = (number.toString()).length;
    let sum = 0;
    for (let index = 0; index < length; index ++) {
        sum = sum + (Math.pow(number.toString()[index],3));
    }
    if (sum === number) {
        return number;
    }
    return -1;
}
// write your loop here...
console.log(armstrongNumbers);
for (i = 0; i < 1000; i++) {
    if (checkArmstrong(i)!==-1){
    armstrongNumbers.push(checkArmstrong(i))
    }
}

console.log(armstrongNumbers);