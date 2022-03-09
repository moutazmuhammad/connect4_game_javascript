//Audio Function

function audio(e, audio){
    e.target.innerHTML += `<embed name="GoodEnough" src="/audio/${audio}" hidden="true">`
}

//Sound Effects for Buttons
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");


easyBtn.addEventListener("mouseenter" , (e)=>{
    audio(e, "btnHover.mp3");
})

hardBtn.addEventListener("mouseenter", (e)=>{
    audio(e, "btnHover.mp3");
})

easyBtn.addEventListener("click", (e)=>{
    audio(e, "btnClick.mp3");
})

hardBtn.addEventListener("click", (e)=>{
    audio(e, "btnClick.mp3");
})






//Showing the side menu on clicking
let sideMenuBtn = document.getElementById("menu");
let menu = document.getElementById("side-menu");
let menuBtnParent = document.getElementById("menu-wrapper")


//Adding Sound effects to the side-menu btn
// sideMenuBtn.addEventListener("mouseenter", (e)=>{
//     menuBtnParent.innerHTML += `<embed name="GoodEnough" src="/audio/btnHover.mp3" hidden="true">`
// })

sideMenuBtn.addEventListener("click", (e)=>{
     //Showing menu
    if(menu.classList.contains("side")){
        menu.classList.remove("side");
        menu.classList.add("none-side");
    }else{
        menu.classList.add("side");
        menu.classList.remove("none-side");
    }
  
   

})




