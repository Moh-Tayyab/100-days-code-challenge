/*
Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

Explain & TIP: To compare strings without considering their case (uppercase/lowercase), 
you can convert both strings to the same case before comparing.
*/


function compareStringToStrig(str1: string, str2: string): boolean {
    // Converts both strings to UppperCase before comparison
    return str1.toUpperCase() === str2.toUpperCase()
}

console.log(compareStringToStrig("hello", "hello"))//output true
console.log(compareStringToStrig("zain", "zaini"));//output false

