// add function
const add = (a,b) => a+b;
// subtract function
const subtract = (a,b) => a-b;
// multiply function
const multiply = (a,b) => a*b;
// divide function
const divide = (a,b) => a/b;
// operate function takes in one of the above functions, returns function call result
const operate = (math, a, b) => {

    
    return math(a,b);
};

const setDisplay = (str) => {
    let display = document.getElementById('output');
            display.textContent = str;
            console.log('Set Display: ' + display.textContent)

};

const updateDisplay = (str) => {
    let display = document.getElementById('output');
    display.textContent += str;
    console.log('Update Display: ' + display.textContent);
}

const getDisplay = () => {
    let displayElement = document.getElementById('output');
    return displayElement.textContent;
};

const numberStore = {
    firstNumber: 0,
    secondNumber: null,
    operation: null,
    displaySwitch: 0
};
// all for adding numbers to display

const setStore = (first, second, operand) => {
    if (first !== null) {
        numberStore.firstNumber = Number(first);
    }
    if (second !== null) {
        numberStore.secondNumber = Number(second);
    }
    if(operand !== null) {
            numberStore.operation = operand;
    }
};

const numButtons = document.querySelectorAll('.number');

numButtons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        let textToAdd = e.target.childNodes[0].textContent;
        if (getDisplay() == '0') {
            setDisplay(textToAdd);
        }else if(numberStore.displaySwitch == 1) {
            setDisplay(textToAdd);
            numberStore.displaySwitch = 0;
        } else {
            updateDisplay(textToAdd);
        }
    })
});

const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
        
    if(numberStore.operation == 'add') {
        setStore(null,Number(getDisplay()),null);
        let result = operate(add, numberStore.firstNumber, numberStore.secondNumber);
        setDisplay(result);
        setStore(result,null,null);
        numberStore.operation = 'add';
        numberStore.secondNumber = null;
        numberStore.displaySwitch = 1;

    }
    else {
        setStore(Number(getDisplay()),null,'add');
        numberStore.displaySwitch = 1;        
    }        

});

const subButton = document.getElementById('subtract');

subButton.addEventListener('click', () => {
    if(numberStore.operation == 'subtract') {
        setStore(null, Number(getDisplay()),null);
        let result = operate(subtract,numberStore.firstNumber, numberStore.secondNumber);
        setDisplay(result);
        setStore(result,null,null);
        numberStore.operation = 'subtract';
        numberStore.secondNumber = null;
        numberStore.displaySwitch = 1;
    }
    else {
        setStore(Number(getDisplay()),null,'subtract');
        numberStore.displaySwitch = 1;
    }
});

const equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', () => {
    if(numberStore.operation !== null) {
            setStore(null, Number(getDisplay()),null);
        let result;
        switch (numberStore.operation) {
            case "add":
                result = operate(add, numberStore.firstNumber, numberStore.secondNumber);
                break;
            case "subtract":
                result = operate(subtract, numberStore.firstNumber, numberStore.secondNumber);
                break;
            case "multiply":
                result = operate(multiply, numberStore.firstNumber, numberStore.secondNumber);
                break;
            case "divide":
                result = operate(divide, numberStore.firstNumber, numberStore.secondNumber);
        }
        setDisplay(result);
        setStore(result,null,null);
        numberStore.operation = null;
        numberStore.secondNumber = null;
        numberStore.displaySwitch = 1;
    }
});

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
    numberStore.firstNumber = 0;
    numberStore.secondNumber = null;
    numberStore.operation = null;
    numberStore.displaySwitch = 0;
    setDisplay('0');
});

const backButton = document.getElementById('back');

backButton.addEventListener('click', () => {
    let currentDisplay = getDisplay();
    if(currentDisplay.length === 1) {
        setDisplay('0');
    }
    else {
        setDisplay(currentDisplay.slice(0,-1));        
    }

});