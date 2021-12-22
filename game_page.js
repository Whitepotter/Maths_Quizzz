player_one_name = localStorage.getItem("player_one_name");
player_two_name = localStorage.getItem("player_two_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_1_name").innerHTML = player_one_name + ": ";
document.getElementById("player_2_name").innerHTML = player_two_name + ": ";

document.getElementById("player_question").innerHTML = "Question turn: " + player_one_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_two_name;

function send(){
   number_1 = document.getElementById("number1").value;
   number_2 = document.getElementById("number2").value;

   answer = parseInt(number_1) * parseInt(number_2);

   question_html = "<h4>" + number_1 + " x " + number_2 + "</h4>";
   input_box_html = "<br> Answer: <input id='answer_box' placeholder = 'Typer the answer here' type='text'";
   button_html = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";

   row = question_html + input_box_html + button_html;
   document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_player = "player1";
answer_player = "player2";

function check(){
    get_answer = document.getElementById("answer_box").value;

    if(get_answer == answer){

        if(answer_player == "player1"){

            player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        }

        else{

            player_2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }

        if(question_player == "player1"){
            question_player = "player2"
            document.getElementById("player_question").innerHTML = "Question turn: " + player_two_name;
        }

        else{
            question_player = "player1";
            document.getElementById("player_question").innerHTML = "Question turn: " + player_one_name;
        }
    }

    if(answer_player == "player1"){
        answer_player = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player_two_name;
    }

    else{
        answer_player = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player_one_name;
    }
}

