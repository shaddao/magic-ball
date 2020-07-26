const form = document.getElementById('form');
const answer = document.getElementById('answer');
const input = document.getElementById('text-input');
const reload = document.querySelector('.reload-button');

const possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Most likely',
  'Outlook not so good',
  'Very doubtful'
];

const patt = /[a-zA-z]/gi;

form.addEventListener('submit', event => {
  event.preventDefault();
  let randomIndex = Math.floor(Math.random() * possibleAnswers.length);

  if (patt.test(input.value)) {
    answer.textContent = possibleAnswers[randomIndex];
  } else {
    answer.textContent = 'Please enter something';
  }
});

reload.addEventListener('click', () => {
  location.reload();
})