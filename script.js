const body = document.body
const span = document.querySelector('span')
const button = document.querySelector('button')

function randomColorGenerator(){
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

button.addEventListener('click', function(){
    let randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor
    span.textContent = randomColor
})