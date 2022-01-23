let displayNumber = 0;
let op = "";
const displayField = document.querySelector(".display")

const allButtons = document.querySelectorAll("button")

function updateDisplay(){
    const displayField = document.querySelector(".display")
    displayField.innerHTML = displayNumber
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
            }
        }) 
    }
}


function inputNumber(number){
    //1st number
   if(displayNumber === 0){
        displayNumber = number
    }else{
        displayNumber += number
    }
}

clickButtons()