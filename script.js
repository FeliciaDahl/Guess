



let randomNumber = Math.random() * 100
randomNumber = Math.round(randomNumber);
console.log(randomNumber)



const input = document.querySelector("#guess-input");
const submit = document.querySelector('#submit');
const message = document.querySelector('#message');
const attemptsText = document.querySelector('#attempts');
 
 let attempts = 0;

const form = document.querySelector('#guess-form'); 
 
form.addEventListener('submit', function(e) { 
  e.preventDefault(); 

        const inputValue = input.value;
        if (inputValue === '') return

        attempts ++;


if (inputValue == randomNumber) {
    message.textContent = "Congratulations! You guessed the right number!";
}
 else if (inputValue < randomNumber) {
    message.textContent = "Sorry, your guess is to low.. try again!";
}
 else {
    message.textContent = "Sorry, your guess is to high.. try again!";
}

attemptsText.textContent =
"Amount of attempts: " + attempts;

})





// submit.addEventListener("click",
//     checkGuess);

//     function checkGuess () {
        
       
// }); 
