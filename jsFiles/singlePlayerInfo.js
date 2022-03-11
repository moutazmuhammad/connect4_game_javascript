let playerName = document.getElementById("name");
let list = document.getElementById("level");

function goToGameRoom(e){
    let pattern = new RegExp("^[a-zA-Z]+[0-9_]*$", "g")
     if(pattern.test(playerName.value)){
        //Select Level
        let selectedLevel = list.getElementsByTagName('option')[list.selectedIndex].innerText
        // Save data to sessionStorage
        sessionStorage.setItem('level', selectedLevel);
        sessionStorage.setItem("username", playerName.value)
        window.location.href = "../htmlFiles/SingleMode.html"
         
     }else{
        document.getElementById("invalid").innerText = "Invlid Username: Make Sure it is Alphanumeric";
        playerName.addEventListener("keypress", ()=>{
            document.getElementById("invalid").innerText = "";
        })
     }
}


function back(){
    window.location.href = '../htmlFiles/index.html'
}