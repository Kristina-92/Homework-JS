//Task 5

function countdown(seconds) {
  const timer = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
      console.log("Countdown complete!");
    }
  }, 1000);
}

countdown(10);
