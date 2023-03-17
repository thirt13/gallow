//import worlds
//import { arrayWords } from './words.js'

//parametrs
let lengthWords = arrayWords.length
let countFalse = 0
const countToEndGame = 8    
let textWin = ""

//choose a random word
let word =  arrayWords[Math.floor(Math.random() * lengthWords)].toUpperCase()
//console.log(word)

//prepare fields for filling in letters 
let arrayWord = word.split("")
const finalSpace = []
const arrayFLetter = []
arrayWord.forEach((letter,index) => {
    letter ==" " ?   finalSpace[index] = "-": finalSpace[index] = "_" 
    letter ==" " ?   arrayWord[index] = "-" : null
})


//show on the page
let paragraph = document.querySelector("#place p")
paragraph.textContent = finalSpace.join(" ")

let falseLetter = document.querySelector("p.small span")
falseLetter.textContent = arrayFLetter.join(", ")

//game is ended, show result and create button for new game
const endGame = (win)=>{
    document.querySelector("#gallowsIn").remove()

    win ? textWin = "you WIN, you LIVE : " : textWin = "prohra : " 
    paragraph.textContent = textWin + word
    paragraph.setAttribute("class", "red")

    let button = document.createElement("a")
    button.setAttribute("href", "#")
    button.setAttribute("class", "myButton reduce")
    button.setAttribute("onclick", "location.reload()")
    button.textContent="nová hra"
    document.querySelector("#place").appendChild(button)

}

// searching pressed letter in secred word and processing 
const searchLetter = (pressKey) =>{
    let isOK = 0
    arrayWord.forEach((letter,index)=>{
        if (pressKey == letter){
            isOK = 1
            finalSpace[index] = pressKey
            paragraph.innerHTML = finalSpace.join(" ")
        } 
    })
    if(isOK==0){
        countFalse++
        arrayFLetter.push(pressKey)
        falseLetter.textContent = arrayFLetter.join(", ")
        // drawing Gallow
        drawingGallows(countFalse)

    } 
    //the number of errors is the same as the number of attempts
    countFalse == countToEndGame ? endGame(0) : null;
    //the winner
    !finalSpace.includes("_")? endGame(1) : null;
}



//processed input
document.querySelector('#gallowsIn').addEventListener( "input", (event)=> {
    searchLetter(event.data.toUpperCase())
    setTimeout(()=>event.target.value="", 800);
})

