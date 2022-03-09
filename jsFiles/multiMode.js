const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")
// let level = document.cookie.split(";")[0].split("=")[1];
let playerOneScore = 0
let playerTwoScore = 0
let usernameNum = 1
let startGame = 0
let level = 'hard'

let check_draw = 1; //flage to check if player won

let winEl = document.querySelector(".win-msg")
let drawEl = document.querySelector(".draw-msg")
let startEl = document.querySelector(".start-msg")

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

function checkDraw(){
    let countOfPlayedCercles = 0; //flage to check fill of circles
    for (let i = 0; i < 42; i++){
        if((circles[i].classList.contains("playerOne")|| circles[i].classList.contains("playerTwo")))
        {
            countOfPlayedCercles = countOfPlayedCercles + 1;
        } 
        
    }
    if (countOfPlayedCercles === 42 && check_draw === 1){
        drawEl.classList.add("show")
    }
}

diagonalsWinPositios=[
    [7, 15, 23, 31, 39],
    [0, 8, 10, 24, 32],
    [8, 10, 24, 32, 40],
    [1, 9, 17, 25, 33],
    [9, 17, 25, 33, 41],
    [2, 10, 18, 26, 34],
    [4, 10, 16, 22, 28],
    [5, 11, 17, 23, 29],
    [11, 17, 23, 29, 35],
    [6, 12, 18, 24, 30],
    [12, 18, 24, 30, 36],
    [13, 19, 25, 31, 37],
]

function checkPlayerOneWinEasy(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 4; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerOne")
            ) {
                check_draw = 0
                playerOneScore++;
                circles[circlesIndex[i][j]].classList.add("win")
                circles[circlesIndex[i][j+1]].classList.add("win")
                circles[circlesIndex[i][j+2]].classList.add("win")
                circles[circlesIndex[i][j+3]].classList.add("win")

                winEl.classList.add("show") // show fly div of winner
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
                check_draw = 0
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


function checkPlayerTwoWinEasy(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 4; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerTwo")
            ) {
                check_draw = 0
                playerTwoScore++;
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
                check_draw = 0
                playerTwoScore++;
                circles[circlesIndex[j][i]].classList.add("win")
                circles[circlesIndex[j+1][i]].classList.add("win")
                circles[circlesIndex[j+2][i]].classList.add("win")
                circles[circlesIndex[j+3][i]].classList.add("win")

                winEl.classList.add("show")
            }
        }
    }
}

function checkPlayerOneWinHard(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 3; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerOne") &&
            circles[circlesIndex[i][j+4]].classList.contains("playerOne")
            ) {
                check_draw = 0
                playerOneScore++;
                circles[circlesIndex[i][j]].classList.add("win")
                circles[circlesIndex[i][j+1]].classList.add("win")
                circles[circlesIndex[i][j+2]].classList.add("win")
                circles[circlesIndex[i][j+3]].classList.add("win")
                circles[circlesIndex[i][j+4]].classList.add("win")

                winEl.classList.add("show") // show fly div of winner
            }
        }
    }

    for (let i = 0 ; i < 7 ; i++){ // check circles in columns
        for(let j = 0; j < 2; j++){
            if (
            circles[circlesIndex[j][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+1][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+2][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+3][i]].classList.contains("playerOne") &&
            circles[circlesIndex[j+4][i]].classList.contains("playerOne")
            ) {
                check_draw = 0
                playerOneScore++;
                circles[circlesIndex[j][i]].classList.add("win")
                circles[circlesIndex[j+1][i]].classList.add("win")
                circles[circlesIndex[j+2][i]].classList.add("win")
                circles[circlesIndex[j+3][i]].classList.add("win")
                circles[circlesIndex[j+4][i]].classList.add("win")

                winEl.classList.add("show")
            }
        }
    }

    for(let i= 0; i < diagonalsWinPositios.length ; i++){ // check circles in diagonals
        const circle1 = circles[diagonalsWinPositios[i][0]]
        const circle2 = circles[diagonalsWinPositios[i][1]]
        const circle3 = circles[diagonalsWinPositios[i][2]]
        const circle4 = circles[diagonalsWinPositios[i][3]]
        const circle5 = circles[diagonalsWinPositios[i][4]]

        if (circle1.classList.contains("playerOne") &&
            circle2.classList.contains("playerOne") &&
            circle3.classList.contains("playerOne") &&
            circle4.classList.contains("playerOne") &&
            circle5.classList.contains("playerOne")) 
        {
            playerOneScore++;
            check_draw = 0
            circles[diagonalsWinPositios[i][0]].classList.add("win")
            circles[diagonalsWinPositios[i][1]].classList.add("win")
            circles[diagonalsWinPositios[i][2]].classList.add("win")
            circles[diagonalsWinPositios[i][3]].classList.add("win")
            circles[diagonalsWinPositios[i][4]].classList.add("win")
            
            winEl.classList.add("show")
        }
    }
}

function checkPlayerTwoWinHard(){
    for (let i = 0 ; i < 6 ; i++){ // check circles in rows
        for(let j = 0; j < 3; j++){
            if (
            circles[circlesIndex[i][j]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+1]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+2]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+3]].classList.contains("playerTwo") &&
            circles[circlesIndex[i][j+4]].classList.contains("playerTwo")
            ) {
                check_draw = 0
                playerTwoScore++;
                circles[circlesIndex[i][j]].classList.add("win")
                circles[circlesIndex[i][j+1]].classList.add("win")
                circles[circlesIndex[i][j+2]].classList.add("win")
                circles[circlesIndex[i][j+3]].classList.add("win")
                circles[circlesIndex[i][j+4]].classList.add("win")

                winEl.classList.add("show") 
            }
        }
    }

    for (let i = 0 ; i < 7 ; i++){ // check circles in columns
        for(let j = 0; j < 2; j++){
            if (
            circles[circlesIndex[j][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+1][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+2][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+3][i]].classList.contains("playerTwo") &&
            circles[circlesIndex[j+4][i]].classList.contains("playerTwo")
            ) {
                check_draw = 0
                playerTwoScore++;
                circles[circlesIndex[j][i]].classList.add("win")
                circles[circlesIndex[j+1][i]].classList.add("win")
                circles[circlesIndex[j+2][i]].classList.add("win")
                circles[circlesIndex[j+3][i]].classList.add("win")
                circles[circlesIndex[j+4][i]].classList.add("win")

                winEl.classList.add("show")
            }
        }
    }

    for(let i= 0; i < diagonalsWinPositios.length ; i++){ // check circles in diagonals
        const circle1 = circles[diagonalsWinPositios[i][0]]
        const circle2 = circles[diagonalsWinPositios[i][1]]
        const circle3 = circles[diagonalsWinPositios[i][2]]
        const circle4 = circles[diagonalsWinPositios[i][3]]
        const circle5 = circles[diagonalsWinPositios[i][4]]

        if (circle1.classList.contains("playerTwo") &&
            circle2.classList.contains("playerTwo") &&
            circle3.classList.contains("playerTwo") &&
            circle4.classList.contains("playerTwo") &&
            circle5.classList.contains("playerTwo")) 
        {
            playerTwoScore++;
            check_draw = 0
            circles[diagonalsWinPositios[i][0]].classList.add("win")
            circles[diagonalsWinPositios[i][1]].classList.add("win")
            circles[diagonalsWinPositios[i][2]].classList.add("win")
            circles[diagonalsWinPositios[i][3]].classList.add("win")
            circles[diagonalsWinPositios[i][4]].classList.add("win")
            
            winEl.classList.add("show")
        }
    }
}

// This Loop prepares the player's turn and the empty places to play
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

        if(level == "easy"){
            checkPlayerOneWinEasy();
            checkPlayerTwoWinEasy();
        }else if(level == "hard"){
            checkPlayerOneWinHard();
            checkPlayerTwoWinHard();
        }
        checkDraw();
    }
}


function startGameFunction() {
    startGame = 1
    startEl.classList.add("disappear")
}

function resetGameFunction() {
    startGame = 0
    check_draw = 0
    
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
