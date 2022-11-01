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
    {ord: `Mognad`},{ord:`Flocken`},{ord:`Nejlika`},
    {ord: `Loop`},{ord: `Turban`},{ord: `Radera`},
    {ord: `Mascara`},{ord: `Sardinen`},{ord: `Rimfrost`},
    {ord: `Brudgum`},{ord: `Ringa`},{ord: `Tid`},
    {ord: `Fiske`},{ord: `Rekord`},{ord:`Turism`},
    {ord: `Alarm`},{ord: `Senaste`},{ord:`Sfär`},
    {ord:`Hägring`},{ord:`Uniform`},{ord:`Zoo`},
 ]

 


document.querySelector(`.randomizerButton`)
.addEventListener(`click`, ()=>{
 let word = Math.floor(Math.random()*words.length);
console.log(word);
})




 