// Display generated pin
function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    console.log(pin);
    if (pin > 1000) {
        document.getElementById('generate-pin-display').value = pin;
    }
}


// submit pin box display
function parentDigit() {
    let digit = event.target.innerText;
    if (isNaN(digit)) {
        // Handel backspace
        if (digit === '<') {
            var value = document.getElementById('display-pin').value;
            document.getElementById('display-pin').value = value.substr(0, value.length - 1);
        }
        // Handel clear button
        if (digit === 'C') {
            document.getElementById('display-pin').value = "";
        }
    }
    else {
        const digitInput = document.getElementById('display-pin');
        digitInput.value = digitInput.value + digit;
    }
}

//  verify Pin
function verifyPin() {
    const generatePin = document.getElementById('generate-pin-display').value;
    const inputPin = document.getElementById('display-pin').value;
    if (generatePin === inputPin) {
        correctMsg('success', 'wrong');
    }
    else {
        correctMsg('wrong', 'success');
    }
}


function correctMsg(success, wrong) {
    document.getElementById('verify-' + success + '-msg').style.display = "block";
    document.getElementById('verify-' + wrong + '-msg').style.display = "none";
}