// get elements
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const timeInput = document.getElementById('time');
const timeDisplay = document.getElementById('time-display');

let countdown; // variable to store the countdown interval

// function to start the countdown
function startCountdown() {
  let time = parseInt(timeInput.value); // get the time input and convert to integer
  if (isNaN(time)) { // check if time is not a number
    alert('Please enter a valid time in seconds');
    return;
  }

  let endTime = Date.now() + (time * 1000); // calculate the end time in milliseconds

  countdown = setInterval(() => {
    let timeLeft = Math.round((endTime - Date.now()) / 1000); // calculate the time left in seconds
    if (timeLeft < 0) { // check if the countdown has ended
      clearInterval(countdown); // stop the countdown
      alert('Time is up!'); // show an alert
      return;
    }
    let minutes = Math.floor(timeLeft / 60); // calculate the minutes left
    let seconds = timeLeft % 60; // calculate the seconds left
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // display the time left
  }, 1000);
}

// add event listeners
startBtn.addEventListener('click', startCountdown);
resetBtn.addEventListener('click', () => {
  clearInterval(countdown); // stop the countdown
  timeInput.value = ''; // clear the time input
  timeDisplay.textContent = '00:00'; // reset the time display
});
