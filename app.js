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

<<<<<<< HEAD

=======
operations.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        displayOne += displayTwo + ' '  + e.target.innerText;
        firstDisplay.innerText = displayOne;
        secondDisplay.innerText = ' ';
        
        displayTwo = ' '
    })
})
>>>>>>> 6638b8b8411a8c466dee63d8c2adc279ef3d4b7f
