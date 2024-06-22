/******************
 * NULLABLE TYPES *
 ******************/


let userName: string | null = "zaini";

let xAge: number | null = null

function getUser(userName: null | string) {
    if(userName == null) {
        console.log("hello, guest!");
        
    }else{
         console.log(`Hello ${userName}.`);
         
    }
}

getUser("zaini");
getUser(null);