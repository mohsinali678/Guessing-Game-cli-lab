const rls = require('readline-sync');

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if(rls.keyInYN("Ready?")){
    console.log("Let's start!");
    gameLoop(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]));
  }else{
    console.log("Have a nice life!")
    quitGame();
  }
}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!");
  process.exit();
}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */

const gameLoop = (guessCount = 10, min, max) => {
    let guess;
    rand = generateRandomNumber(min, max);
    console.log("I have a random number in mind");
    console.log(`It's between ${min} and ${max}`);
    console.log(`You have ${guessCount} guesses total`);
    
    while(guessCount >= 1){
    guess = rls.questionInt("Enter a guess.")
    if(guess === rand){
      console.log("Congrats! You got it right!")
      rls.keyInYN("Want to Play again?") ? gameLoop() : quitGame();
    }else if(guess > rand){
      console.log("Your guess is too high");
    }else{
      console.log("Your guess is too low");
    }
    guessCount -= 1;
    console.log(`You have ${guessCount} remaining guesses.`);
  }
  if(guessCount === 0){
    console.log("You lose!")
    quitGame();
  }
  
  }


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
function generateRandomNumber(min, max) {
  let i =  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(i);
  return i;
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}