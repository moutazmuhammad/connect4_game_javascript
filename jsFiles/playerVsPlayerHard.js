const circles = document.querySelectorAll(".circle")
const username = document.querySelector("#username")
let playerOneScore = 0
let playerTwoScore = 0
let usernameNum = 1
let startGame = 0

diagonalsWinPositios=[
    [7, 15, 23, 31, 39],
    [0, 8, 10, 24, 32],
    [8, 10, 24, 32, 40],
    [1, 9, 17, 25, 33],
    [9, 17, 25, 33, 41],
    [2, 10, 18, 26, 34],
    [4, 10, 16, 22, 28],
    [5, 11, 17, 23, 29],
    [11, 17, 23, 29, 23],
    [6, 12, 18, 24, 30],
    [12, 18, 24, 30, 36],
    [13, 19, 25, 31, 37],
]

function checkPlayerOneWin(){
    for (let pOne=0 ; pOne<3 ; pOne++){ // check circles in rows
        if (circles[pOne].classList.contains("playerOne")   &&
            circles[pOne+1].classList.contains("playerOne") &&
            circles[pOne+2].classList.contains("playerOne") &&
            circles[pOne+3].classList.contains("playerOne") &&
            circles[pOne+4].classList.contains("playerOne") 
            ||
            circles[pOne+7].classList.contains("playerOne")  &&
            circles[pOne+8].classList.contains("playerOne")  &&
            circles[pOne+9].classList.contains("playerOne")  &&
            circles[pOne+10].classList.contains("playerOne") &&
            circles[pOne+11].classList.contains("playerOne") 
            ||
            circles[pOne+14].classList.contains("playerOne") &&
            circles[pOne+15].classList.contains("playerOne") &&
            circles[pOne+16].classList.contains("playerOne") &&
            circles[pOne+17].classList.contains("playerOne") &&
            circles[pOne+18].classList.contains("playerOne") 
            ||
            circles[pOne+21].classList.contains("playerOne") &&
            circles[pOne+22].classList.contains("playerOne") &&
            circles[pOne+23].classList.contains("playerOne") &&
            circles[pOne+24].classList.contains("playerOne") &&
            circles[pOne+25].classList.contains("playerOne")
            ||
            circles[pOne+28].classList.contains("playerOne") &&
            circles[pOne+29].classList.contains("playerOne") &&
            circles[pOne+30].classList.contains("playerOne") &&
            circles[pOne+31].classList.contains("playerOne") &&
            circles[pOne+32].classList.contains("playerOne") 
            ||
            circles[pOne+35].classList.contains("playerOne") &&
            circles[pOne+36].classList.contains("playerOne") &&
            circles[pOne+37].classList.contains("playerOne") &&
            circles[pOne+38].classList.contains("playerOne") &&
            circles[pOne+39].classList.contains("playerOne")) 
            {
                playerOneScore++;
                alert("Payer One Win!!!")
            }
    }
    for (let pOne2=0 ; pOne2<14 ; pOne2++){ // check circles in columns
        if (circles[pOne2].classList.contains("playerOne")    &&
            circles[pOne2+7].classList.contains("playerOne")  &&
            circles[pOne2+14].classList.contains("playerOne") &&
            circles[pOne2+21].classList.contains("playerOne") &&
            circles[pOne2+28].classList.contains("playerOne"))
        {
            playerOneScore++;
            alert("Payer One Win!!!")
        }
    }

    for(let dOne= 0; dOne < diagonalsWinPositios.length ; dOne++){ // check circles in diagonals
        const circle1 = circles[diagonalsWinPositios[dOne][0]]
        const circle2 = circles[diagonalsWinPositios[dOne][1]]
        const circle3 = circles[diagonalsWinPositios[dOne][2]]
        const circle4 = circles[diagonalsWinPositios[dOne][3]]
        const circle5 = circles[diagonalsWinPositios[dOne][4]]

        if (circle1.classList.contains("playerOne") &&
            circle2.classList.contains("playerOne") &&
            circle3.classList.contains("playerOne") &&
            circle4.classList.contains("playerOne") &&
            circle5.classList.contains("playerOne")) 
        {
            playerOneScore++;
            alert("Payer One Win!!!")
        }
    }
}

function checkPlayerTwoWin(){
    for (let pTwo=0 ; pTwo<3 ; pTwo++){ // check circles in rows
        if (circles[pTwo].classList.contains("playerTwo")   &&
            circles[pTwo+1].classList.contains("playerTwo") &&
            circles[pTwo+2].classList.contains("playerTwo") &&
            circles[pTwo+3].classList.contains("playerTwo") &&
            circles[pTwo+4].classList.contains("playerTwo") 
            ||
            circles[pTwo+7].classList.contains("playerTwo")  &&
            circles[pTwo+8].classList.contains("playerTwo")  &&
            circles[pTwo+9].classList.contains("playerTwo")  &&
            circles[pTwo+10].classList.contains("playerTwo") &&
            circles[pTwo+11].classList.contains("playerTwo") 
            ||
            circles[pTwo+14].classList.contains("playerTwo") &&
            circles[pTwo+15].classList.contains("playerTwo") &&
            circles[pTwo+16].classList.contains("playerTwo") &&
            circles[pTwo+17].classList.contains("playerTwo") &&
            circles[pTwo+18].classList.contains("playerTwo") 
            ||
            circles[pTwo+21].classList.contains("playerTwo") &&
            circles[pTwo+22].classList.contains("playerTwo") &&
            circles[pTwo+23].classList.contains("playerTwo") &&
            circles[pTwo+24].classList.contains("playerTwo") &&
            circles[pTwo+25].classList.contains("playerTwo")
            ||
            circles[pTwo+28].classList.contains("playerTwo") &&
            circles[pTwo+29].classList.contains("playerTwo") &&
            circles[pTwo+30].classList.contains("playerTwo") &&
            circles[pTwo+31].classList.contains("playerTwo") &&
            circles[pTwo+32].classList.contains("playerTwo") 
            ||
            circles[pTwo+35].classList.contains("playerTwo") &&
            circles[pTwo+36].classList.contains("playerTwo") &&
            circles[pTwo+37].classList.contains("playerTwo") &&
            circles[pTwo+38].classList.contains("playerTwo") &&
            circles[pTwo+39].classList.contains("playerTwo")) 
            {
                playerTwoScore++;
                alert("Payer Two Win!!!")
            }
    }
    for (let pTwo2=0 ; pTwo2<14 ; pTwo2++){ // check circles in columns
        if (circles[pTwo2].classList.contains("playerTwo")    &&
            circles[pTwo2+7].classList.contains("playerTwo")  &&
            circles[pTwo2+14].classList.contains("playerTwo") &&
            circles[pTwo2+21].classList.contains("playerTwo") &&
            circles[pTwo2+28].classList.contains("playerTwo"))
            {
                playerTwoScore++;
                alert("Payer Two Win!!!")
            }
    }

    for(let dTwo= 0; dTwo < diagonalsWinPositios.length ; dTwo++){ // check circles in diagonals
        const circle1 = circles[diagonalsWinPositios[dTwo][0]]
        const circle2 = circles[diagonalsWinPositios[dTwo][1]]
        const circle3 = circles[diagonalsWinPositios[dTwo][2]]
        const circle4 = circles[diagonalsWinPositios[dTwo][3]]
        const circle5 = circles[diagonalsWinPositios[dTwo][4]]

        if (circle1.classList.contains("playerTwo") &&
            circle2.classList.contains("playerTwo") &&
            circle3.classList.contains("playerTwo") &&
            circle4.classList.contains("playerTwo") &&
            circle5.classList.contains("playerTwo")) 
        {
            playerTwoScore++;
            alert("Payer Two Win!!!")
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
