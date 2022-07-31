let rock = document.querySelector(".rock");
rock.addEventListener("click",function (){
    let element = rock.firstElementChild;

    addAnimation(element);

    playRound("rock");

    //add score to the ui
    userScore.textContent = userBalance;
    computerScore.textContent = computerBalance;
});

let paper = document.querySelector(".paper");
paper.addEventListener("click",function (){
    let element = paper.firstElementChild;

    addAnimation(element);

    playRound("paper");

    //add score to the ui
    userScore.textContent = userBalance;
    computerScore.textContent = computerBalance;
});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click",function (){
    let element = scissors.firstElementChild;

    addAnimation(element);

    playRound("scissors");

    //add score to the ui
    userScore.textContent = userBalance;
    computerScore.textContent = computerBalance;
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
                    console.log("user score: "+userCounter);
                    computerCounter = computerCounter;
                    console.log("computer score: "+computerCounter);
                    //add score to the ui
                    userScore.textContent = userBalance;
                    computerScore.textContent = computerBalance;
                }
                else if(computerSelection == "paper") {
                    computerCounter++;
                    console.log("computer score: "+computerCounter);
                    //add score to the ui
                    userScore.textContent = userBalance;
                    computerScore.textContent = computerBalance;
                }
                else if(computerSelection == "scissors") {
                    userCounter++;
                    console.log("user score: "+userCounter);
                    //add score to the ui
                    userScore.textContent = userBalance;
                    computerScore.textContent = computerBalance;
                }
                break;
            }
            case "paper" : {
                if (computerSelection == "paper"){
                    userCounter = userCounter;
                    console.log("user score: "+userCounter);
                    userCounter = userCounter;
                    console.log("computer score: "+computerCounter);
                }
                else if(computerSelection == "rock") {
                    userCounter++;
                    console.log("user score: "+userCounter);
                }
                else if(computerSelection == "scissors") {
                    computerCounter++;
                    console.log("computer score: "+computerCounter);
                }
                break;
            }
            case "scissors" : {
                if (computerSelection == "scissors"){
                    userCounter = userCounter;
                    console.log("user score: "+userCounter);
                    computerCounter = computerCounter;
                    console.log("computer score: "+computerCounter);
                }
                else if(computerSelection == "rock") {
                    computerCounter++;
                    console.log("computer score: "+computerCounter);
                }
                else if(computerSelection == "paper") {
                    userCounter++;
                    console.log("user score: "+userCounter);
                };
                break;
            }
        }
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

        //call restartGame after 10 sec
        setTimeout(restartGame,1000);

    }else if(computer >= 5){
        finalScore.innerText = "LOOSER !!";
        document.body.appendChild(finalScore);

        //call restartGame after 10 sec
        setTimeout(restartGame,1000);
    }else{
        return
    }
 }

 function restartGame(){
    userBalance = 0;
    computerBalance = 0;
    userScore.textContent = userBalance;
    computerScore.textContent = computerBalance;
    document.body.removeChild(finalScore);
 }