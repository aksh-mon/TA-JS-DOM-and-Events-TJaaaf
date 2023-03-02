const calculator = document.querySelector('.calculator-keys');

calculator.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.value;
    const screen = document.querySelector('.calculator-screen');

    if (buttonValue === 'all-clear') {
      screen.value = '0';
    } else if (buttonValue === '=') {
      screen.value = eval(screen.value);
    } else {
      if (screen.value === '0') {
        screen.value = buttonValue;
      } else {
        screen.value += buttonValue;
      }
    }
  }
});


