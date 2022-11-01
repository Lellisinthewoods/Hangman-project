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
let wordLetters = ``


document.addEventListener(`keypress`, (e) => { //lyssnar efter event från tangentbordsknappar
let letter = e.key;

    for (let i = 0; i < wordLetters.length; i++) {
        if (letter == wordLetters[i]) {
            console.log(wordLetters)
            console.log(`rätt`)
            break;
        }
        else {
            console.log(`fel`)
            console.log(wordLetters)
            console.log(letter)
        }
    }
});

function randomizer(){
 let randomNumber = Math.floor(Math.random()*words.length);
 word = words.splice(randomNumber, 1)
 wordLetters = word[0].ord
 console.log(word[0].ord)
 console.log(wordLetters)
 let streck = document.querySelector(`h6`) 
 streck.innerText = ``;
 for (let i = 0; i < word[0].ord.length; i++ ) {
    streck.innerText += (' _ ') 
}
}

document.querySelector(`.randomizerButton`) //knapp för att slumpa fram ord ur listan
.addEventListener(`click`, ()=>{
randomizer()
}
)

let resetButton= document.querySelector(`.resetButton`)

    function toggle(){
        slider.classList.toggle("show");
      }
      resetButton.addEventListener("click", () => {
        let resetButton = Math.floor(Math.random()*words.length);
        word=words.splice (resetButton, 1)

      });
