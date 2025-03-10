let signUpLink=document.getElementById("sign-up")
let popup=document.getElementById("signup-popup")
let overLay=document.getElementById("signup-popup")
let close=document.getElementById("close")

signUpLink.addEventListener("click",()=>{
    popup.style.display="block"
    overLay.style.display="block"
})
close.addEventListener("click",()=>{
     popup.style.display="none"
    overLay.style.display="none"
})