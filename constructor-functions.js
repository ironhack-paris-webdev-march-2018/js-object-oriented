// Constructor Functions - templates for creating objects
// - first letter is always uppercase
// - name it after the generic thing you are creating: "Product", "Food", etc.
// - name is typically SINGULAR
function Song (artistName, songTitle, year) {
  // var this = {};
  // "this" represents the newly created object
  this.artist = artistName;
  this.title = songTitle;
  this.releaseYear = year;
}

// "new" creates an empty object for the constructor
var songA = new Song("Toto", "Africa", 1982);
var songB = new Song("Enya", "Only in Time", 2000);
var songC = new Song("Guru", "Lifesaver", 1995);

console.log(songA, songB, songC);

songA.play = function () {
  console.log("Starting playback of Africa by Toto");
};
songA.pause = function () {
  console.log("PAUSING Africa by Toto");
};
songB.play = function () {
  console.log("Starting playback of Only in Time by Enya");
};
songB.pause = function () {
  console.log("PAUSING Only in Time by Enya");
};
