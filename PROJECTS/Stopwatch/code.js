document.addEventListener('DOMContentLoaded', (event) => {
    let startTime, updatedTime, difference, tInterval, running = false;
  
    const display = document.getElementById('display');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
  
    function startStopwatch() {
      if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(getShowTime, 1);
        running = true;
      }
    }
  
    function stopStopwatch() {
      if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
      }
    }
  
    function resetStopwatch() {
      clearInterval(tInterval);
      running = false;
      difference = 0;
      display.textContent = "00:00:00.000";
    }
  
    function getShowTime() {
      updatedTime = new Date().getTime();
      difference = updatedTime - startTime;
  
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      let milliseconds = difference % 1000;
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
      milliseconds = (milliseconds < 10) ? "00" + milliseconds : milliseconds;
  
      display.textContent = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    }
  
    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);
  });
  