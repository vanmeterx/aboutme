'use strict';

//Tuesday's Assignment:
var answer = 'Y';
var wordAnswer = 'YES';

function travel(){
  var travel = prompt('Have I ever traveled to Russia?');
  var sanityAnswer = travel.toUpperCase().trim();

  console.log('russia? ' + travel);

  if (sanityAnswer === 'Y' || sanityAnswer === 'YES') {
    alert('You betcha!');
  }

  else if (sanityAnswer === 'N' || sanityAnswer === 'NO') {
    alert('No way hose-ay!');
  }
}

function music(){
  var music = prompt('Is SCREAMO the best music genre ever?');
    var musicAnswer = music.toUpperCase().trim();

console.log('Screamo? ' + music);

  if (musicAnswer === 'Y' || musicAnswer === 'YES') {
    alert('Negatory!');
  }
  else if (musicAnswer === 'N' || musicAnswer === 'NO') {
    alert('Correct-a-mundo!');
  }
}

function movie(){
  var movie = prompt('Was Sgt. Pepper\'s the Best Movie Ever?' );
  var movieAnswer = movie.toUpperCase().trim();

  console.log('Best movie ever? ' + movie);

  if (movieAnswer === 'Y' || movieAnswer === 'YES') {
    alert('This is a joke right?');
  }
  else if (movieAnswer === 'N' || movieAnswer === 'NO') {
    alert('Totally agreed!');
  }
}

function mac(){
  var mac = prompt('Am I a Mac Fanboi?');
  var macAnswer = mac.toUpperCase().trim();

  console.log('Mac Fanboi? ' + mac);

  if (macAnswer === 'Y' || macAnswer === 'YES') {
    alert('I appreciate Macs, but..');
  }
  else if (macAnswer === 'N' || macAnswer === 'NO') {
    alert('I wouldn\'t say I\'m totally against Macs..');
  }
}

function spaghet(){
  var spaghet = prompt('Is Spaghetti awesome?');
  var spaghetAnswer = spaghet.toUpperCase().trim();

  console.log('Spaghet? ' + spaghet);

  if (spaghetAnswer === 'Y' || spaghetAnswer === 'YES') {
    alert('Heck yeah!');
  }
  else if (spaghetAnswer === 'N' || spaghetAnswer === 'NO') {
    alert('Incorrect!');
  }
}

//Wednesday's assigned project:
//number guessing.
function guessNum(){
  var guessNum = Number(prompt('What number am I thinking?'));
  console.log('Number Guess: ' + guessNum);
  var guessCount = 1;


  //needed help stopping after 7. thanks jess.
  while (guessNum !== 27 && guessCount < 4) {

    if (guessNum === null) {
      console.log('Cancel Button');

      break;
    }

    var promptWarn;
    if (guessNum > 27) {
      promptWarn = 'Too high!';
    } else if (guessNum < 27) {
      promptWarn = 'Too low!';
    } else if (guessNum === 27){
      promptWarn = 'Correct!';
      console.log(promptWarn);
    }

    guessNum = Number(prompt(promptWarn + ' Try again:'));

    console.log('Number Guess: ' + guessNum);

    guessCount = guessCount + 1;

    console.log('Guess Count: ' + guessCount);
  }

  console.log('finished');

  if (guessNum === null) {

    alert('Cheater. It was 27');
    console.log('cancel button');
  } else {

    if (guessCount === 1) {
      alert('Woah.. a hole in one!');
    } else if (guessCount <= 4) {
      alert('Nice! You got it in '+guessCount+' tries.');
    } else {
      alert('Sorry! Only 4 guesses! The Correct number was ' + '27');

      /* extra stuff i may or may not need.
    if (guessCount >= 7) {

    } else {
      console.log('Max 7 Tries');
      */

    }
  }
}
//not sure if this makes sense. attempting to use what i learned above to this set.

function cars(){
  var cars = ['MICROBUS', 'CAMARO', 'TESLA', 'CHALLENGER'];
  console.log(cars.length);
  var carGuess = prompt('Guess the dream car!');
  var carGuessTrimmedToUpper = cars.indexOf(carGuess.toUpperCase().trim());

  var carCount = 1;

  console.log(carGuessTrimmedToUpper);

  while (carGuessTrimmedToUpper < 0 && carCount < 7) {

    if (carGuess === null) {
      console.log('Cancel Button');

      break;
    }

    var carWarn = 'Nope!';
    console.log(carWarn);

    carGuess = prompt(carWarn + ' Try again:');
    var carGuessTrimmedToUpper = cars.indexOf(carGuess.toUpperCase().trim());

    console.log('Car Guess: ' + carGuess);

    carCount = carCount + 1;

    console.log('Guess Count: ' + carCount);
  }

  console.log('finished');

  if (carGuess === null) {

    alert('Cheater. It was ' + cars.join(', '));

  } else {
    console.log('cancel button');

    if (carGuessTrimmedToUpper >= 0) {
      alert('Groovy! ' + carGuess + ' is correct!');
    }
  }
}

travel();
music();
movie();
mac();
spaghet();
guessNum();
cars();