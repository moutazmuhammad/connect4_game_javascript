const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")
let playerOneScore = 0
let playerTwoScore = 0
let usernameNum = 1
let startGame = 0

let winEl = document.querySelector(".win-msg")
let drawEl = document.querySelector(".draw-msg")

// This part to get 2D array of circles indexs
let positioncircles = 0; // This var to know which index value we are taking
let circlesIndex = new Array(6);
for (let t = 0; t < 6; t++) {
    circlesIndex[t] = new Array(7);
}

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    circlesIndex[i][j] = i*7+j; 
  }
  positioncircles = positioncircles + 1; 
}


function checkPlayerOneWin(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 4; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerOne")
            ) {
                playerOneScore++;
                circles[circlesIndex[i][j]].classList.add("win")
                circles[circlesIndex[i][j+1]].classList.add("win")
                circles[circlesIndex[i][j+2]].classList.add("win")
                circles[circlesIndex[i][j+3]].classList.add("win")
                
                winEl.classList.add("show") 
            }
        }
    }

    for (let i = 0 ; i < 7 ; i++){ // check circles in columns
        for(let j = 0; j < 3; j++){
            if (
            circles[circlesIndex[j][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+1][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+2][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+3][i]].classList.contains("playerOne")
            ) {
                playerOneScore++;
                circles[circlesIndex[j][i]].classList.add("win")
                circles[circlesIndex[j+1][i]].classList.add("win")
                circles[circlesIndex[j+2][i]].classList.add("win")
                circles[circlesIndex[j+3][i]].classList.add("win")

                winEl.classList.add("show")
            }
        }
    }
}


function checkPlayerTwoWin(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 4; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerTwo")
            ) {
                playerOneScore++;
                circles[circlesIndex[i][j]].classList.add("win")
                circles[circlesIndex[i][j+1]].classList.add("win")
                circles[circlesIndex[i][j+2]].classList.add("win")
                circles[circlesIndex[i][j+3]].classList.add("win")

                winEl.classList.add("show") 
            }
        }
    }

    for (let i = 0 ; i < 7 ; i++){ // check circles in columns
        for(let j = 0; j < 3; j++){
            if (
            circles[circlesIndex[j][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+1][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+2][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+3][i]].classList.contains("playerTwo")
            ) {

                playerOneScore++;
                circles[circlesIndex[j][i]].classList.add("win")
                circles[circlesIndex[j+1][i]].classList.add("win")
                circles[circlesIndex[j+2][i]].classList.add("win")
                circles[circlesIndex[j+3][i]].classList.add("win")

                winEl.classList.add("show")
            }
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
    for(let i=0 ; i < 6 ; i++){
        for (let j=0 ; j< 7 ; j++){
            circles[circlesIndex[i][j]].classList.add("circle");
            circles[circlesIndex[i][j]].classList.remove("playerTwo");
            circles[circlesIndex[i][j]].classList.remove("playerOne");
            circles[circlesIndex[i][j]].classList.remove("win");
        }
    }
    for (let i=circles.length-7 ; i < circles.length ; i++ ){
        circles[i].classList.add("empty");
    }
    winEl.classList.remove("show");
    drawEl.classList.remove("show");
    usernameNum = 1;
    username.innerHTML= `Player 1 Turn`;
}
