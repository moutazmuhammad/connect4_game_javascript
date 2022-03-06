//Selecting needed elements and declaring variables
let allCircles = document.getElementsByClassName("circle");
console.log
let startBtn = document.getElementById("start-button");
let resetBtn = document.getElementById("reset-button");
let gameFrame = document.getElementsByClassName("gameframe")[0];
let gameStarted = false;
let turn = "player";

//Can't Play without Starting
gameFrame.addEventListener("click", (e)=>{
    if(!gameStarted){
        alert("Please Start the Game First!");
    }
})



//Starting Game
startBtn.addEventListener("click", (e)=>{
    gameStarted = true;
    turn = "player";
    //let player start playing
    for(let i = 0; i < 7 ; i++){
        //only allow playing if no win has been achieved
        allCircles[i].addEventListener("click", playerMoves);
    }
})


//Resetting all circles
resetBtn.addEventListener("click", (e)=>{
    //Ask the user if he/she wants to really reset the game coz they may press it by mistake
    let answer = confirm("Are You Sure You Want to Reset the Game?");
    if(answer){
        resetGame();
    }
})


//Resetting Game
function resetGame(){
    for(let i = 0; i < allCircles.length; i++){
        allCircles[i].classList.remove("circle-yellow");
        allCircles[i].classList.remove("circle-red");
        gameStarted = false;
    }
}

//Screen for picking color


//Player Moves
function playerMoves(e){
    //Only play if game has started
    if(gameStarted){
        //Make sure first it is the player's turn:
        if(turn === "player"){
            //Check if the top circle is already played
            if(e.target.classList.contains("circle-red") || e.target.classList.contains("circle-yellow")){
                e.target.removeEventListener("click", playerMoves);
            }
            //First, we check if all the circles below has been played or not
            //Check using id 
            let id = Number(e.target.getAttribute("id").slice(1));
            //variable to store the last empty position
            let emptyPosition;
            for(let j = id; j < allCircles.length ; j += 7){
                if(!(allCircles[j].classList.contains("circle-red") || allCircles[j].classList.contains("circle-yellow"))){
                    emptyPosition = j;
                }
            }
            allCircles[emptyPosition].classList.add("circle-yellow");
            allCircles[emptyPosition].removeEventListener("click", playerMoves)
            //Now we set the turn to be the computer's
            turn = "computer";
            //Check for winning
            //Set some time out so that the final move appears before the win window pops up
            setTimeout(() => {
                checkForWinning("circle-yellow");
            }, 200);
            
            //If no win, let the computer play its move
            setTimeout(() => {
                computerMoves();
            }, 1000);        
        }  

    }
   
}



//Assuming computer is RED

//pick a random index
function pickRandomIndex(){
    //Pick a random index for the computer move
    return Math.floor(Math.random() * 7);
}

//Computer Moves
function computerMoves(){
    //Allow only playing if it is the computer's turn
    if(turn === "computer"){
        //Random Number
        let randomIndex = pickRandomIndex();
        //Check if the top circle is already played
        while(allCircles[randomIndex].classList.contains("circle-red") || allCircles[randomIndex].classList.contains("circle-yellow")){
            randomIndex = pickRandomIndex();
        }
        //check if all the circles below it has already been played or not
        let empty;
        for(let i = randomIndex; i < allCircles.length; i += 7){
            if(!(allCircles[i].classList.contains("circle-red") || allCircles[i].classList.contains("circle-yellow"))){
               empty = i;
            }
        }
        allCircles[empty].classList.add("circle-red");
        //Set some time out so that the final move appears before the win window pops up
        setTimeout(() => {
            checkForWinning("circle-red");
        }, 200);
        turn = "player";
    }
}



//Checking for winning and losing 
function checkForWinning(winnerClass){
    //Horizontal
    let winCounts = 0;
    for(let i = allCircles.length - 1; i >= 0; i -= 7){
        winCounts = 0;
    for(let j = i; j > i - 7; j--){
        if(allCircles[j].classList.contains(winnerClass)){
            winCounts += 1;
        }else{
            winCounts = 0;
        }

        //break loop if finds win
        if(winCounts === 5){
            break;
        }
        
    }
    //break outer loop in case of a victory
    if(winCounts === 5){
        console.log(winnerClass + ": " + winCounts);
        //Announce win and stop playing 
        announceWin(winCounts, winnerClass);
        break;
    }
}


    //Vertical
    for(let i = allCircles.length - 1; i >= 35; i--){
        winCounts = 0;
        for(let j = i; j >= 0; j -= 7){
            if(allCircles[j].classList.contains(winnerClass)){
                winCounts += 1;
            }else{
                winCounts = 0;
            }

            //break loop if finds win
            if(winCounts === 5){
                break;
            }
            
        }
        //break outer loop in case of a victory
        if(winCounts === 5){
            console.log(winnerClass + ": " + winCounts);
            //Announce win and stop playing 
            announceWin(winCounts, winnerClass);
            break;
        }
    }
    
    //Diagonal From the right
    for(let i = allCircles.length -1; i >= 34; i--){
        if(i < 39 && i > 34){
            continue;
        }
        for(let j = i; j >= 0; j -= 8){
            if(allCircles[j].classList.contains(winnerClass)){
                winCounts += 1;
            }else{
                winCounts = 0;
            }

            //break loop if finds win
            if(winCounts === 5){
                break;
            }

        }
        //break outer loop in case of a victory
        if(winCounts === 5){
            console.log(winnerClass + ": " + winCounts);
            //Announce win and stop playing 
            announceWin(winCounts, winnerClass);
            break;
        }
    }

    //Diagonal From the left
    for(let i = 37; i >= 28; i--){
        if(i < 35 && i > 28){
            continue;
        }
        for(let j = i; j >= 0; j -= 6){
            if(allCircles[j].classList.contains(winnerClass)){
                winCounts += 1;
            }else{
                winCounts = 0;
            }

            //break loop if finds win
            if(winCounts === 5){
                break;
            }

        }
        //break outer loop in case of a victory
        if(winCounts === 5){
            console.log(winnerClass + ": " + winCounts);
            //Announce win and stop playing 
            announceWin(winCounts, winnerClass);
            break;
        }
    }
}


//Announce winning function
function announceWin(winCounts, winnerClass){
    //Win if 4 in a row or more
    if(winCounts >= 5 && winnerClass === "circle-yellow"){
        let response = confirm("You Win! Would You Like To Play Again?");
        replayOrNot(response);
        //stop playing
        stopGame();
        //change turn to over
        turn = "over";
    }else if(winCounts >= 5 && winnerClass === "circle-red"){
        let response = alert("The Computer Wins! Would You Like To Play Again?");
        replayOrNot(response);
        //stop playing
        stopGame();
        //change turn to over
        turn = "over";
    }   
}


//Handling Replaying
function replayOrNot(response){
    if(response){
        resetGame();
    }else{
        window.location.href = "../htmlFiles/levels.html";
    }
}

//Stop Game in case of winning
function stopGame(){
    for(let i = 0; i < 7 ; i++){
        //Remove event listeners in case of a win
        allCircles[i].removeEventListener("click", playerMoves);
    }
}