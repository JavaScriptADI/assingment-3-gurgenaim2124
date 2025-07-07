let user = prompt("Enter a sentence")

let totalNum = user.length
let Words = user.split(" ")
let TotalWords = Words.length
let containsJs = user.toLowerCase().includes("JavaScript")



console.log(`Total characters: ${totalNum}`)
console.log(`Total words: ${TotalWords}`)
console.log(`Contains: ${containsJs}`)


