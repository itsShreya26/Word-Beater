
window.addEventListener("load", init)
const timeoption = document.querySelector("#timeoption")
const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const message = document.querySelector("#message")


timeoption.addEventListener("change",function(e){
    time = e.target.value
})

let score = 0
let time=0


// Array of Words
const words = [
'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'defintion',
'bonjour',
'hola',
'surprise'
];

function init(){
     showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
    setInterval(chechStatus,50)
}


function chechStatus(){
    if(time==0)
    message.innerHTML = "Game-over!!!!"
}

function countdown(){
    if(time>0){
        time--
       
    }
    console.log(time)
    timeDisplay.innerHTML = time
}


function showWords(words){
   const randomIndex = Math.floor(Math.random()*words.length)
//    console.log(words[randomIndex])
currentWord.innerHTML = words[randomIndex]
}

function matchWords(){
    if(wordInput.value ==  currentWord.innerHTML){
        return true
    } else{
        return false
    }
}

function startMatch(){
    console.log("let's begin")
    if(matchWords()){
    showWords(words)
    message.innerHTML = "Well done!"
    wordInput.value = ''
    score++
    time = 8
}else{
    message.innerHTML = "not succeeded"
}
scoreDisplay.innerHTML = score
}



