console.log("hey boy");

//DOM Selector :we cann grab any elemt in website by using DOM
/*
 Types of element selector :
 1. Single element selector
 2. Multielement selctor
*/

// 1. SINGLE ELEMENT SELECTOR:-> 

let element = document.getElementById('myfirst');

// console.log(element);
// console.log(element.className);
// console.log(element.parentNode);

element.style.color = 'red';
element.innerText = "RED HOT BOY";
element.innerHTML = '<i>anoop kumar</i>';


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = 'green';

// console.log(sel);

//2. MULTI ELEMENT SELECTOR:-> 

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('child'));
console.log(elems);

// Array.from(elems).forEach(elements => {
//     console.log(elements);
//     elements.style.color = 'green';
// })

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}
