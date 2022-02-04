let l = document.querySelector(".left")
let r = document.querySelector(".right")
let bal = document.querySelector(".bal")
let score = document.querySelector(".score")
let y = false
let a = false
let count = 0 
let highScore =0
let countPrev = 0
 let i= 0
let animals = [`<i style="transform:rotateY(180deg)" class="fas fa-otter fa-2x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-cat fa-2x"></i>`,`<i style="transform:rotateY(180deg)" class="fas fa-dog fa-2x"></i>`,
 `<i style="transform:rotateY(180deg)" class="fas fa-hippo fa-3x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-kiwi-bird"></i>`, `<i  style="transform:rotateY(180deg)" class="fas fa-spider"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-horse fa-3x"></i>`,
`<i style="transform:rotateY(180deg)" class="fas fa-crow"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-dragon fa-3x"></i>`, `<i  style="transform:rotateY(180deg)" class="fas fa-dove"></i>`, `<i  style="transform:rotateY(180deg)"  class="fas fa-frog"></i>` ]



l.addEventListener("click", () => {
    y = true
    l.style.transform = "rotatey(300deg)"
    r.style.transform = "rotateY(180deg)"

    setTimeout(()=>{
           r.style.transform = "skew(0deg,-20deg)"
        l.style.transform = "skew(0deg,-20deg)"
        y = false  
if(a == true){
  count++
 highScore ++
  a= false
}else if(a== false){
  a = false
}    
    },400)   
})
 

let balM = setInterval(function () {

    let posBal = bal.getBoundingClientRect();

  if(posBal.x >= 870 && posBal.x <= 880 ){
 i = count
   // score.innerHTML = count
  }
    if (posBal.x <= 390  && posBal.x >=360 && y == true) {
a = true
 
//  i = count 
    console.log(i)
 
    } else if (posBal.x <= 390 && posBal.x >=360 && y == false) {
   // console.log("hello") 
   
      a=false
      score.innerHTML = `Your score : ${highScore}`
    
 // score.innerHTML = count
      clearInterval(balM)
      //als alert dan werkt de rest niet?!
//alert("game over")
bal.style.animationPlayState ="paused"
bal.style.backgroundColor = "red"
   //count =0
     
   let modal = document.querySelector(".modal")
modal.style.display = "block"
let yes = document.querySelector("#yes")
yes.addEventListener("click", ()=>{
  location.reload()
}) 
let no = document.querySelector("#no")
no.addEventListener("click", ()=>{
  modal.style.display = "none"
})  
     
    } 
    if(highScore <= 10){
      highScore = count
    }else if(count >= 11 && highScore <12){
 count = 0
  score.innerHTML = `Your score : ${highScore}`
    }else{
 
  score.innerHTML = `Your score : ${highScore}`
    }

  score.innerHTML = `Your score : ${highScore}`
  bal.innerHTML = animals[i]


},8)



