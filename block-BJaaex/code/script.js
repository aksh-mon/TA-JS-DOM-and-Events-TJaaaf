const startTime = Date.now();

const cardsArray = [{
  'name': 'monkey',
  'img': './images/img-01.jpg',
},
{
  'name': 'butterfly',
  'img': './images/img-02.jpg',
},
{
  'name': 'whale',
  'img': './images/img-03.jpg',
},
{
  'name': 'eagle',
  'img': './images/img-04.jpg',
},
{
  'name': 'camel',
  'img': './images/img-05.jpg',
},
{
  'name': 'cat',
  'img': './images/img-06.jpg',
},
{
  'name': 'rabbit',
  'img': './images/img-07.jpg',
},
{
  'name': 'wolf',
  'img': './images/img-08.jpg',
},
];

const gameGrid = cardsArray
.concat(cardsArray)
.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
const { name, img } = item;

const card = document.createElement('div');
card.classList.add('card');
card.dataset.name = name;

const front = document.createElement('div');
front.classList.add('front');

const back = document.createElement('div');
back.classList.add('back');
back.style.backgroundImage = `url(${img})`;

grid.appendChild(card);
card.appendChild(front);
card.appendChild(back);
});

let matches = 0;
let turns = 0;
let endTime;


const match = () => {
const selected = document.querySelectorAll('.selected');
selected.forEach(card => {
  card.classList.add('match');
});
};

const resetGuesses = () => {
firstGuess = '';
secondGuess = '';
count = 0;
previousTarget = null;

var selected = document.querySelectorAll('.selected');
selected.forEach(card => {
  card.classList.remove('selected');
});
};

const showModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  const message = document.createElement('p');
  message.innerText = `You completed the game in ${turns} turns in ${Math.round((endTime - startTime) / 1000)} seconds.`;
  
  const resetButton = document.createElement('button');
  resetButton.innerText = 'Play again';
  resetButton.addEventListener('click', () => {
    location.reload();
  });
  
  modal.appendChild(message);
  modal.appendChild(resetButton);
  
  document.body.appendChild(modal);
}

grid.addEventListener('click', event => {

const clicked = event.target;

if (
  clicked.nodeName === 'SECTION' ||
  clicked === previousTarget ||
  clicked.parentNode.classList.contains('selected') ||
  clicked.parentNode.classList.contains('match')
) {
  return;
}

if (count < 2) {
  count++;
  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name;
    console.log(firstGuess);
    clicked.parentNode.classList.add('selected');
  } else {
    secondGuess = clicked.parentNode.dataset.name;
    console.log(secondGuess);
    clicked.parentNode.classList.add('selected');
    turns++;
  }

  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(match, delay);
      matches++;
    }
    setTimeout(resetGuesses, delay);
  }
  previousTarget = clicked;
}
if (matches === cardsArray.length) {
  endTime = Date.now();
  showModal();
}

});