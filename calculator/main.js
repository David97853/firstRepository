
const numbers = Array.from(document.getElementsByClassName("calc-btn-num"));
const display = document.getElementById('calc-display-val');
const clearButton = document.getElementById("calc-clear");
const operatorElements = Array.from(document.getElementsByClassName("calc-btn-operator"));
let     numberArray = '';
let     secondNumberString = "";
let     operatorArray = '';
let   lastResult = 0;


let arrayString = []




numbers.forEach((num, index) => {

    if(index< 9){
        num.innerHTML = index +1
    }
    else{
        num.innerHTML = 0;
    }
    num.addEventListener('click', (event) =>{
        if(display.innerHTML == 0){
            display.innerHTML = ""
        }
        display.innerHTML += event.target.innerHTML  
        arrayString.push(event.target.innerHTML)
       
        if(operatorArray === ''){
            numberArray  += event.target.innerHTML          
        }
        else{           
            secondNumberString += event.target.innerHTML
        }


    })
})

clearButton.addEventListener('click', (event) =>{
    location.reload()

})

operatorElements.forEach(ope =>{
    ope.addEventListener('click', (event) =>{
        
        if(display.innerHTML ==='0'){
            display.innerHTML = '';
        }
        if(event.target.innerHTML === '='){
/*             bonga(arrayString);
            display.innerHTML = clculatingFloat; */
            numberArray = parseFloat(numberArray);
            secondNumberString = parseFloat(secondNumberString);
            switch(operatorArray){
                case '+':
                    lastResult = (numberArray + secondNumberString)
                    break;
                
                case '-':
                    lastResult = (numberArray - secondNumberString)
                    break;
                
                case 'x':
                    lastResult = (numberArray * secondNumberString)
                    break;
                
                case '/':
                    lastResult = (numberArray / secondNumberString)
                    break;
                
                            }
                        
                display.innerHTML = lastResult
                return;



        }
        
        display.innerHTML += event.target.innerHTML
        arrayString.push(event.target.innerHTML)
        operatorArray  = event.target.innerHTML
        
        


        
    })
})
let clculatingFloat = 0;
function bonga(array) {
    const operators = ['+', '-', 'x', '/'];

let currentOperator ='+';
    for(const char of array){
        if(operators.includes(char)){
            console.log(char)
            currentOperator = char
        }else{
            console.log(char)
            
            const number = parseFloat(char)
            switch(currentOperator){
                case '+':
                    clculatingFloat += number
                    break;
                
                case '-':
                    clculatingFloat -= number
                    break;
                
                case 'x':
                    clculatingFloat *= number
                    break;
                
                case '/':
                    clculatingFloat /= number
                    break;
                
                
             }

        }
    }
}
