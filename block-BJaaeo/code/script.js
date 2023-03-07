// select the calculator keys container
const calculator = document.querySelector('.calculator-keys');

// add event listener to the calculator keys container
calculator.addEventListener('click', function(event) {
  // check if the clicked element is a button
  if (event.target.tagName === 'BUTTON') {
    // get the value of the clicked button
    const buttonValue = event.target.value;
    // get the calculator screen element
    const screen = document.querySelector('.calculator-screen');

    if (buttonValue === 'all-clear') {
      // clear the calculator screen
      screen.value = '0';
    } else if (buttonValue === '=') {
      // evaluate the expression on the calculator screen
      screen.value = eval(screen.value);
    } else {
      // append the clicked button value to the calculator screen
      if (screen.value === '0') {
        screen.value = buttonValue;
      } else {
        screen.value += buttonValue;
      }
    }
  }
});
