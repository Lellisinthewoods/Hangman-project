/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */


let words = [
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

let word = `word` //senare word = words.ord

document.addEventListener(`keyup`, (e) => {
   console.log(`hej hej ${e.target.value}`)
    for (let i = 0; i < word.length; i++) {
        if (e.target.innerText == word[i]) {
        console.log(`rätt på plats ${i}`)
        }
        else{
         console.log(`fel!`)
        }
    }
});
