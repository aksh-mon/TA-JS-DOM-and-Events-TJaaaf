const watchListForm = document.getElementById('watchListForm');
const movieInput = document.getElementById('movieInput');
const movieList = document.getElementById('movieList');

watchListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieTitle = movieInput.value.trim();
    if (movieTitle !== '') {
        addMovieToList(movieTitle);
        movieInput.value = '';
    }
});

function addMovieToList(movieTitle) {
    const movieItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    const span = document.createElement('span');
    span.textContent = movieTitle;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    movieItem.appendChild(checkbox);
    movieItem.appendChild(span);
    movieItem.appendChild(deleteBtn);
    movieList.appendChild(movieItem);
    deleteBtn.addEventListener('click', () => {
        movieItem.remove();
    });
}
