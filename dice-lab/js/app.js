/*

Create a page where every time the user hits the "Roll Dice"
button, the screen randomly updates the two dice. Review the HTML and CSS code
included in the starter code. You will need to write only JavaScript 
code to complete this exercise.

1) Create code that does the following:
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first
  die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second
  die, secondDie
* get the first die by ID and update the CSS class name to *to the variable* firstDie
* get the first die by ID and update the CSS class name to *to the variable* secondDie




2) Create code that runs the function you created whenever the button with the
   ID value 'roll-dice' is clicked.

*/

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rollDice = () => {
  let numRandom1 = getRandomInt(1, 6);
  // console.log(numRandom1);
  let numRandom2 = getRandomInt(1, 6);
  // console.log(numRandom2);

  const classNameFirstDie = `dice-${numRandom1}`;
  const classNameSecondDie = `dice-${numRandom2}`;
  console.log(classNameFirstDie, classNameSecondDie);

  const elementFirstDie = document.querySelector('#first-die');
  const elementSecondDie = document.querySelector('#second-die');

  elementFirstDie.className = `dice ${classNameFirstDie}`;
  elementSecondDie.className = `dice ${classNameSecondDie}`;
};

const button = document.querySelector('#roll-dice');

button.addEventListener('click', rollDice);
