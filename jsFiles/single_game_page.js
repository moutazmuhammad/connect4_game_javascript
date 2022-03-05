const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")
let usernameNum = 1

for (let i=0 ; i<circles.length ; i++){
    circles[i].onclick=()=>{
        if (circles[i].classList.contains("empty")){
            if (usernameNum === 1){
                circles[i].classList.add("playerOne");
                circles[i].classList.remove("empty")
                usernameNum = 2;
                username.innerHTML= `Player ${usernameNum} Turn`;
                if(i>6){
                    circles[i-7].classList.add("empty");
                }
                
            }
            else if (usernameNum === 2){
                circles[i].classList.add("playerTwo");
                circles[i].classList.remove("empty");
                usernameNum = 1;
                username.innerHTML= `Player ${usernameNum} Turn`;
                if(i>6){
                    circles[i-7].classList.add("empty");
                }
            }
        }
    }
}