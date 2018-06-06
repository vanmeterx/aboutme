'use strict';

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