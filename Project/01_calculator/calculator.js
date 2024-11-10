document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.box');
    const display = document.getElementById('nothing');
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.innerText;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                result = '';
                display.innerText = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    result = eval(previousInput + operator + currentInput);
                    display.innerText = result;
                    previousInput = result;
                    currentInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = eval(previousInput + operator + currentInput);
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                    display.innerText = previousInput + ' ' + operator;
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
