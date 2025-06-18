let rand_no=(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');


let prevGuess=[];
let numgGuess=1;

let playGame=true;
if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess))
    {alert('Please enter a valid number.')}
    else if(guess<1)
    {alert('Please enter a number more than 1.')}
    else if(guess>100)
    {alert('Please enter a number less than 100.')}
    else
    {
        prevGuess.push(guess);
        if(numgGuess===11)
        {
            displayGuess(guess);
            displaymessage(`Game Over. Random number was ${rand_no}`);
            endGame();
        }
        else
        {
            displayGuess(guess)
            {
                checkGuess(guess)
            }
        }
    }
}

function checkGuess(guess){
    if(guess===rand_no)
    {
        displaymessage(`You guessed it right`);
        endGame();
    }       
    else if(guess<rand_no)
    {
        displaymessage(`Number id TOOO low`);
    }
    else if(guess>rand_no)
    {
        displaymessage(`Number is TOO high`);
    }
}
function displayGuess(guess)
{
    userInput.value='';
    guessSlot.innerHTML+=`${guess}   `
    numgGuess++;
    remaining.innerHTML=`${11-numgGuess}`;
}
function displaymessage(message)
{
    lowhigh.innerHTML=`<h2>${message}</h2>`;
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame()
{
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        rand_no=(parseInt(Math.random()*100+1));
        prevGuess=[];
        numgGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numgGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
})
}