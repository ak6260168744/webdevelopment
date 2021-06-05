console.log("hello sexy");

let age = 45;
const var1 = 34;
doesDrive = true;
if (age == 18) {
    console.log("your are now adult");
}
else if (age >= 18) {
    console.log("fu-chan come here");
}
else {
    console.log("fu-chan go away");
}

if (typeof var1 !== 'undefined') {
    console.log('var1 is defined');
}
else {

    console.log('var1 is undefined');
}

if (doesDrive || age > 18) {
    console.log("you can drive");
}
else {
    console.log("you can't drive");
}

//ternary operaator
console.log(age == 45 ? 'Age is 45' : 'age is not 45');

//switch case statement
switch (age) {
    case 45:
        console.log('you are 45');
        break;
    case 34:
        console.log('you are 40');
        break;
    case 18:
        console.log('you are 18');
        break;
    default:
        console.log('known age');
        break;
}