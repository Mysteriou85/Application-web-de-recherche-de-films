const url = "https://www.omdbapi.com/?i=";
const APIKEY = "&apikey=afa3ef9";
let resultatRecherche = localStorage.getItem("movie");
let Searchbutton = document.querySelector("#Searchbutton");
let inputRecherche = document.querySelector("#inputSearch");

inputRecherche.addEventListener("keyup", function (e) {
  console.log("do");
  if (e.keyCode === 13) {
    Searchbutton.click();
  }
});

Searchbutton.addEventListener("click", () => {
  localStorage.setItem("recherche", inputRecherche.value);
  window.location = "./index.html";
});

fetch(url + resultatRecherche + APIKEY + "&plot=full")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("titreFilm").innerHTML = data.Title;
    document.getElementById("runtimeFilm").innerHTML = data.Runtime;
    document.getElementById("releasedFilm").innerHTML = data.Released;
    document.getElementById("ratedFilm").innerHTML = data.Rated;
    document.getElementById("genreFilm").innerHTML = data.Genre;
    document.getElementById("directorFilm").innerHTML = data.Director;
    document.getElementById("writerFilm").innerHTML = data.Writer;
    document.getElementById("actorsFilm").innerHTML = data.Actors;
    document.getElementById("plotFilm").innerHTML = data.Plot;
    document.getElementById("countryFilm").innerHTML = data.Country;
    document.getElementById("awardsFilm").innerHTML = data.Awards;

    document.getElementById("metascoreFilm").innerHTML = data.Metascore;

    document.getElementById("imdbRatingFilm").innerHTML = data.imdbRating;
    document.getElementById("imdbVotesFilm").innerHTML = data.imdbVotes;

    document.getElementById("posterFilm").src = data.Poster;
    document.getElementById("posterFilm").alt = data.Title;
  })
  .catch((err) => console.log({ message: err }));
