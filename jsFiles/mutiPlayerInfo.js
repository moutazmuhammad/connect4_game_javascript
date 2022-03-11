let playerName1 = document.getElementById("name1");
let playerName2 = document.getElementById("name2");
let list = document.getElementById("level");

function goToGameRoom(e){
   if(isUsernameValid(playerName1.value) && isUsernameValid(playerName2.value)){
        //Select Level
        let selectedLevel = list.getElementsByTagName('option')[list.selectedIndex].innerText;
        // Save data to sessionStorage
        sessionStorage.setItem('level', selectedLevel);
        sessionStorage.setItem("username1", playerName1.value);
        sessionStorage.setItem("username2", playerName2.value);
        window.location.href = "../htmlFiles/multiMode.html";
    }else{
        document.getElementById("invalid").innerText = "Invlid Username: Make Sure it is Alphanumeric";
        playerName1.addEventListener("keypress", ()=>{
            document.getElementById("invalid").innerText = "";
        })
        playerName2.addEventListener("keypress", ()=>{
            document.getElementById("invalid").innerText = "";
        })
    }
}


function isUsernameValid(name){
    let pattern = new RegExp("^[a-zA-Z]+[0-9_]*$", "g");
    if(pattern.test(name)){
        return true;
    }else{
        return false;
    }
}

function back(){
    window.location.href = '../htmlFiles/index.html'
}