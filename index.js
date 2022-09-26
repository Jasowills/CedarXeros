var form = document.getElementById('form')
var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var input3 = document.getElementById('input3')

var box = document.getElementById('box')
form.addEventListener('submit', addToOutput)
let detail1 = ' Email : ' + input2.value
let parent = document.getElementById('parent')
function addToOutput(e) {
    e.preventDefault()
    let output = document.getElementById('output')
    const result = `<p style ="text-align: center;"> Name: ${input1.value}</p> 
     <p style ="text-align: center;"> Email: ${input2.value} </p>`

    console.log(result)

    
    output.innerHTML += result 
    output.style.display = "block"
    
}

function clicker() {
    let unhide = document.getElementById('unhide')
    unhide.style.display = 'block'
   
    let icon = document.getElementById('icon')
    icon.style.display = 'none'
    let icon2 = document.getElementById('icon2')
    icon2.style.display = 'block'
}
function cancel() {
    let unhide = document.getElementById('unhide')
    unhide.style.display = 'none'
    let icon = document.getElementById('icon')
    icon.style.display = 'block'
    let icon2 = document.getElementById('icon2')
    icon2.style.display = 'none'
}