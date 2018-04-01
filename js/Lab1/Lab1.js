// Vlad63
function okBtn(){
    var casinoBet = document.getElementById('bet').value;
    var okB = document.getElementById('bet');
    var okBtn = document.getElementById('okBet');
    var btn = document.getElementById('btn');

    if(casinoBet - casinoBet != 0 || casinoBet == '') {
        var wBet = document.getElementById('waringBet');
        wBet.textContent = "Make a bet!";
    }
    else{
        document.getElementById('waringBet').style.display = 'none';
        document.getElementById('waringBlock').style.display = 'none';
        document.getElementById('waringBlockthird').style.display = 'none';
        okB.disabled = true;
        okBtn.disabled = true;
        btn.disabled = false;
    }
}

function btn(){
    var casinoBet = document.getElementById('bet').value;

    if(casinoBet - casinoBet != 0 || casinoBet == ''){
        var wBet = document.getElementById('waringBet');
        wBet.textContent = "Make a bet!";
        var okB = document.getElementById('okBet');
        okB.disabled = false;
    }
    else{
        secondStep();
    }
}

function secondStep(){
    var okBtn = document.getElementById('okBet');
    var btn = document.getElementById('btn');

    if(okBtn.disabled != true){
        var wBs = document.getElementById('waringBlock');
        var wBt = document.getElementById('waringBlockthird');

        wBs.textContent = "Waring!";
        wBt.textContent = "Please press 'Ok'!";
        btn.disabled = true;
        throw new Error();
    }
    else{
        btn.disabled = false;
    }
    document.getElementById('waringBet').style.display = 'none';
    var check = {
        first: document.getElementById('firstNumber').value,
        second: document.getElementById('secondNumber').value,
        third: document.getElementById('thirdNumber').value,
        fourth: document.getElementById('fourthNumber').value,
        fifth: document.getElementById('fifthNumber').value
    };

    for (i in check) {
        if(check[i] == 1 || check[i] == 2 || check[i] == 3 || check[i] == 4 || check[i] == 5){
            continue;
        }
        else{
            var wB = document.getElementById('waringBlock');
            var wBs = document.getElementById('waringBlockSecond');

            wB.textContent = "Waring!";
            wBs.textContent = "Enter a number between 1 and 5!";
            throw new Error();
        }
    }
    document.getElementById('waringBlock').style.display = 'none';
    document.getElementById('waringBlockSecond').style.display = 'none';

    btn.disabled = true;
    var result = [];

    for(i=0;i<5;i++){
        var randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;;
        result.push(randomNumber);
    }
    var el = document.getElementById('firstRandom');
    var e2 = document.getElementById('secondRandom');
    var e3 = document.getElementById('thirdRandom');
    var e4 = document.getElementById('fourthRandom');
    var e5 = document.getElementById('fifthRandom');
    el.textContent = result[0];
    e2.textContent = result[1];
    e3.textContent = result[2];
    e4.textContent = result[3];
    e5.textContent = result[4];

    var guess = 0;
    check.first == result[0] ? document.getElementById("firstRandom").style.color = "#33cc33" : document.getElementById("firstRandom").style.color = "#ff0000";
    check.first == result[0] ? guess++ : guess == guess;

    check.second == result[1] ? document.getElementById("secondRandom").style.color = "#33cc33" : document.getElementById("secondRandom").style.color = "#ff0000";
    check.second == result[1] ? guess++ : guess == guess;

    check.third == result[2] ? document.getElementById("thirdRandom").style.color = "#33cc33" : document.getElementById("thirdRandom").style.color = "#ff0000";
    check.third == result[2] ? guess++ : guess == guess;

    check.fourth == result[3] ? document.getElementById("fourthRandom").style.color = "#33cc33" : document.getElementById("fourthRandom").style.color = "#ff0000";
    check.fourth == result[3] ? guess++ : guess == guess;

    check.fifth == result[4] ? document.getElementById("fifthRandom").style.color = "#33cc33" : document.getElementById("fifthRandom").style.color = "#ff0000";
    check.fifth == result[4] ? guess++ : guess == guess;

    var casinoBet = document.getElementById('bet').value * 1;
    var casinoWinBet = document.getElementById('winBet');
    var guessText = document.getElementById('guess');
    var resetFormText = document.getElementById('resetForm');
    if(guess == 0){
        casinoWinBet.textContent = "Your winnings = " + (casinoBet*0) + ". Total amount: " + (casinoBet - casinoBet);
        guessText.textContent = "You guessed " + guess + " number! Try again! Don't worry";
        resetFormText.textContent = "Please press 'Reset form'";
    }
    else if(guess == 1 || guess == 2 || guess == 3){
        casinoWinBet.textContent = "Your winnings " + (casinoBet*0.1) + ". Total amount: " + (casinoBet + (casinoBet*0.1));
        guessText.textContent = "You guessed " + guess + " number! Try again! Next time, you will have more luck!";
        resetFormText.textContent = "Please press 'Reset form'";
    }
    else if(guess == 4 || guess == 5){
        casinoWinBet.textContent = "Your winnings " + (casinoBet*0.25) + ". Total amount: " + (casinoBet + (casinoBet*0.25));
        guessText.textContent = "You guessed " + guess + " number! Congratulations!";
        resetFormText.textContent = "Please press 'Reset form'";
    }
}

function myFunction() {
    document.getElementById("myForm").reset();
    location.reload();
}