// //Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.

//solution.
function findNaN(inputvalue:any){
    return isNaN(inputvalue);//returns true or false
}

console.log("The given value is NOT A NUMBER:",findNaN("hellopakistan"));
console.log("The given value is NOT A NUMBER:",findNaN(123456789));
//Author-HUMA MOHSIN
 

