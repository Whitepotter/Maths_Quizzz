function addUser(){
    player_1 = document.getElementById("player_one").value;
    player_2 = document.getElementById("player_two").value;
    
    localStorage.setItem("player_one_name",player_1);
    localStorage.setItem("player_two_name",player_2);

    window.location = "index2.html";
}