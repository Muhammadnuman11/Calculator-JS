// console.log('Calculater');

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        // console.log('Value of Button :', buttonText);

        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}