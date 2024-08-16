const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn");
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");

function getRandomChar () {
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += getRandomChar()
    }
    return password;
}

function displayPassword() {
    firstPassword.textContent = generatePassword();
    secondPassword.textContent = generatePassword();
}