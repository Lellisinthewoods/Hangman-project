/**
 För att toggla SVG:en
 
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 document.querySelector('figure').classList.add('scaffold')
 */


 let words = [ //lista att hämta orden från!
 {ord: `puberteten`},{ord: `irritation`},{ord: `skallig`},
 {ord: `ljust`},{ord: `murverk`},{ord: `återförsäljare`},
 {ord: `auto`},{ord: `kommunist`},{ord: `division`},
 {ord: `mognad`},{ord: `flocken`},{ord: `nejlika`},
 {ord: `bajs`},{ord: `turban`},{ord: `radera`},
 {ord: `mascara`},{ord: `sardinen`},{ord: `rimfrost`},
 {ord: `brudgum`},{ord: `ringa`},{ord: `tid`},
 {ord: `fiske`},{ord: `rekord`},{ord: `turism`},
 {ord: `alarm`},{ord: `senaste`},{ord: `sfär`},
 {ord: `hägring`},{ord: `uniform`},{ord: `zoo`},
]

let word = ``;
let wordLetters = ``; //ordet vi ska gissa på
let helaOrdFel = 0;
let wrongLetters = []; //Där dom felaktiga bokstäverna ska hamna

document.addEventListener(`keypress`, (e) => { //lyssnar efter event från tangentbordsknappar
let letter = e.key;
let correctGuess = false;
    for (let i = 0; i < wordLetters.length; i++) {
        
        
        if (letter == wordLetters[i]) {
            console.log(`rätt`)
            correctGuess = true;
        }
    }
    if (correctGuess === false) {
        helaOrdFel++
        
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
});

function randomizer(){
    let randomNumber = Math.floor(Math.random()*words.length);
    word = words.splice(randomNumber, 1) //splicear ut vårat ord
    wordLetters = word[0].ord //gör om vårat ord till en string variabel
    console.log(wordLetters)
    let streck = document.querySelector(`h6`) 
     streck.innerText = ``;

    for (let i = 0; i < word[0].ord.length; i++ ) { //sätter ut strecken
        streck.innerText += (' _ ') 
    }
}

document.querySelector(`.randomizerButton`) //knapp för att slumpa fram ord ur listan
.addEventListener(`click`, ()=>{
    randomizer()
});

let resetButton= document.querySelector(`.resetButton`) // restar gamet

    function toggle(){
        slider.classList.toggle("show");
      }
      resetButton.addEventListener("click", () => {
        let resetButton = Math.floor(Math.random()*words.length);
        word=words.splice (resetButton, 1)

      });
