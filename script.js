let userScore = 0;
let botScore = 0;

let choices = document.querySelectorAll(".choice");
let msgg = document.querySelector("#msg");
let usrScorePara = document.querySelector("#user-score");
let btScorePara = document.querySelector("#bot-score");


const genBotChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randm = Math.floor(Math.random()*3);
    return options[randm];
}

const drawGame = () => {
    msgg.innerText = `Game was draw. Play again`;
    msgg.style.backgroundColor = "#5F6F52"; // dark green
}

const showWinner = (userWin, userChoice, botChoice) => {
    if (userWin) {
        userScore++;
        usrScorePara.innerText = userScore;
        msgg.innerText = `You Win!  Your ${userChoice} beats bot's ${botChoice}`;
        msgg.style.backgroundColor = "#65B741"; //green
    }
    else{
        botScore++;
        btScorePara.innerText = botScore;
        msgg.innerText = `You Lose!  Your ${userChoice} lose to bot's ${botChoice}`;
        msgg.style.backgroundColor = "#FF6868"; //red
    }
}

const playGame = (userChoice) => {
    // bot generated choice
    let botChoice = genBotChoice();

    if (userChoice === botChoice) {
        //game draw
        drawGame();
        
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = botChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = botChoice === "scissor" ? false : true;
        }
        else{
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


