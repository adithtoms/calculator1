let num1 = '';
let num2 = '';
let operator = '';



document.addEventListener('DOMContentLoaded', function () {

    const numbers = document.querySelectorAll('#number')
    const operators = document.querySelectorAll('#operator')
    const allclear = document.querySelector('#allclear')
    const del = document.querySelector("#delete")
    const equals = document.querySelector("#equals")
    const decimal = document.querySelector("#decimal")
    const input = document.querySelector('.input')
    const output = document.querySelector('.output')

    numbers.forEach((number) => number.addEventListener('click', function (e) {
        displayNumber(e.target.textContent);
        input.textContent = num2
    }));

    operators.forEach((oper) => oper.addEventListener('click', function (e) {
        displayOperator(e.target.textContent);
        input.textContent = num1 + " " + operator + " " + num2;
    }))

    allclear.addEventListener('click', function () {
        num2 = '';
        input.textContent = num2;
        output.textContent=' '
    })

    del.addEventListener('click', function () {
        num2 = num2.slice(0, -1);

        input.textContent = num2;
    })

    equals.addEventListener('click', function () {
        let result = (calculate(operator, num1, num2));
        num2 = result;
        output.textContent = Math.round(result * 1000) / 1000;

    })

})


function displayNumber(num) {
    if (num2.length <= 5) {
        num2 += num;
    }
}

function displayOperator(oper) {
    operator = oper;
    num1 = num2;
    num2 = '';


}


function add(a, b) {
    return a + b;

}
function subtract(a, b) {

    return a - b;

}
function multiply(a, b) {

    return a * b;

}
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
}

function calculate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }

}