/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */


let words = [ //lista att hämta orden från!
    {ord: `Puberteten`},{ord: `Irritation`},{ord: `Skallig`},
    {ord: `Ljust`},{ord: `Murverk`},{ord: `Återförsäljare`},
    {ord: `Auto`},{ord: `Kommunist`},{ord: `Division`},
    {ord: `Mognad`},{ord: `Flocken`},{ord: `Nejlika`},
    {ord: `Loop`},{ord: `Turban`},{ord: `Radera`},
    {ord: `Mascara`},{ord: `Sardinen`},{ord: `Rimfrost`},
    {ord: `Brudgum`},{ord: `Ringa`},{ord: `Tid`},
    {ord: `Fiske`},{ord: `Rekord`},{ord: `Turism`},
    {ord: `Alarm`},{ord: `Senaste`},{ord: `Sfär`},
    {ord: `Hägring`},{ord: `Uniform`},{ord: `Zoo`},
  ]

let word = `word`;

document.addEventListener(`keypress`, (e) => { //lyssnar efter event från tangentbordsknappar
   console.log(`hej hej ${e.key}`)
    for (let i = 0; i < word.length; i++) {
        if (e.key == word[i]) {
        console.log(`rätt på plats ${i}`)
        }
        else {
            console.log(`${e.key}`)
        }
    }
})

document.querySelector(`.randomizerButton`) //knapp för att slumpa fram ord ur listan
.addEventListener(`click`, ()=>{
 let randomNumber = Math.floor(Math.random()*words.length);
 word = words.splice(randomNumber, 1)
console.log(word[0].ord)
let streck = document.querySelector(`h6`) 
   streck.innerText = ``;
      for (let i = 0; i < word[0].ord.length; i++ ) {
         streck.innerText += (' _ ') 
         console.log(word[0].ord.length)}
})


// GENERERA STRECK EFTER ORDETS LÄNGD

  
    
