
let words = [ //lista att hämta orden från!
    { ord: `puberteten` }, { ord: `irritation` }, { ord: `skallig` },
    { ord: `ljust` }, { ord: `murverk` }, { ord: `återförsäljare` },
    { ord: `auto` }, { ord: `kommunist` }, { ord: `division` },
    { ord: `mognad` }, { ord: `flocken` }, { ord: `nejlika` },
    { ord: `bajs` }, { ord: `turban` }, { ord: `radera` },
    { ord: `mascara` }, { ord: `sardinen` }, { ord: `rimfrost` },
    { ord: `brudgum` }, { ord: `ringa` }, { ord: `tid` },
    { ord: `fiske` }, { ord: `rekord` }, { ord: `turism` },
    { ord: `alarm` }, { ord: `senaste` }, { ord: `sfär` },
    { ord: `hägring` }, { ord: `uniform` }, { ord: `zoo` },
]
let AcceptedKeys = `qwertyuiopåasdfghjklöäzxcvbnm`
let word = ``;
let wordLetters = ``; //ordet vi ska gissa på
let helaOrdFel = 0;
let wrongLetters = []; //Där dom felaktiga bokstäverna ska hamna
let streck = document.querySelector(`h6`) //streck i HTML-koden!
let allLetters = []; //där ALLA användarens bokstäver ska hamna
let right = 0
let gamePlayBool = true;
let points = document.querySelector(`#guesses`)

document.addEventListener(`keypress`, (e) => { //lyssnar efter event från tangentbordsknappar


    let letter = e.key;
    let comparedLetter = compareLetters(letter);
    allLetters.push(letter)
    console.log(e.key)
    for (let index = 0; index < AcceptedKeys.length; index++) {
        if (AcceptedKeys[index] === letter) {
            gamePlayBool = true;
            break;
        }
        else {
            gamePlayBool = false;
        }
    }
    if (gamePlayBool === true) {
        if (comparedLetter == true) {
            let correctGuess = false;
            for (let i = 0; i < wordLetters.length; i++) {
                if (letter == wordLetters[i]) {
                    right++
                    console.log(right)
                    console.log(`rätt`)
                    correctGuess = true;
                    document.querySelector(`span:nth-child(${i + 1})`).innerText = letter;
                    if (wordLetters.length == right) {
                        document.querySelector(`nav`).style.display = `flex`
                        let win = document.querySelector(`h2`)
                        win.innerHTML = `Du vann spelet!`
                        right = 0;
                        toggle()
                    }
                }
            }

            if (correctGuess === false && helaOrdFel < 5) {
                helaOrdFel++

                points.innerHTML = `Wrong guesses: ` + helaOrdFel;
                wrongLetters.push(` ${letter}`);
                let usedLetters = document.querySelector(`#usedLetters`)
                usedLetters.innerHTML = `Used letters: ` + wrongLetters;

                if (helaOrdFel == 1) {
                    document.querySelector('figure').classList.add('scaffold')
                    console.log(`fel 1`)
                }
                if (helaOrdFel == 2) {
                    document.querySelector('figure').classList.add('head')
                    console.log(`fel 2`)
                }
                if (helaOrdFel == 3) {
                    document.querySelector('figure').classList.add('body')
                    console.log(`fel 3`)
                }
                if (helaOrdFel == 4) {
                    document.querySelector('figure').classList.add('arms')
                    console.log(`fel 4`)
                }
                if (helaOrdFel == 5) {
                    document.querySelector('figure').classList.add('legs')
                    console.log(`fel 5`)
                }
            }

            if (helaOrdFel == 5) {
                document.querySelector(`nav`).style.display = `flex`
                let lose = document.querySelector(`h2`)
                lose.innerText = `Du förlorade spelet!`
                toggle()
            }
        };
    }
});

function randomizer() {
    let randomNumber = Math.floor(Math.random() * words.length);
    word = words.splice(randomNumber, 1) //splicear ut vårat ord
    wordLetters = word[0].ord //gör om vårat ord till en string variabel
    console.log(wordLetters)
    streck.innerText = ``;
    for (let i = 0; i < word[0].ord.length; i++) { //sätter ut strecken
        streck.innerHTML += (`<span> _ </span>`)
    }
}

document.querySelector(`.randomizerButton`) //knapp för att slumpa fram ord ur listan
    .addEventListener(`click`, () => {
        randomizer()
        document.querySelector('figure').classList.remove('arms')
    });

let resetButton = document.querySelector(`.resetButton`) // restar gamet
let navBar = document.querySelector(`.show`)
navBar.style.display = `none`
    function toggle(){
        resetButton.style.display = `flex`}
      resetButton.addEventListener("click", () => {
        location.reload()
        startTimer();
      }); 

function toggle() {
    gamePlayBool = false;
    resetButton.style.display = `flex`;
    document.querySelector(`.rightWord`).innerText = wordLetters
    resetButton.addEventListener("click", () => {
        location.reload()

    })
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

 
       function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            document.querySelector(`nav`).style.display = `flex`
            let lose = document.querySelector(`h2`)
            lose.innerText = `Du förlorade spelet!`
            toggle();
            timer = duration;
        }
    }, 1000);
}

window.onload = randomizer()

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

