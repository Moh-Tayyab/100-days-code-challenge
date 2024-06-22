/*
Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new 
array with the transformed items.
*/

let useMap: string[] = ['run', 'walk', 'sleep', 'wait']

// Uses .map() to create a new array with the length of each word
let findLength: number[] = useMap.map((item)=> item.length)

console.log(findLength);

