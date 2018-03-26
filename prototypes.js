// Constructor Function - template for creating a Song object
function Song (artistName, songTitle, year) {
  // var this = {};
  // "this" represents the newly created object
  this.artist = artistName;
  this.title = songTitle;
  this.releaseYear = year;
}

// Prototype - list of methods for a particular kind of object
// -----------------------------------------------------------
// Add methods to the prototype with assignment
// INSIDE METHODS "this" refers to the object that you called it with
Song.prototype.play = function () {
  console.log("Starting playback of " + this.title + " by " + this.artist);
};
Song.prototype.pause = function () {
  console.log("PAUSING " + this.title + " by " + this.artist);
};

// "new" creates an empty object for the constructor
var songA = new Song("Toto", "Africa", 1982);
var songB = new Song("Enya", "Only in Time", 2000);
var songC = new Song("Guru", "Lifesaver", 1995);

songC.play();

console.log( songC.toString() );


// Inheritance - the new constructor receives structure and methods from the old
// -----------------------------------------------------------------------------
function CoverSong (coverArtist, title, year, oldArtist) {
  // re-use the Song constructor to get the structure
  Song.call(this, coverArtist,    title,   year);
  //                   |            |        |
  // function Song (artistName, songTitle, year) {

  this.originalArtist = oldArtist;
}

// re-use the Song prototype to get the methods
CoverSong.prototype = Object.create(Song.prototype);

CoverSong.prototype.compare = function () {
  console.log("The " + this.originalArtist + " version is better.");
};

var coverA = new CoverSong(
  "Guns'N'Roses",
  "Knockin' on Heaven's Door",
  1992,
  "Bob Dylan"
);

console.log(coverA);

coverA.play();
coverA.compare();
