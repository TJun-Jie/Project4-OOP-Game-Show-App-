/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /*
create a new instance of game class

add click listner to start game button and call startGame() when clicked

add click listener to all the letter buttons and call handleInteraction() method from the game object  (add to div with id of section)

startGame(): 
remove all li elements 
reset all css class for all the letter buttons
reset all heart images
 */


let game;


// select start game button
const button =  document.querySelector('#btn__reset');

// starts a new game when clicked
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

const keys = document.querySelector('#qwerty');
keys.addEventListener('click', (event) => {
    // handleInteraction(event);
    if(event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target)
    }
})

// connecting physical keyboard to the screen keyboard
document.addEventListener('keydown', (event) => {
    // prevent keyboard pressing before game starts
    if (document.querySelector('.start').style.display ==='none') {
        // select all the buttons
        const letterButtons = document.querySelectorAll('#qwerty button');
        // if the button's text content is the same as the key, then call handleInteraction on that screen button with the same text content
        for (let i = 0; i < letterButtons.length ; i ++) {
            if (letterButtons[i].textContent === event.key) {
                game.handleInteraction(letterButtons[i])
            }
        }      
    }
})