let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);

    if (gussedNumber > randomNumber) {
        gameResult.textContent = "Too high! Try Again...";
        gameResult.style.background = "red";
    } else if (gussedNumber < randomNumber) {
        gameResult.textContent = "Too low! Try Again...";
        gameResult.style.background = "#1e217c";
    } else if (gussedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You gussed the right number...";
        gameResult.style.background = "green";
    } else {
        gameResult.textContent = "Please, Enter valid input";
        gameResult.style.background = "black";
    }

}