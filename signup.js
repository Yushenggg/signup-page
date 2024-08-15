let form = document.querySelector("form")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let phoneNum = document.querySelector("#phoneNum")
let password = document.querySelector("#password")
let cfmPassword = document.querySelector("#cfmPassword")
let submit = document.querySelector("#submitBtn")
let inputList = document.querySelectorAll("input")

// Logic Check

function checkBlank(){
    inputList.forEach((input)=>{
        if(input.value.trim().length===0){
            input.classList.add("invalid");
            input.nextElementSibling.textContent = "*Field cannot be blank"
        }
    })

}
function checkInput(){
    // Email
    let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
    if(isEmailValid){
        email.classList.remove("invalid")
    }else {
        email.classList.add("invalid");
        email.nextElementSibling.textContent = "*Invalid Email"
    }
    let isPasswordSame = (password.value === cfmPassword.value)
    if(isPasswordSame){
        cfmPassword.classList.remove("invalid")
    }else{
        cfmPassword.classList.add("invalid")
        cfmPassword.nextElementSibling.textContent="*Password does not match"
    }

}
// isInvalid

function isInvalid(){
    let isInvalid = false
    inputList.forEach((input)=>{
        if(input.classList.contains("invalid")){ isInvalid = true}
    })
    return isInvalid
}

// Submit Logic
submit.addEventListener("click",()=>{
    inputList.forEach((input)=>{
        input.classList.remove("invalid")
        input.nextElementSibling.textContent=""
    })
    
    checkInput()
    checkBlank()
    console.log("b4")

    console.log("after")

})