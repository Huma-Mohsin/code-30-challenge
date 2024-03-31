// //Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.

//Solution.
function StringToNumber(str: string) {
  let result1 = parseFloat(str); //parseFloat:parseFloat is used to parse strings into floating-point numbers (numbers with decimal points).

  let result2 = parseInt(str); //parseInt:parseInt is used to parse strings into integers.

  return [result1, result2];
}

let str = "123.4";
console.log(StringToNumber(str));
 str = "hellopakistan";
 console.log(StringToNumber(str));

//Author-HUMA MOHSIN
