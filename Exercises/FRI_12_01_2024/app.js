// Input fields
let name = document.getElementById('name');
let email = document.getElementById('email');
let stack = document.getElementById('stack');
let comment = document.getElementById('comment');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

// For the button

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    show()
})
function show() {
    result.textContent = name.value;
    result.textContent += email.value;
    result.textContent += stack.value;
    result.textContent += comment.value;
} 