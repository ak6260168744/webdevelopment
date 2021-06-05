
console.log("hello brother");
console.log("Hello Anoop");
//general loop: for, while, do-while
//let a=34;
//a +=1;
//a++;
//console.log(a);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j += 1;
// }

// let k = 0;

// do {
//     console.log(k + 1);
//     k += 1;
// } while (k < 10)

//old way
// let arr = [2, 5, 6, 8, 2, 3];
// for(let i=0 ; i<arr.length ; i++){
//     const element = arr[i];
//     console.log(element);
// }

//modern way 

// arr.forEach(function (element) {
//     console.log(element);
// });

let obj = {
    name: "rohan das",
    age: 45,
    type: "dangerous programmer",
    os: "ubuntu"
}
for (let key in obj) {
    console.log(obj[key]);
}

console.log('done');



