// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the input values
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const gender = form.querySelector('#gender').value;
  const color = form.querySelector('#color').value;
  const range = form.querySelector('#range').value;
  const genre = form.querySelector('input[name="drone"]:checked').value;
  const terms = form.querySelector('#terms').checked;

  // Display the input values in a modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <h2>Hello ${name}</h2>
    <p>Email: ${email}</p>
    <p>You Love: ${gender}</p>
    <p>Color: ${color}</p>
    <p>Rating: ${range}</p>
    <p>Book Genre: ${genre}</p>
    <p class="last-child"> ${terms ? '👉' : '❌'} You Agree to Terms and Conditions</p>
    <button id="closeModal">Close</button>
  `;
  document.body.appendChild(modal);

  // Add a click event listener to the close button
  const closeModal = document.querySelector('#closeModal');
  closeModal.addEventListener('click', () => {
    modal.remove(); // Remove the modal from the DOM
  });

  // Reset the form
  form.reset();
});
