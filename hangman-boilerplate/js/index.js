let words = [ //lista att hämta orden från!
    { ord: `puberty` }, { ord: `irritation` }, { ord: `bald` },
    { ord: `light` }, { ord: `brickwork` }, { ord: `reseller` },
    { ord: `auto` }, { ord: `communist` }, { ord: `division` },
    { ord: `mature` }, { ord: `pack` }, { ord: `carnation` },
    { ord: `lollipop` }, { ord: `turban` }, { ord: `delete` },
    { ord: `mascara` }, { ord: `sardine` }, { ord: `hoarfrost` },
    { ord: `groom` }, { ord: `call` }, { ord: `time` },
    { ord: `fishing` }, { ord: `record` }, { ord: `tourism` },
    { ord: `alarm` }, { ord: `latest` }, { ord: `sphere` },
    { ord: `mirage` }, { ord: `uniform` }, { ord: `zoo` },
]
let acceptedKeys = `qwertyuiopasdfghjklzxcvbnm`
let word = ``;
let wordLetters = ``; //ordet vi ska gissa på
let mistakeCounter = 0;
let wrongLetters = []; //Där dom felaktiga bokstäverna ska hamna
let lines = document.querySelector(`h6`) //streck i HTML-koden!
let allLetters = []; //där ALLA användarens bokstäver ska hamna
let right = 0;
let gamePlayBool = true;
let wrongGuesses = document.querySelector(`#guesses`)
let userPoints = 0;
let yourPoints = document.querySelector(`#Points`) // där Alla använders poäng ska sparas
let keepPlaying = document.querySelector(`.keepPlaying`)
let timerBool = true;
let timerActive = false;


document.addEventListener(`keypress`, (e) => { //lyssnar efter event från tangentbordsknappar

    let letter = e.key;
    let comparedLetter = compareLetters(letter);
    allLetters.push(letter)

    for (let index = 0; index < acceptedKeys.length; index++) {
        if (acceptedKeys[index] === letter) {
            gamePlayBool = true;
            break;
        } 
        else {
            gamePlayBool = false;
        }
    }

    if (comparedLetter == true && gamePlayBool === true) {
        let correctGuess = false;
        for (let i = 0; i < wordLetters.length; i++) {
            if (letter == wordLetters[i]) {
                right++
                userPoints++;
                correctGuess = true;
                document.querySelector(`span:nth-child(${i + 1})`).innerText = letter;
                if (wordLetters.length == right) {
                    userPoints = userPoints + 10;
                    document.querySelector(`nav`).style.display = `flex`
                    let win = document.querySelector(`h2`)
                    stopTimer()
                    win.innerHTML = `You win! You have ${userPoints} points`
                    right = 0;
                    playing();
                }
            }
        }

        if (correctGuess === false && mistakeCounter < 5) {
            mistakeCounter++;
            userPoints--;
            wrongGuesses.innerHTML = `Wrong guesses: ` + mistakeCounter;
            wrongLetters.push(` ${letter}`);
            let usedLetters = document.querySelector(`#usedLetters`)
            usedLetters.innerHTML = `Used letters: ` + wrongLetters;

            if (mistakeCounter == 1) {
                document.querySelector(`#scaffold`).classList.remove(`hide`)
            }
            if (mistakeCounter == 2) {
                document.querySelector(`#head`).classList.remove(`hide`)
            }
            if (mistakeCounter == 3) {
                document.querySelector(`#body`).classList.remove(`hide`)
            }
            if (mistakeCounter == 4) {
                document.querySelector(`#arms`).classList.remove(`hide`)
            }
            if (mistakeCounter == 5) {
                keepPlaying.style.display = `none`
                document.querySelector(`#legs`).classList.remove(`hide`)
                document.querySelector(`nav`).style.display = `flex`
                let lose = document.querySelector(`h2`)
                stopTimer();
                lose.innerText = `You lose the game! You got ${userPoints} points.`
                toggle()
            }
        }
    };
    yourPoints.innerText = `Your Points: ${userPoints}`;
});


function randomizer() {
    let randomNumber = Math.floor(Math.random() * words.length);
    word = words.splice(randomNumber, 1) //splicear ut vårat ord
    wordLetters = word[0].ord //gör om vårat ord till en string variabel
    lines.innerText = ``;
    console.log(wordLetters)
    timerBool = true;
    startTimer();
    for (let i = 0; i < word[0].ord.length; i++) { //sätter ut strecken
        lines.innerHTML += (`<span> _ </span>`)
    }
}

document.querySelector(`.randomizerButton`) //knapp för att slumpa fram ord ur listan
.addEventListener(`click`, ()=>{
    randomizer()
    document.querySelector(`#scaffold`).classList.add(`hide`)
    document.querySelector(`#rope`).classList.add(`hide`)
    document.querySelector(`#head`).classList.add('hide')
    document.querySelector(`#body`).classList.add('hide')
    document.querySelector(`#arms`).classList.add('hide')
    document.querySelector(`#legs`).classList.add('hide')
});

let resetButton = document.querySelector(`.resetButton`) // restart gamet
let navBar = document.querySelector(`.show`)
navBar.style.display = `none`


function toggle() {
    gamePlayBool = false;
    resetButton.style.display = `flex`;
    document.querySelector(`.rightWord`).innerText = wordLetters

    resetButton.addEventListener("click", () => {
        location.reload();
        startTimer();

    })
};

keepPlaying.style.display = `none` // fortsätter spelat
keepPlaying.addEventListener(`click`, () => {
    randomizer();
    navBar.style.display = `none`
    allLetters.length = 0;
    wrongLetters.length = 0;
    usedLetters.innerHTML = `Used letters: ` +  wrongLetters;
});

function playing(){
    document.querySelector(`.rightWord`).innerText = wordLetters
    keepPlaying.style.display = `flex`
};

function compareLetters(userLetter) {
    let bool = true;
    for (let i = -1; i < allLetters.length; i++) {
        if (allLetters[i] === userLetter) {
            bool = false;
            break;
        }
    }
    return bool;
}

function startTimer() {
    let duration = 60 * 1;
    let display = document.querySelector('#time');
    let timer = duration,
        minutes, seconds;

    if (timerActive == false)
    {
        setInterval(function () {
            if (timerBool == true) 
            {
                timerActive = true;

                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display = document.querySelector('#time')
                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    document.querySelector(`nav`).style.display = `flex`
                    let lose = document.querySelector(`h2`)
                    lose.innerText = `Time out! You got ${userPoints} points.`
                    timerBool = false;
                    keepPlaying.style.display = `none`
                    toggle()
                    timer = duration;
                }
            }
        }, 1000);
    }
}

function stopTimer() {
    display = document.querySelector('#time')
    display.innerText = `PAUSED`
    timerBool = false;
    clearInterval(setInterval)
    clearInterval(startTimer)
}

window.onload = randomizer()

window.onload = function () {
    startTimer();
};