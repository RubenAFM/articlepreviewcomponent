// variables

buttonShare = document.querySelector('.share__button__item');
toolTip = document.querySelector('.tooltip__box');
console.log(toolTip);


console.log(buttonShare);


// listener

clickButton();

function clickButton() {
    buttonShare.addEventListener('click', result);
    
}

// logic

function result(e) {
    if (toolTip.style.display === 'flex') {
        toolTip.style.display = 'none';
        
    } else {
        toolTip.style.display = 'flex';
    }
}