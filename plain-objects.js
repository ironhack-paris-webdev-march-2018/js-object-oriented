var songA = {
  artist: "Toto",
  title: "Africa",
  releaseYear: 1982,
  album: "Toto IV",
  genres: ["Pop", "Rock", "Progressive"],
  play: function () {
    console.log("Starting playback of Africa by Toto");
  },
  pause: function () {
    console.log("PAUSING Africa by Toto");
  }
};

var songB = {};
songB.artist = "Enya";
songB.title = "Only in Time";
songB.releaseYear = 2000;
songB.album = "A Day Without Rain";
songB.genres = ["New Age"];
songB.play = function () {
  console.log("Starting playback of Only in Time by Enya");
};
songB.pause = function () {
  console.log("PAUSING Only in Time by Enya");
};

songA.play();
songB.play();

