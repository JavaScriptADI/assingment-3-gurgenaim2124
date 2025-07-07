let randomNum = Math.floor(Math.random() * 10 ) + 1 
let user = prompt("Guess a number beteween 1 and 10 " )

if (user > 10){ 
    console.log("no exist")
}
else if (user > randomNum){
    console.log("Too high")
}else if ( user < randomNum){
    console.log("Too low")
}else if (user = randomNum){
    console.log("that's correct")
}