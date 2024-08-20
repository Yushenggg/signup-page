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
    
    let containsInvalid  = Array.from(inputList).reduce((valBool,currentObj)=>{
        return (isInvalid(currentObj)||valBool) 
    },false)
    if(!containsInvalid) form.submit()
    console.log("after")

})

let splash = document.querySelector("#splash")
let imageArr = ["url('./resource/images/florian-hahn.jpg')","url('./resource/images/jose-figueroa1.jpg')","url('./resource/images/jose-figueroa2.jpg')"]
var currPos = 0

let nameArr = ["Florian Hahn","Jose Figueroa","Jose Figueroa"]
let linkArr = ["https://unsplash.com/photos/a-city-street-with-a-cross-painted-on-the-road-kSOPT_wIRvE","https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-building-r8wHlAHwtx0","https://unsplash.com/photos/a-man-riding-a-bike-down-a-street-next-to-tall-buildings-vtrXq_SXyR8"]

let credits = document.querySelector("#splashFooter")
credits.innerHTML = `Picutre by <a href='${linkArr[1]}'> ${nameArr[1]} </a>  on <a href="https://unsplash.com/"> Unsplash</a>` 

function changePhoto(){

    if (++currPos>=imageArr.length) currPos = 0;
    credits.innerHTML = `Picutre by <a href='${linkArr[currPos]}'> ${nameArr[currPos]} </a>  on <a href="https://unsplash.com/"> Unsplash</a>` 
    splash.style.backgroundImage = imageArr[currPos]

}
changePhoto()
setInterval(changePhoto,10000)