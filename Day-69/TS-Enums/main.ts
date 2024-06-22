/*********
 * ENUMS *
 *********/

enum Days {
    Sunday, 
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

console.log(Days.Wednesday);


const today: Days = Days.Friday

console.log(`Today is ${Days[today]}.`);


