// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp
function max(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}




// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

//we can figure out the greater number out of any number of integers if we call the function more then once
//for example:

console.log(max(400,max(5,max(100,max(23,max(5,800))))));

// Q2c
// Would this work with more integers? 