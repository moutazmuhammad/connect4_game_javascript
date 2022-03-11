let playerName1 = document.getElementById("name1");
let playerName2 = document.getElementById("name2");
let list = document.getElementById("level");

function goToGameRoom(e){
    let pattern = new RegExp("^[a-zA-Z]+[0-9_]*$", "g")
    // let pattern = /[a-zA-Z]+/g;
     if((pattern.test(playerName1.value) && pattern.test(playerName2.value))){
        //Select Level
        let selectedLevel = list.getElementsByTagName('option')[list.selectedIndex].innerText
        // Save data to sessionStorage
        sessionStorage.setItem('level', selectedLevel);
        sessionStorage.setItem("username1", playerName1.value)
        sessionStorage.setItem("username2", playerName2.value)
        window.location.href = "../htmlFiles/multiMode.html"
         
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