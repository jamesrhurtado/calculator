const displayField = document.querySelector(".display")

const allButtons = document.querySelectorAll("button")

let sum = 0;
let op = "";

function clickButtons(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function() {
            if(allButtons[i].classList.contains('numbers')){
                displayField.textContent = allButtons[i].value
            }
        }) 
    }
}

clickButtons();