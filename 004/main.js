//Task 1 : random number guessing game



let num = prompt(" Guess a number between 1 and 10")
num = parseInt(num);

const randomNum =  Math.floor(Math.random()*10) + 1

 if (num < randomNum){
    console.log("Too low!")
}else if (num > randomNum ) {
    console.log("Too high!")
}

// Task 2 : string analyzer

let sentence = prompt("Enter a sentence");
let totalCharacters = sentence.length 
let words = sentence.split(" ")
let totalWords = words.length
let containJs = sentence.includes("JavaScript")



console.log("Total characters: " + totalCharacters)
console.log(`Total words: ${totalWords}`)
console.log(`Contains: ${containJs}`)

//Task 3: Math Function Application



let text = prompt("Enter three number ")
let textNum = text.split(",")
text = parseInt(text)

let [ num1, num2 ,num3 ] = numbers
let smallest = Math.min( num1, num2 ,num3 )
let largest = Math.max(num1, num2 ,num3 )
let sum = num1 + num2 + num3
let average = Math.round(sum/3)

console.log(`Smallest number: ${smallest}`)
console.log(`Largest number: ${largest}`)
console.log(`Average (rounded): ${average}`)



//Task 4: Random Password Generator 

// ?????


// Task 5: Age Group Classifier

// let article = prompt("Enter your age:")
// let age = article.numbers


// if(age>=0 && age<=12){
//     console.log("You are classified as: Child ")
// }else if (age>=13&&age<=19){
//     console.log("You are classified as: Teen")
// }else if (age>=20&&age<=64){
//     console.log("You are classified as: Adult")
// }else if (age>=65){
//     console.log("You are classified as: Seniors")
// }  


// ?????? 











