// Stores the answer choices in an array
var timerEl = document.getElementById('countdown');
var choices = [];

// Timer function that counts down from 60 seconds
function countdown() {
    var timeLeft = 60;

    // setInterval function to run the timer function every 1000 milliseconds
    var timerInterval = setInterval(function () {
        // timeLeft is greater than 1
        if (timeLeft > 1) {
            // textContent is used to display the time left in the timer element
            timerEl.textContent = timeLeft + ' seconds remaining';
            // timeLeft is decremented by 1
            timeLeft--;
        }
        else if (timeLeft === 1) {
            // If the timeLeft = 1, the textContent must say 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            // timeLeft is decremented by 1
            timeLeft--;
        }
        else {
            // If the timeLeft is 0, the timer must stop and the quiz must be ended
            timerEl.textContent = 'Time is up!';
            clearInterval(timerInterval);
        }
    }, 1000);
}
