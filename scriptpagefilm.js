const url = "http://www.omdbapi.com/?i=";
const APIKEY = "&apikey=afa3ef9";
//let resultatRecherche = document.querySelector('.resultatRecherche');
let recherche = 'tt2975590'
    //document.querySelector('input')
    //let btn = document.querySelector('button')

fetch(url + recherche + APIKEY + '&plot=full')
    .then((response) => response.json())
    .then((data) => {
        console.log('data.Title', data);
        console.log(data);
        document.getElementById("titreFilm").innerHTML = data.Title;
        document.getElementById("yearFilm").innerHTML = data.Year;
        document.getElementById("ratedFilm").innerHTML = data.Rated;
        document.getElementById("genreFilm").innerHTML = data.Genre;
        document.getElementById("directorFilm").innerHTML = data.Director;
        document.getElementById("writerFilm").innerHTML = data.Writer;
        document.getElementById("actorsFilm").innerHTML = data.Actors;
        document.getElementById("plotFilm").innerHTML = data.Plot;
        document.getElementById("countryFilm").innerHTML = data.Country;
        document.getElementById("awardsFilm").innerHTML = data.Awards;
        document.getElementById("ratingFilm").innerHTML = data.Rating;

        document.getElementById("posterFilm").src = data.Poster;
    })
    .catch(err => console.log({ message: err }))