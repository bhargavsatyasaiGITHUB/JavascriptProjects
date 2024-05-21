document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
  
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
  
    function updateCounter() {
      counterDisplay.textContent = counter;
    }
  
    incrementButton.addEventListener('click', () => {
      counter++;
      updateCounter();
    });
  
    decrementButton.addEventListener('click', () => {
      counter--;
      updateCounter();
    });
  
    resetButton.addEventListener('click', () => {
      counter = 0;
      updateCounter();
    });
  
    // Initial display
    updateCounter();
  });
  