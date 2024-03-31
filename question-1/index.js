// //Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
function roundNumber(anygivenvalue) {
    console.log("\n");
    console.log("GIVEN VALUE IS:", anygivenvalue);
    return Math.round(anygivenvalue);
}
console.log("VALUE AFTER ROUNDING:", roundNumber(4.24756));
console.log("VALUE AFTER ROUNDING:", roundNumber(9.5561));
console.log("VALUE AFTER ROUNDING:", roundNumber(5.1234));
//Author-HUMA MOHSIN
