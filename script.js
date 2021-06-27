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

const numberStore = {
    firstNumber: null,
    secondNumber: null,
    operation: null
};

const updateDisplay = (buttonText) => {
    let displayNode = document.getElementById('output');

    if (displayNode.innerText.length < 11) {
        if (displayNode.innerText === '0') {
            displayNode.innerText = buttonText;
        } else {
         displayNode.innerText += buttonText;            
        }
 
    }

};

const numButtons = document.querySelectorAll('.number');

numButtons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        let textToAdd = e.target.childNodes[0].textContent;
        updateDisplay(textToAdd);
    })
});



// calculator flow: number => operation => number => operation => 