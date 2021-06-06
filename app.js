const firstDisplay = document.querySelector('.display-1');
const secondDisplay = document.querySelector('.display-2');
const temporaryDisplay = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearLast = document.querySelector('.last-entity-clear');
const clearAll = document.querySelector('.all-clear');

let displayOne = '';
let displayTwo = '';
let operator = '';
let result = '';
let lastOperation = '';

numbers.forEach(number => {
    number.addEventListener('click', (e)=>{
        displayTwo += e.target.innerText;
        secondDisplay.innerText = displayTwo;
    })
})

// <<<<<<< HEAD

// =======
operations.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        const operationName = e.target.innerText;
        if(displayOne && displayTwo && lastOperation){
            mathOperation()
        }
        else{
            result = parseFloat(displayTwo)
        }
        displayOne += displayTwo + ' '  + e.target.innerText;
        firstDisplay.innerText = displayOne;
        secondDisplay.innerText = ' ';
        
        displayTwo = ' '
        clearVal(operationName);
        lastOperation = operationName;
    })
})

function clearVal(){
    secondDisplay.innerText = ' '
    displayTwo = ' '
    console.log(result)
    temporaryDisplay.innerText = result;
}

function mathOperation(){
if(lastOperation === 'x'){
    result = parseFloat(result) * parseFloat(displayTwo);
}
else if (lastOperation === '+'){
    result = parseFloat(result) + parseFloat(displayTwo);
}
else if (lastOperation === '-'){
    result = parseFloat(result) - parseFloat(displayTwo);
}
else if (lastOperation === '/'){
    result = parseFloat(result) / parseFloat(displayTwo);
}
}

equal.addEventListener('click', (e)=>{
if(!displayOne || !displayTwo) return;

mathOperation();
clearVal();
secondDisplay.innerText = result;
temporaryDisplay.innerText = ''
displayTwo = result;
firstDisplay.innerText = '';
displayOne = ''

})


