function rules () {

    if (playerSelection() == "invalid" ) {
        return false;        
    }

    else {
        
     return (playerSelection(playerSelect) == "ROCK" && cpuSelect != "PAPER" && cpuSelect != "ROCK") ? alert ("You won") : 
            (playerSelection(playerSelect) == "PAPER" && cpuSelect != "SCISSORS" && cpuSelect != "PAPER") ? alert ("You Won") : 
            (playerSelection(playerSelect) == "SCISSORS" && cpuSelect != "ROCK" && cpuSelect != "SCISSORS") ? alert ("You've Won") : 
            (playerSelection(playerSelect) == "ROCK" && cpuSelect == "ROCK") ? alert ("You've tied") :
            (playerSelection(playerSelect) == "PAPER" && cpuSelect == "PAPER") ? alert ("You've tied") :
            (playerSelection(playerSelect) == "SCISSORS" && cpuSelect == "SCISSORS") ? alert ("You've tied") :
            alert("You've lost");
            
        }
}

function computerPlay (){
    return Math.floor (Math.random() * 3);
}

function playerSelection () {

    let selection = playerSelect.toUpperCase();

    if (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS" ) {

        alert("Select a valid entry");
        emptyString = "invalid";
        return emptyString;
    }

    else {

        return selection;
    }
   
}

let playerSelect = prompt ("Choose: Rock, Paper, Scissors");
let cpuSelect;
let emptyString;

switch (playerSelection(playerSelect)) {

    case "ROCK":
        alert("You've choosed Rock");
    break;

    case "PAPER":
        alert("You've choosed Paper");
    break;

    case "SCISSORS":
        alert("You've choosed Scissors");
    break;
}

switch (computerPlay()){
    case 0:
        cpuSelect = "ROCK";
        alert("CPU selected Rock");
    break;

    case 1:
        cpuSelect = "PAPER"
        alert("CPU selected Paper");
    break;

    case 2:
        cpuSelect= "SCISSORS"
        alert("CPU selected Scissors");
    break;
}

rules();


