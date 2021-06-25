
let q1 = document.querySelector(".q1")
let q2 = document.querySelector(".q2")
let q3 = document.querySelector(".q3")
let q4 = document.querySelector(".q4")
let q5 = document.querySelector(".q5")

let a1 = document.querySelector(".a1")
let a2 = document.querySelector(".a2")
let a3 = document.querySelector(".a3")
let a4 = document.querySelector(".a4")
let a5 = document.querySelector(".a5")

let ar1 = document.querySelector(".arrow1")
let ar2 = document.querySelector(".arrow2")
let ar3 = document.querySelector(".arrow3")
let ar4 = document.querySelector(".arrow4")
let ar5 = document.querySelector(".arrow5")

q1.addEventListener("click", ()=>{
  q1.classList.toggle("bolden")
  a1.classList.toggle("show")
  ar1.classList.toggle("active")
})
q2.addEventListener("click", ()=>{
    q2.classList.toggle("bolden")
    a2.classList.toggle("show")
    ar2.classList.toggle("active")
  })
q3.addEventListener("click", ()=>{
    q3.classList.toggle("bolden")
    a3.classList.toggle("show")
    ar3.classList.toggle("active")
  })
q4.addEventListener("click", ()=>{
    q4.classList.toggle("bolden")
    a4.classList.toggle("show")
    ar4.classList.toggle("active")
  })
q5.addEventListener("click", ()=>{
    q5.classList.toggle("bolden")
    a5.classList.toggle("show")
    ar5.classList.toggle("active")
  })