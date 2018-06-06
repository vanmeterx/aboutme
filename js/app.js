'use strict';

//Tuesday's Assignment:
var travel = prompt('Have I ever traveled to Russia?');
var sanityAnswer = travel.toUpperCase().trim();

console.log('russia? ' + travel);

if (sanityAnswer === 'Y' || sanityAnswer === 'YES') {
  alert('You betcha!');
}

else if (sanityAnswer === 'N' || sanityAnswer === 'NO') {
  alert('No way hose-ay!');
}



var music = prompt('Is SCREAMO the best music genre ever?');
var musicAnswer = music.toUpperCase().trim();

console.log('Screamo? ' + music);

if (musicAnswer === 'Y' || musicAnswer === 'YES') {
  alert('Negatory!');
}
else if (musicAnswer === 'N' || musicAnswer === 'NO') {
  alert('Correct-a-mundo!');
}


var movie = prompt('Was Sgt. Pepper\'s the Best Movie Ever?' );
var movieAnswer = movie.toUpperCase().trim();

console.log('Best movie ever? ' + movie);

if (movieAnswer === 'Y' || movieAnswer === 'YES') {
  alert('This is a joke right?');
}
else if (movieAnswer === 'N' || movieAnswer === 'NO') {
  alert('Totally agreed!');
}


var mac = prompt('Am I a Mac Fanboi?');
var macAnswer = mac.toUpperCase().trim();

console.log('Mac Fanboi? ' + mac);

if (macAnswer === 'Y' || macAnswer === 'YES') {
  alert('I appreciate Macs, but..');
}
else if (macAnswer === 'N' || macAnswer === 'NO') {
  alert('I wouldn\'t say I\'m totally against Macs..');
}


var spaghet = prompt('Is Spaghetti awesome?');
var spaghetAnswer = spaghet.toUpperCase().trim();

console.log('Spaghet? ' + spaghet);

if (spaghetAnswer === 'Y' || spaghetAnswer === 'YES') {
  alert('Heck yeah!');
}
else if (spaghetAnswer === 'N' || spaghetAnswer === 'NO') {
  alert('Incorrect!');
}


//Wednesday's assigned project:
//number guessing.
var guessNum = prompt('What number am I thinking?');
console.log('Number Guess: ' + guessNum);
var guessCount = 1;


//needed help stopping after 7.
while (guessNum !== 27 & guessCount < 7) {

  if (guessNum === null) {
    console.log('Cancel Button');

    break;
  }

  var promptWarn = 'Nope!';
  if (guessNum > 27) {
    promptWarn = 'Too high!';
  } else if (guessNum < 27) {
    promptWarn = 'Too low!';
  }
  console.log(promptWarn);

  guessNum = prompt(promptWarn + ' Try again:');

  console.log('Number Guess: ' + guessNum);

  guessCount = guessCount + 1;

  console.log('Guess Count: ' + guessCount);
}

console.log('finished');

if (guessNum === null) {

  alert('Cheater. It was 27');

} else {
  console.log('cancel button');

  if (guessCount === 1) {
    alert('Woah.. a hole in one!');
  } else {
    alert('Sorry! Only 7 guesses! The Correct number was ' + guessNum);
   
    /* extra stuff i may or may not need.
  if (guessCount >= 7) {

  } else {
    console.log('Max 7 Tries');
    */

  }
}

// Multiple Choice
var cars = ['MICROBUS', 'CAMARO', 'TESLA', 'CHALLENGER'];
console.log(cars.length);
var carGuess = prompt('Guess the dream car!');
var carGuessTrimmedToUpper = carGuess.toUpperCase().trim();

while (carGuess < 7) {
  if (carGuess === null) {
    console.log('Cancel Button');
    break;
  }

  if (cars.indexOf(carGuessTrimmedToUpper) >= 0) {
    alert('Huzzah! ' + carGuess + ' is one of the cars!');
  } else {
    alert('nope');
  }

  var carWarn = 'Nope!';
  
  carGuess = prompt(carWarn + ' Try again:');

  console.log('Car-Guess Number: ' + carGuess);

  carGuess = carGuess + 1;
if (carGuess === null) {
  alert('Cheater. It was ' + cars.join(', '));
} else {
  console.log('cancel button');
  }