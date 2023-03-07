// Get the boxes
let boxes = document.querySelectorAll('.box');

// Handle click on boxes using multiple event listeners
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    box.textContent = randomNumber;

    setTimeout(() => {
      box.textContent = '';
    }, 5000);
  });
});

// Handle click on boxes using event delegation
let container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  let target = event.target;
  // Check if the clicked element is a box
  if (target.classList.contains('box')) {
    // Generate a random number between 1 and 12
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    // Show the number in the box
    target.textContent = randomNumber;
    // Hide the number after 5 seconds
    setTimeout(() => {
      target.textContent = '';
    }, 5000);
  }
});
