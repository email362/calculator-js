// add function
const add = (a,b) => a+b;
// subtract function
const subtract = (a,b) => a-b;
// multiply function
const multiply = (a,b) => a*b;
// divide function
const divide = (a,b) => {
    
    if(b===0) {
        alert('YOU SHALL NOT PASS!(TLDR: Cant divide by 0)');
        return 0;
    }
    
    return a/b;
}
// operate function takes in one of the above functions, returns function call result
const operate = (math, a, b) => {

    
    return math(a,b);
};
// used to wipe the screen when inputting a second number
const setDisplay = (str) => {
    // console.log('Set Display length: ' + String(str).length);
    let display = document.getElementById('output');
    if(String(str).length < 11) {
            display.textContent = str;
            // console.log('Set Display: ' + display.textContent)

    } 
    else {
        display.textContent = 'Error';
    }

};
// used to constantly update the screen with the number being put in.
const updateDisplay = (str) => {
    // console.log('Update Display length: ' + getDisplay().length);
    if(getDisplay().length < 9) {
    let display = document.getElementById('output');
    display.textContent += str;
    // console.log('Update Display: ' + display.textContent);        
    }

}
// grab the str on the display to make sure there is no overflow
const getDisplay = () => {
    let displayElement = document.getElementById('output');
    return displayElement.textContent;
};
// object that stores all the data used in the calculator
const numberStore = {
    firstNumber: 0,
    secondNumber: null,
    operation: null,
    displaySwitch: 0
};

// set function to save the first,second, and operation in the object
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

// Allows numbers to add values to the display
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

// Allows addition and operating on numbers by continuously pressing add
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

// Allows subtraction and continous subtraction 
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

// same as sub and add, but with multiplication as the operator
const multiplyButton = document.getElementById('multiply');

multiplyButton.addEventListener('click', () => {
    if(numberStore.operation == 'multiply') {
        setStore(null, Number(getDisplay()),null);
        let result = operate(multiply,numberStore.firstNumber, numberStore.secondNumber);
        setDisplay(result);
        setStore(result,null,null);
        numberStore.operation = 'multiply';
        numberStore.secondNumber = null;
        numberStore.displaySwitch = 1;
    }
    else {
        setStore(Number(getDisplay()),null,'multiply');
        numberStore.displaySwitch = 1;
    }    
});

// the same as the other operation functions
const divideButton = document.getElementById('divide');

divideButton.addEventListener('click', () => {
    if(numberStore.operation == 'divide') {
        setStore(null, Number(getDisplay()),null);
        let result = operate(divide,numberStore.firstNumber, numberStore.secondNumber);
        setDisplay(result);
        setStore(result,null,null);
        numberStore.operation = 'divide';
        numberStore.secondNumber = null;
        numberStore.displaySwitch = 1;
    }
    else {
        setStore(Number(getDisplay()),null,'divide');
        numberStore.displaySwitch = 1;
    }       
});

// allows the use of floating point numbers and checks to make sure
// there's only one decimal point in use
const decimalButton = document.getElementById('decimal');

decimalButton.addEventListener('click', () => {
    if(getDisplay().includes('.') === false) {
        updateDisplay('.');
    } else if(numberStore.displaySwitch === 1) {
        setDisplay('0.');
        numberStore.displaySwitch = 0;
    }
});

// requires both numbers and an operator, then does the operation
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

// reset button used to reset everything to the base state
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
    numberStore.firstNumber = 0;
    numberStore.secondNumber = null;
    numberStore.operation = null;
    numberStore.displaySwitch = 0;
    setDisplay('0');
});

// allows you to backspace a number if you changed your mind
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