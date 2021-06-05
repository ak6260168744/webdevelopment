console.log("hey sharb");

//Create element

let element = document.createElement('li');
let text = document.createTextNode(' i am new textnode');
element.appendChild(text);
//Add a class name to li elemnts
element.className = 'childul';
element.id = 'createLi';
element.setAttribute('title', 'mytitle');
// element.innerHTML = '<b>mr clover in the house</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

//Removing element
let elem2 = document.createElement('h2');
elem2.id = 'elem22';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a create node for elem2');
elem2.appendChild(tnode);
ul.appendChild(elem2);
console.log(elem2);

// ul.replaceWith(elem2);
let myul = document.getElementById('myul');
console.log(myul.firstElementChild);
myul.replaceChild(element, myul.firstElementChild);
myul.removeChild(myul.firstElementChild);




