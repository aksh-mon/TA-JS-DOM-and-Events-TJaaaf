// // Select the boxes
// const firstBox = document.querySelector('.first');
// const secondBox = document.querySelector('.second');


// const colors = ["#FF5733", "#FFC300", "#DAF7A6", 
// "#C70039", "#900C3F", "#581845"];

// // Add click event listener to first box
// firstBox.addEventListener('click', () => {
//   // Generate random color
//   const color = getRandomColor();

//   // Change background color of first box
//   firstBox.style.backgroundColor = color;
// });

// // Add mousemove event listener to second box
// secondBox.addEventListener('mousemove', () => {
//   // Generate random color
//   const color = getRandomColor();

//   // Change background color of second box
//   secondBox.style.backgroundColor = color;
// });

// Get references to the two boxes
const firstBox = document.querySelector(".first");
const secondBox = document.querySelector(".second");

// Create an array of color codes
const colors = ["#FF9933", "#FFFFFF", "#008000","#9400D3", 
"#4B0082","#0000FF", "#00FF00", "#FFFF00", "#FF7F00", 
"#FF0000"];

// Add event listener to the first box
firstBox.addEventListener("click", () => {
  const randomColorIndex = Date.now() % colors.length;
  firstBox.style.backgroundColor = colors[randomColorIndex];
});

// Add event listener to the second box
secondBox.addEventListener("mousemove", () => {
  const randomColorIndex = Date.now() % colors.length;
  secondBox.style.backgroundColor = colors[randomColorIndex];
});
