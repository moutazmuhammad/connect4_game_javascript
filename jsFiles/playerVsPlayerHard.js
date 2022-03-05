const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")
let playerOneScore = 0
let playerTwoScore = 0
let usernameNum = 1
let startGame = 0


function checkPlayerOneWin(){
    for (let pOne=0 ; pOne<38 ; pOne++){
        if (circles[pOne].classList.contains("playerOne")   &&
            circles[pOne+1].classList.contains("playerOne") &&
            circles[pOne+2].classList.contains("playerOne") &&
            circles[pOne+3].classList.contains("playerOne") &&
            circles[pOne+4].classList.contains("playerOne")) 
            {
                console.log("win")
                alert("Payer One Win!!!")
            }
    }
    for (let pOne2=0 ; pOne2<14 ; pOne2++){
        if (circles[pOne2].classList.contains("playerOne") &&
            circles[pOne2+7].classList.contains("playerOne") &&
            circles[pOne2+14].classList.contains("playerOne") &&
            circles[pOne2+21].classList.contains("playerOne") &&
            circles[pOne2+28].classList.contains("playerOne"))
            {
                console.log("win")
                alert("Payer One Win!!!")
            }
    }
}

function checkPlayerTwoWin(){
    for (let pTwo=0 ; pTwo<38 ; pTwo++){
        if (circles[pTwo].classList.contains("playerTwo")   &&
            circles[pTwo+1].classList.contains("playerTwo") &&
            circles[pTwo+2].classList.contains("playerTwo") &&
            circles[pTwo+3].classList.contains("playerTwo") &&
            circles[pTwo+4].classList.contains("playerTwo")) 
            {
                console.log("win")
                alert("Payer Two Win!!!")
            }
    }
    for (let pTwo2=0 ; pTwo2<14 ; pTwo2++){
        if (circles[pTwo2].classList.contains("playerTwo") &&
            circles[pTwo2+7].classList.contains("playerTwo") &&
            circles[pTwo2+14].classList.contains("playerTwo") &&
            circles[pTwo2+21].classList.contains("playerTwo") &&
            circles[pTwo2+28].classList.contains("playerTwo"))
            {
                console.log("win")
                alert("Payer Two Win!!!")
            }
    }
}

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
        checkPlayerOneWin();
        checkPlayerTwoWin();
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
