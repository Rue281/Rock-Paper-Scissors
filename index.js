let elements = ["rock","paper","scissors"];

game();
//checkWinner();

//console.log(playRound());
//console.log(game());
//console.log(game(playRound()))

//generate random play
function computerPlay(){
    let index = Math.floor(Math.random()*3);
    //choose the computer selection from elments array based on random number
    let compPlay = elements[index];
    console.log("computerSelection: "+compPlay);
    return compPlay;
}

//a function that plays a single round of Rock Paper Scissors
//function playRound(counter)
function playRound(){
    let playerSelection = prompt("Rock or Paper or Scissors ?");
    console.log("player: "+playerSelection);
    let computerSelection = computerPlay();

    let userCounter = 0;
    let computerCounter = 0;

    //let counter;
    //compare player's play to computer play
    switch(playerSelection.toLowerCase()){
        case "rock": {
            if (computerSelection == "rock"){
                console.log("draw!!");
                //counter = counter;
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "paper") {
                console.log("You Loose!!");
                //counter--;
                computerCounter++;
            }
            else if(computerSelection == "scissors") {
                console.log("You Win!!");
                //counter++;
                userCounter++;
            }
            break;
        }
        case "paper" : {
            if (computerSelection == "paper"){
                console.log("draw!!");
                //counter = counter;
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "rock") {
                console.log("You Win!!");
                //counter++;
                userCounter++;
            }
            else if(computerSelection == "scissors") {
                console.log("You Loose!!");
                //counter--;
                computerCounter++;
            }
            break;
        }
        case "scissors" : {
            if (computerSelection == "scissors"){
                console.log("draw!!");
                //counter = counter;
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "rock") {
                console.log("You Loose!!");
                //counter--;
                computerCounter++;
            }
            else if(computerSelection == "paper") {
                console.log("You Win!!");
                //counter++;
                userCounter++;
            };
            break;
        }
    }
    console.log("counter in playRound: "+userCounter+" "+computerCounter);
    return {userCounter,computerCounter};
}

//play a 5 round game that keeps score and reports a winner or loser at the end
function game(){
    let userBalance = 0;
    let computerBalance = 0;
    
    for(let i=0; i<5; i++){
        let data = playRound();
    let userCounter = data.userCounter;
    let computerCounter = data.computerCounter;
        
        //let computerCounter = playRound();
        userBalance += userCounter;
        computerBalance += computerCounter;
        
        console.log ("counters in game function: "+userBalance+" "+computerBalance);
    }
        console.log(userBalance+ " "+computerBalance);
    //check the winner
    if(userBalance > computerBalance){
        console.log("U're the winner!!");
        return "user";
    }else if(userBalance < computerBalance){
        console.log("LOOSER !!");
        return "comp";
    }else{
        console.log("draw!");
        return "draw";
    }

    /*console.log(userBalance+ " "+computerBalance);
    //checkWinner();
    return {userBalance,computerBalance};*/
}
/*let checkWinner=function(){
    let info = game();
    let user = info.userBalance;
    let computer = info.computerBalance;
    if(user > computer){
        console.log("U're the winner!!");
        //return "user";
    }else if(user < computer){
        console.log("LOOSER !!");
        //return "comp";
    }else{
        console.log("draw!");
        //return "draw";
    }
}
console.log(checkWinner);*/