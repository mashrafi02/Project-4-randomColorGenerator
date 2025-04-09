const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "gray", "cyan", "magenta", "lime", "teal"];

const body = document.body
const span = document.querySelector('span')
const button = document.querySelector('button')
let index = 0;

button.addEventListener('click', function(){
    if(index == colors.length){
        index = 0;
    }
    let randomColor = colors[index];
    index ++;
    body.style.backgroundColor = randomColor
    span.textContent = randomColor
})