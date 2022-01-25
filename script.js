let displayNumber = 0;
let firstValue = null
let secondValue = null
let firstSign = null
let secondSign = null
let result = 0
let op = "";
const displayField = document.querySelector(".display")

const allButtons = document.querySelectorAll("button")

function updateDisplay(){
    const displayField = document.querySelector(".display")
    displayField.innerHTML = displayNumber
    if(displayNumber.length > 9){
        //displays number from index 0 to 8 (9 is not displayed)
        displayField.innerHTML = displayNumber.substring(0,9)
    }
}

updateDisplay()


function clickButtons(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function() {
            if(allButtons[i].classList.contains('numbers')){
                inputNumber(allButtons[i].value)
                //update after each number was changed
                updateDisplay()
            }else if(allButtons[i].classList.contains('clear')){
                displayNumber = '0';
                firstSign = null
                firstValue = null
                secondValue = null
                updateDisplay()
            }else if(allButtons[i].classList.contains('op')){
                inputSign(allButtons[i].value)
            }else if(allButtons[i].classList.contains('equals')){
                inputEquals()
                updateDisplay()
            }
        }) 
    }
}

function inputNumber(number){
    //1st number
    if(firstValue === null){
        if(displayNumber === 0 || displayNumber === "0"){
            displayNumber = number
        }else{
            displayNumber += number
        }
    }else{
        //second number
        if(displayNumber === firstValue){
            displayNumber = number
        }else{
            displayNumber += number
        }
        
    }
}

clickButtons()

function inputSign(op){
    if(firstSign != null){

    }else{
        firstValue = displayNumber
        firstSign = op
    }
}

function inputEquals(){
    if(firstSign === null){
        displayNumber = displayNumber
    }else if(secondSign != null){
        //second operation
    }else{
        secondValue = displayNumber
        result = calculate(Number(firstValue), Number(secondValue), firstSign)
        displayNumber = result.toString()
    }
}

function calculate(first, second, sign){
    if(sign === '+'){
        return first + second
    }else if(sign === '-'){
        return first - second
    }else if(sign === '*'){
        return first*second
    }else if(sign === '/'){
        if(second === 0){
            return "no"
        }else{
            return first/second
        }
    }
}