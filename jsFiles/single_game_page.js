const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")

let usernameNum = 1
let startGame = 0

for (let i=0 ; i<circles.length ; i++){
    circles[i].onclick=()=>{
        if (circles[i].classList.contains("empty") && startGame === 1){
            if (usernameNum === 1){
                circles[i].classList.add("playerOne");
                circles[i].classList.remove("empty")
                usernameNum = 2;
                username.innerHTML= `Player ${usernameNum} Turn`;
                if(i>6){
                    circles[i-7].classList.remove("circle");
                    circles[i-7].classList.add("empty");
                }
                
            }

            else if (usernameNum === 2){
                circles[i].classList.add("playerTwo");
                circles[i].classList.remove("empty");
                usernameNum = 1;
                username.innerHTML= `Player ${usernameNum} Turn`;
                if(i>6){
                    circles[i-7].classList.remove("circle");
                    circles[i-7].classList.add("empty");
                }
            }
        }
    }
}


function startGameFunction() {
    startGame = 1
}

function resetGameFunction() {
    startGame = 0
    for(let c=0 ; c < circles.length ; c++){
        circles[c].classList.add("circle");
        circles[c].classList.remove("playerTwo");
        circles[c].classList.remove("playerOne");
    }
    for (let lRow=circles.length-7 ; lRow < circles.length ; lRow++ ){
        circles[lRow].classList.add("empty");
        circles[lRow].classList.remove("playerTwo");
        circles[lRow].classList.remove("playerOne");
        usernameNum = 1
        username.innerHTML= `Player 1 Turn`;
    }
}
