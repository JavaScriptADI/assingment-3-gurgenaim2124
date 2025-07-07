let string = "Anfjkbdklgijseknfld9098u5jnrmsngjbgkmlsdlojdign"
let passwordLenght = 8 
let password = ""

for(let i = 0; i < passwordLenght; i++){
    let randomIndex = Math.floor(Math.random() * string.length);
    password += string[randomIndex]
}

console.log("Generated password:", password);