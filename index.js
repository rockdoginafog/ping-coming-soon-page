const email = document.querySelector(".email")
const error = document.querySelector(".error")
const form = document.getElementById("form")
const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    validateEmail()
})

function validateEmail(){
    if(email.value.match(emailValidation)){
        error.classList.add("hidden")
        email.classList.remove("red")
        email.classList.add("green")
        
    }else{
        error.classList.remove("hidden")
        email.classList.add("red")
        email.classList.remove("green")
    }
}