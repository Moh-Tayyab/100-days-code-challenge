//string conversion
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//numeric conversion
let str = "1234";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

//boolean conversion 
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


//example
console.log("" + 1 + 0);       // Output: "10"
console.log("" - 1 + 0);       // Output: -1
console.log(true + false);     // Output: 1
console.log(6 / "3");          // Output: 2
console.log("2" * "3");        // Output: 6
console.log(4 + 5 + "px");     // Output: "9px"
console.log("$" + 4 + 5);      // Output: "$45"
console.log("4" - 2);          // Output: 2
console.log("4px" - 2);        // Output: NaN
console.log("  -9  " + 5);     // Output: "  -9  5"
console.log("  -9  " - 5);     // Output: -14
console.log(null + 1);         // Output: 1
console.log(undefined + 1);    // Output: NaN
console.log(" \t \n" - 2);     // Output: NaN

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12