let rock = document.querySelector(".rock");
rock.addEventListener("click",function (){
    playRound("rock");
});

let paper = document.querySelector(".paper");
paper.addEventListener("click",function (){
    playRound("paper");
});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click",function (){
    playRound("scissors");
});

let result = document.querySelector(".result");

//for game function
let userBalance = 0;
let computerBalance = 0;

let elements = ["rock","paper","scissors"];


//generate random play
function computerPlay(){
    let index = Math.floor(Math.random()*3);
    //choose the computer selection from elments array based on random number
    let compPlay = elements[index];
    return compPlay;
}

//a function that plays a single round of Rock Paper Scissors
function playRound(player){
    let userCounter = 0;
    let computerCounter = 0;

    let playerSelection = player;
    let computerSelection = computerPlay();

    //compare player's play to computer play
    switch(playerSelection){
        case "rock": {
            if (computerSelection == "rock"){
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "paper") {
                computerCounter++;
            }
            else if(computerSelection == "scissors") {
                userCounter++;
            }
            break;
        }
        case "paper" : {
            if (computerSelection == "paper"){
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "rock") {
                userCounter++;
            }
            else if(computerSelection == "scissors") {
                computerCounter++;
            }
            break;
        }
        case "scissors" : {
            if (computerSelection == "scissors"){
                userCounter = userCounter;
                computerCounter = computerCounter;
            }
            else if(computerSelection == "rock") {
                computerCounter++;
            }
            else if(computerSelection == "paper") {
                userCounter++;
            };
            break;
        }
    }
    //add result to the ui
    result.textContent = "user: " + userCounter + "computer: "+ computerCounter;

    game(userCounter,computerCounter);
}

//game function keeps the running score for user and computer
function game(user,computer){
    let userCounter = user;
    let computerCounter = computer;
    
    userBalance += userCounter;
    computerBalance += computerCounter;
        
    checkWinner(userBalance,computerBalance);
}

//announce a winner of the game once one player reaches 5 points.
 function checkWinner(userTotalBalance,computerTotalBalance){

     let user = userTotalBalance;
     let computer = computerTotalBalance;
    
    if(user >= 5){
        console.log("congrats");
        userBalance = 0;
        computerBalance = 0;
    }else if(computer >= 5){
        console.log("LOOSER");
        userBalance = 0;
        computerBalance = 0;
    }else{
        return
    }
 }