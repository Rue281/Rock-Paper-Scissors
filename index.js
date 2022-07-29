let rock = document.querySelector(".rock");
rock.addEventListener("click",function (){
    let element = rock.firstElementChild;

    addAnimation(element);

    playRound("rock");
});

let paper = document.querySelector(".paper");
paper.addEventListener("click",function (){
    let element = paper.firstElementChild;

    addAnimation(element);

    playRound("paper");
});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click",function (){
    let element = scissors.firstElementChild;

    addAnimation(element);

    playRound("scissors");
});

let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");

//for game function
let userBalance = 0;
let computerBalance = 0;

let elements = ["rock","paper","scissors"];

let finalScore = document.createElement("div");

     //add styling to final score
     let finalScoreColor = finalScore.style.color = "#02386E";
     let finalScoreFontSize = finalScore.style.fontSize = "50px"
     let finalScoreFontStyle = finalScore.style.fontFamily = "system-ui"
     let finalScoreWeight = finalScore.style.fontWeight = "bold";
     let finalScoreDisplay = finalScore.style.display = "flex";
     let finalScoreContent = finalScore.style.justifyContent = "center";
     let finalScoreItems = finalScore.style.alignItems = "center";
     let finalScoreWidth = finalScore.style.width = "100%";
     let finalScorePadding = finalScore.style.padding = "20px";

     let score = document.querySelector(".score");


//add animation to button
function addAnimation(element){
    element.classList.add("fa-beat-fade");
    setTimeout(function() {
        element.classList.remove("fa-beat-fade");
     }, 300, element);
}

//generate random play
function computerPlay(){
    let index = Math.floor(Math.random()*3);
    //choose the computer selection from elments array based on random number
    let compPlay = elements[index];
    return compPlay;
}

//a function that plays a single round of Rock Paper Scissors
function playRound(player){

    //check if there is result phrase from last round
    if(document.body.contains(finalScore)){document.body.removeChild(finalScore);}
    else{



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
        //add score to the ui
        userScore.textContent = userCounter;
        computerScore.textContent = computerCounter;

        game(userCounter,computerCounter);
    }
}

//to keep the running score for user and computer
function game(user,computer){
    let userCounter = user;
    let computerCounter = computer;
    
    userBalance += userCounter;
    computerBalance += computerCounter;
        
    checkWinner(userBalance,computerBalance);
}

//to announce the winner once one player reaches 5 points.
 function checkWinner(userTotalBalance,computerTotalBalance){

     let user = userTotalBalance;
     let computer = computerTotalBalance;

     //display final result to ui
     
     
    if(user >= 5){
        finalScore.innerText = "CONGRATS !!";
        //score.appendChild(finalScore);
        document.body.appendChild(finalScore);
        userBalance = 0;
        computerBalance = 0;
    }else if(computer >= 5){
        finalScore.innerText = "LOOSER !!";
        //score.appendChild(finalScore);
        document.body.appendChild(finalScore);
        userBalance = 0;
        computerBalance = 0;
    }else{
        return
    }
 }