'use strict';

//Tuesday's Assignment:
var travel = prompt('Have I ever traveled to Russia?');
var sanityAnswer = travel.toUpperCase().trim();

console.log('russia? ' + travel);

if (sanityAnswer === 'Y' || sanityAnswer === 'YES') {
  alert('you betcha!');
}

else if (sanityAnswer === 'N' || sanityAnswer === 'NO') {
  alert('no way hose-ay!');
}



var music = prompt('Is SCREAMO the best music genre ever?');
var musicAnswer = music.toUpperCase().trim();

console.log('screamo? ' + music);

if (musicAnswer === 'Y' || musicAnswer === 'YES') {
  alert('a-negative!');
}
else if (musicAnswer === 'N' || musicAnswer === 'NO') {
  alert('correctamundo!');
}


var movie = prompt('Was Sgt. Pepper\'s the Best Movie Ever?' );
var movieAnswer = movie.toUpperCase().trim();

console.log('best movie ever? ' + movie);

if (movieAnswer === 'Y' || movieAnswer === 'YES') {
  alert('this is a joke right?');
}
else if (movieAnswer === 'N' || movieAnswer === 'NO') {
  alert('totally agreed!');
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
  alert('heck yass!');
}
else if (spaghetAnswer === 'N' || spaghetAnswer === 'NO') {
  alert('incorrect!');
}


//Wednesday's Assignment
//number guessing. reused the in class example
var guessNum = prompt('What number am I thinking?');
console.log('Number Guess: ' + guessNum);
var guessCount = 1;

while (guessNum !== '27') {

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
    alert('Nicely done for ' + guessCount + ' try!');
  }
  if (guessCount >= 7) {
    alert('Sorry! Only 7 guesses!');
  } else {
    console.log('Max 7 Tries');
  }
}
//