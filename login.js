const sign_in =document.querySelector("#sign-in-btn");
const sign_up =document.querySelector("#sign-up-btn");
const container =document.querySelector(".container");

sign_up.addEventListener('click',()=>{
    container.classList.add("sign_up_mode");
})
sign_in.addEventListener('click',()=>{
    container.classList.remove("sign_up_mode");
})
