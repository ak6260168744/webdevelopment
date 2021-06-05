console.log("this is H44 js ");

//function in JavaScript

function greet(name,greetText="greeetings from JavaScript"){
    let name1="Name1"; //iska scope local hein 
    console.log(greetText + name + " is a good boy");
}
function Sum(a,b,c){
    let d = a + b + c;
    return d;
}


let name ="Anoop";
let name1="shumbam";
let name2="rohan";
let name3="sunny";

let greetText = "Good Morning ";

//example of greet function
greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,);
let returnVal= greet(name3);
console.log(returnVal); // iska print undefined isliye aaya kuiki greet return mein kuch laya nhi apne sath 

//example of sum function
let returnV =Sum(2,3,4);
console.log(returnV);




// console.log( name + " iss a good boy" );
// console.log( name1 + " iss a good boy" );
// console.log( name2 + " iss a good boy" );
// console.log( name3 + " iss a good boy" );