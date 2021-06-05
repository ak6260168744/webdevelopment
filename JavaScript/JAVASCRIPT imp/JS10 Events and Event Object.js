console.log("heelo sharbs");

// Events in JAVASCRIPT

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    // console.log(variable);
    // console.log(e);
    // location.href = '//codewithharry.com';
});
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);

function func1(e) {
    console.log("thanks", e);
    e.preventDefault();
}

function func2(e) {
    console.log("thanks its a double click", e);
    e.preventDefault();
}
function func3(e) {
    console.log("thanks its a mouse done", e);
    e.preventDefault();
}

document.querySelector('.no').addEventListener('mouseenter', function (e) {
    console.log("hey babe");
});

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetX} ,${e.offsetY}`;
    console.log("what are you doin'ng babe");
});

document.querySelector('.no').addEventListener('mouseleave', function (e) {
    console.log("goodbye babe");
});











