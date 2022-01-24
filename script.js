let displayNumber = 0;
let firstValue = null
let secondValue = null
let firstSign = null
let secondSign = null
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


function clickButtons(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function() {
            if(allButtons[i].classList.contains('numbers')){
                inputNumber(allButtons[i].value)
                //update after each number was changed
                updateDisplay()
            }else if(allButtons[i].classList.contains('clear')){
                displayNumber = 0;
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
        if(displayNumber === 0){
            displayNumber = number
        }else{
            displayNumber += number
        }
    }else{
        if(displayNumber === firstValue){
            displayNumber = number
        }else{
            displayNumber += number
        }
        
    }
}

clickButtons()

function inputSign(op){
    firstSign = op
    firstValue = displayNumber
}

function inputEquals(){
    if(firstSign === "+"){
        return 
    }
}