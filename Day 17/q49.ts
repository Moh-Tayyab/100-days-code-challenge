
/*
Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
It should log each hobby with a statement saying you enjoy that hobby.

Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way 
to handle multiple inputs gracefully.
*/

// Defines a function that accepts multiple hobbies as arguments
function hobbies(...hobbies: string[]) {
// Loops through each hobby in array
    hobbies.forEach(hobby => {
        
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
        
    });
}
//call function with passing three hobbies
hobbies('coding', 'palying', 'sleeping');