const url = "http://www.omdbapi.com/?i=";
const APIKEY = "&apikey=afa3ef9";
//let resultatRecherche = document.querySelector('.resultatRecherche');
let recherche = localStorage.getItem('movie');
//let recherche = 'tt2975590';
//document.querySelector('input')
//let btn = document.querySelector('button')

fetch(url + recherche + APIKEY + '&plot=full')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
    })
    .catch(err => console.log({ message: err }))


let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}