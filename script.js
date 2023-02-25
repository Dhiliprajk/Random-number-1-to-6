let dice = {
    sides: 6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
printNumberInDice = (num) => {
    let placeHolder = document.getElementById('placeholder');
    placeHolder.innerHTML = num;
}
let button = document.getElementById('button');
button.onclick = function () {
    let result = dice.roll();
    printNumberInDice(result);
}



