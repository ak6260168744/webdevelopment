console.log("hey clover");
let cont = document.querySelector('.no');
cont = document.querySelector('.container');

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName);
// console.log(nodeType);
/* NODE TYPES:->
return value| Meaning
          1 - Element
          2 - Attribute
          3 - Text node
          8 - Comment
          9 - document
          10 - docType
  
*/
// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.childElementCount); //count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextSibling.nextSibling);


