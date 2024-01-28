// Function to play Craps game
function playCraps() {
    let die1 = rollDice(); // Roll the first die
    let die2 = rollDice(); // Roll the second die
    let sum = die1 + die2; // Calculate the sum of two dice

    // Display the dice roll results
    displayResult(`Dice rolls: ${die1} and ${die2}. Sum: ${sum}. `);

    // Determine the game outcome based on Craps rules
    if (sum === 7 || sum === 11) {
        displayResult("CRAPS – you lose!"); // Player loses if sum is 7 or 11
    } else if (die1 === die2 && die1 % 2 === 0) {
        displayResult("You won! - Doubles and even"); // Player wins on even doubles
    } else {
        displayResult("You pushed!"); // Any other outcome is a push
    }
}

// Function to roll a single die
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
}

// Function to display game results in the HTML page
function displayResult(message) {
    document.getElementById("gameResult").innerHTML = message;
}
