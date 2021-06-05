console.log("hey cool bud");
//limitation is that we can't add an array but we overcome this problem

let impArray = ['adrak', 'pyaz', 'bhindii'];



// Add a key-value pair inside local storage
localStorage.setItem('name', 'harry');
localStorage.setItem('name2', 'anoop');
localStorage.setItem('sabzi', JSON.stringify(impArray));

// localStorage.clear(); //clears the entire local storage

//clear a particular key-value pair
localStorage.removeItem('name2');

//thats how we can copy localstorage into vaiable
//or retrieve an item from local storage.
let name = localStorage.getItem('name');
let sabzi = JSON.parse(localStorage.getItem('sabzi'));
console.log(sabzi);


// Add a key-value pair inside session storage
sessionStorage.setItem('sessionName', 'harry');
sessionStorage.setItem('sessionName2', 'anoop');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));