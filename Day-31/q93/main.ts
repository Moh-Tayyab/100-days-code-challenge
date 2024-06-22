/*
Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

Explain & TIP: To replace an item in an array, find its index using .indexOf(), 
then use that index to set a new value with array bracket notation.
*/


function replaceWith(frt: string[]) {
    const index = frt.indexOf("Kiwi")
    if(index !== -1) frt[index] = "Orange"
}
 
const frt: string[] = ["Apple", "Mango", "Kiwi"]
replaceWith(frt);

console.log(frt);

/*
let num: number[] = [1,2,3,4,5,6,7,8,9]

let indexval = num.indexOf(7)
if(indexval !== -1) num[indexval] = 8

console.log(num);*/


