



let randomNumber = Math.random() * 100
randomNumber = Math.round(randomNumber);
console.log(randomNumber)
 let attempts = 0;


const input = document.querySelector("#guess-input");
const submit = document.querySelector('#submit');
const message = document.querySelector('#message');
const attemptsText = document.querySelector('#attempts');
 


const form = document.querySelector('#guess-form'); 
 
form.addEventListener('submit', function(e) { 
  e.preventDefault(); 
  
        const inputValue = input.value;
        if (inputValue === '') return

        if (inputValue < 0 || inputValue > 100 || isNaN(inputValue)) {
            message.textContent = "The number has to be between 1-100"
            return
        }
    
        attempts ++;


if (inputValue == randomNumber) {
    message.textContent = "Congratulations! You guessed the right number!";
   attemptsText.textContent = "Amount of attempts: " + attempts;
 
}
 else if (inputValue < randomNumber) {
    message.textContent = "Sorry, your guess is to low.. try again!";
}
 else {
    message.textContent = "Sorry, your guess is to high.. try again!";
}

input.value ='';
const guessList =document.querySelector('#guess-list');
const li = document.createElement('li')

li.innerText = inputValue

guessList.appendChild(li);

console.log(li);
})






