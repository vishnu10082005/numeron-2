// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var number1Box = document.getElementById("number1")
var number2Box = document.getElementById("number2")

var num1 = Math.round(Math.random()*100)
var num2 = Math.round(Math.random()*100)

number1Box.textContent = num1;
console.log(num1,num2)
number2Box.textContent = num2;
// Iteration 3: Creating variables required to make the game functional

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("mul")
let divide = document.getElementById("divide") 
let modulus = document.getElementById("modulus")  
let timerBox = document.getElementById("timer")
let score = 0;
let Interval;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3")
let num3;
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)
    console.log(num1 , num2)
    let operator = Math.floor(Math.random()*5) + 1;
    console.log(operator)
    switch(operator){
        case 1 : num3 = num1 + num2;
        break;
        case 2 : num3 = num1 - num2;
        break;
        case 3 : num3 = num1 * num2;
        break;
        case 4 : num3 = Math.floor(num1 / num2);
        break;
        case 5 : num3 = num1 % num2;
        break;
    }
    number1Box.textContent = num1;
    number2Box.textContent = num2;
    number3Box.textContent = num3;

    startTimer()
}

randomise();
// Iteration 6: Making the Operators (button) functional

plus.onclick = () => {
    if(num1+num2==num3){
        score++;
        randomise()
    }else{
        gameover();
    }
}
minus.onclick = () => {
    if(num1-num2==num3){
        score++;
        randomise();
    }else{
        gameover();
    }
}
multiply.onclick = () => {
    if(num1*num2==num3){
        score++;
        randomise();
    }else{
        gameover();
    }
}
divide.onclick = () => {
    if(Math.floor(num1/num2)==num3){
        score++;
        randomise();
    }else{
        gameover();
    }
}
modulus.onclick = () => {
    if(num1%num2==num3){
        score++;
        randomise();
    }else{
        gameover();
    }
}

function gameover(){
    window.location.href = `./gameover.html?score=${score}`
}

// Iteration 7: Making Timer functional

// setInterval(function , time in  milliseconds)  => syntax of set Interval

function startTimer(){
    let time =20;
    timerBox.textContent = time;
    clearInterval(Interval);
    Interval = setInterval(()=>{
    time--;
    timerBox.textContent = time;

    if(time==0){
        gameover()
    }

    },1000)

}