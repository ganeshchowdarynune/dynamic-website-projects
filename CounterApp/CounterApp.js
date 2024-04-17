let counterValueEl = document.getElementById("counterValue");

function onIncrement() {
    let previouscounterValue = counterValueEl.textContent;
    let updatedcounterValue = parseInt(previouscounterValue) + 1;
    counterValueEl.textContent = updatedcounterValue;

    if (updatedcounterValue > 0) {
        counterValueEl.style.color = "green";
    } else if (updatedcounterValue < 0) {
        counterValueEl.style.color = "red";
    } else {
        counterValueEl.style.color = "black";
    }
}

function onDecrement() {
    let previouscounterValue = counterValueEl.textContent;
    let updatedcounterValue = parseInt(previouscounterValue) - 1;
    counterValueEl.textContent = updatedcounterValue;

    if (updatedcounterValue > 0) {
        counterValueEl.style.color = "green";
    } else if (updatedcounterValue < 0) {
        counterValueEl.style.color = "red";
    } else {
        counterValueEl.style.color = "black";
    }
}

function onReset() {
    let updatedcounterValue = 0;
    counterValueEl.textContent = updatedcounterValue;
    counterValueEl.style.color = "black";
}