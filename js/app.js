let botPick = ["Rock", "Paper", "Scissors"];
let matches = document.querySelector('#matches');
let playerScore = document.querySelector('#playerScore');
let botScore = document.querySelector('#botScore');
let newPlayerScore = 0;
let newBotScore  = 0;
let newMatches = 0 ;
let results = document.getElementById("#result");

//rock function start
let rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', rockFunction);

function rockFunction(){
    let i = Math.floor(Math.random() * 3);

    // newMatches  = newPlayerScore + newBotScore + 1 ;
    // matches.textContent =   newMatches ;

    document.getElementById("bot_choice").innerHTML =
    `Bot Choose <span> ${ botPick[i]}</span>`;
    document.getElementById("user_choice").innerHTML = 
    `You Choose Rock`;

    if( i == 0){
        document.getElementById("result").innerHTML = "It's a Tie!" 
    // matches.textContent =   newMatches +1 ;
     newMatches++;
     matches.textContent = newMatches;
    } else if (i == 1){
       document.getElementById("result").innerHTML = "You Lose!"
       newMatches++;
       matches.textContent = newMatches;
        //scoring
        newBotScore++;
        botScore.textContent = newBotScore;
    }else{
        document.getElementById("result").innerHTML = "You Win!"
        newMatches++;
        matches.textContent = newMatches;
         //scoring
         newPlayerScore++;
       playerScore.textContent = newPlayerScore;
       
    }
}

//Scissors function start
let scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', scissorsFunction);

function scissorsFunction(){
    let i = Math.floor(Math.random() * 3);
    // newMatches  = newPlayerScore + newBotScore ;
    // matches.textContent =   newMatches ;
  
    document.getElementById("bot_choice").innerHTML = 
    `Bot Choose <span> ${ botPick[i]}</span>`;

    document.getElementById("user_choice").innerHTML = 
    `You Choose <span> Scissors</span>`;


    if( i == 2){
        document.getElementById("result").innerHTML = "It's a Tie!" 
        newMatches++;
        matches.textContent = newMatches;
    } else if (i == 0){
        document.getElementById("result").innerHTML = "You Lose!"
        newMatches++;
        matches.textContent = newMatches;
        //scoring
        newBotScore++;
        botScore.textContent = newBotScore;
    }else{
        document.getElementById("result").innerHTML = "You Win!"
        newMatches++;
        matches.textContent = newMatches;
         //scoring
         newPlayerScore++;
       playerScore.textContent = newPlayerScore;
      
    }
}

//Paper function start
let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', paperFunction);

function paperFunction(){
    let i = Math.floor(Math.random() * 3);
    // newMatches  = newPlayerScore + newBotScore ;
    // matches.textContent =   newMatches ;
    

    document.getElementById("bot_choice").innerHTML = 
    `Bot Choose <span> ${ botPick[i]}</span>`;

    document.getElementById("user_choice").innerHTML = 
    `You Choose <span>Paper</span>`;

    if( i == 1){
        document.getElementById("result").innerHTML = "It's a Tie!" 
        newMatches++;
        matches.textContent = newMatches;
    } else if (i == 2){
        document.getElementById("result").innerHTML = "You Lose!"
        newMatches++;
        matches.textContent = newMatches;
        //scoring
        newBotScore++;
        botScore.textContent = newBotScore;
    }else{
        document.getElementById("result").innerHTML = "You Win!"
        newMatches++;
        matches.textContent = newMatches;
         //scoring
         newPlayerScore++;
       playerScore.textContent = newPlayerScore;
    }
}

// document.querySelector('#reset').addEventListener('click', reset);