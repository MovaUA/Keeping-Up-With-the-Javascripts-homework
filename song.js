/*
course: Keeping Up With the JavaScript: ES6
homework: Data Types
student: Valeriy Molchanov
*/

var title = "Orion";
var durationSeconds = 492;
var genre = "Thrash";
var isMyFavorite = true;
var band = {
  name: "Metallica",
  members: [
    'James Hetfield',
    'Lars Ulrich',
    'Kirk Hammett',
    'Robert Trujillo',
  ],
};


console.log(title);
console.log(band);
console.log(durationSeconds);
console.log(genre);
console.log(isMyFavorite);

// Song is Song constructor function.
function Song(title, band, durationSeconds, isMyFavorite) {
  this.title = title;
  this.band = band;
  this.genre = genre;
  this.durationSeconds = durationSeconds;
  this.isMyFavorite = isMyFavorite;
}

const song = new Song(title, band, durationSeconds, isMyFavorite);

console.log(song);
