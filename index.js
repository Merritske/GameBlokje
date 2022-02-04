let l = document.querySelector(".left")
let r = document.querySelector(".right")
let bal = document.querySelector(".bal")
let score = document.querySelector(".score")
let y = false
let a = false
let count = 0
let highScore =0

 let i= 0
let animals = [`<i style="transform:rotateY(180deg)" class="fas fa-otter fa-2x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-cat fa-2x"></i>`,`<i style="transform:rotateY(180deg)" class="fas fa-dog fa-2x"></i>`,
 `<i style="transform:rotateY(180deg)" class="fas fa-hippo fa-3x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-dragon fa-3x"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-kiwi-bird"></i>`, `<i  style="transform:rotateY(180deg)" class="fas fa-spider"></i>`, `<i style="transform:rotateY(180deg)" class="fas fa-horse fa-3x"></i>`,
`<i style="transform:rotateY(180deg)" class="fas fa-crow"></i>`, `<i  style="transform:rotateY(180deg)" class="fas fa-dove"></i>`, `<i  style="transform:rotateY(180deg)"  class="fas fa-frog"></i>` ]



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
    },300)   
})
 

let balM = setInterval(function () {
 // bal.innerHTML = animals[i]
  
     



    let posBal = bal.getBoundingClientRect();
 //   console.log(highScore)

  if(posBal.x >= 870 && posBal.x <= 880 ){

  if(highScore >= 18){
      bal.style.animation = "balletje 1s infinite linear"
     }else if(highScore >= 12){
      bal.style.animation = "balletje 1.1s infinite linear"
     }else if(highScore >= 9 && highScore < 12){
      bal.style.animation = "balletje 1.5s infinite linear"
     }else if(highScore >= 6 && highScore <9){
      bal.style.animation = "balletje 1.5s infinite linear"
     } else if(highScore >= 3 && highScore < 6){
      bal.style.animation = "balletje 1.8s infinite linear"
     }
 i = count
  }

    if (posBal.x <= 390  && posBal.x >=360 && y == true) {
a = true
 

 //   console.log(i)
 
    } else if (posBal.x <= 390 && posBal.x >=360 && y == false) {
bal.style.animationPlayState ="paused"
bal.style.backgroundColor = "red"
         a=false
      score.innerHTML = `Your score : ${highScore}`

      clearInterval(balM)



     
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
    }else if(count >= 11 && highScore <12 ){
 count = 0
//i = count
//  score.innerHTML = `Your score : ${highScore}`
  
    }
    else if(count >= 11 && highScore <24){
      count = 0
 // score.innerHTML = `Your score : ${highScore}`
    }


  score.innerHTML = `Your score : ${highScore}`
 bal.innerHTML = animals[i]


},2)



