
const btn = document.querySelector('button');

const h1 = document.querySelector('h1');

let rand1;
let rand2;
let rand3;

function randColor()
{
        rand1 = Math.floor((Math.random() * 255)) + 1;
        rand2 = Math.floor((Math.random() * 255)) + 1;
        rand3 = Math.floor((Math.random() * 255)) + 1;

     return `rgb(${rand1}, ${rand2} ,${rand3})`;
}

btn.addEventListener('click' , function() {
    document.body.style.backgroundColor = randColor();
    h1.innerText = randColor();
});