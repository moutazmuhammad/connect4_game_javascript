let playerName = document.getElementById("name");
let list = document.getElementById("level");

function goToGameRoom(e){
    let pattern = new RegExp("^[a-zA-Z]+[0-9_]*$", "g")
    // let pattern = /[a-zA-Z]+/g;
     if(pattern.test(playerName.value)){
        //Select Level
        let selectedLevel = list.getElementsByTagName('option')[list.selectedIndex].innerText
        // Save data to sessionStorage
        sessionStorage.setItem('level', selectedLevel);
        window.location.href = "../htmlFiles/singleMode.html"
         
     }else{
        document.getElementById("invalid").innerText = "Invlid Username: Make Sure it is Alphanumeric";
        playerName.addEventListener("keypress", ()=>{
            document.getElementById("invalid").innerText = "";
        })
     }
}



function saveLevelSession(){

}


function saveDataLocalStorage(){

}