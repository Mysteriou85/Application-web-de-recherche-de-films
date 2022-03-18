const url = "http://www.omdbapi.com/?s=";
const APIKEY = "&apikey=afa3ef9&plot=full";
let movieslist = document.querySelector('#movieslist');
let body = document.querySelector('body');
let recherche = document.querySelector('input')
let searchbtn = document.querySelector("button[id='Searchbutton']")

class Movie {
    constructor(Title, Poster, Type, Year, Metascore, imdbID) {
        this.Title = Title
        this.img = Poster
        this.Type = Type
        this.Year = Year
        this.Metascore = Metascore
        this.imdbID = imdbID
    }
    html() {
        let block = document.createElement('div')

        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let moviecontent = document.createElement('div')
        let movietext = document.createElement('div')
        let Type = document.createElement('p')
        let Year = document.createElement('p')
        let imdbID = document.createElement('a')

        h2.innerText = this.Title
        img.src = this.img
        Type.innerText = this.Type
        Year.innerText = this.Year
        Metascore.innerText = this.Metascore
        imdbID.href = this.imdbID



        moviecontent.appendChild(img)
        movietext.appendChild(h2)
        movietext.appendChild(Year)
        imdbID.appendChild(moviecontent)
        imdbID.appendChild(movietext)

        block.appendChild(imdbID)



        moviecontent.style.backgroundImage = "url(" + img.src + ")"
        moviecontent.style.backgroundRepeat = "no-repeat";
        moviecontent.style.backgroundSize = "100% 100%";

        movietext.classList.add("moviestextcontainer")
            //add class for block

        block.classList.add("moviesection")
        img.classList.add("moviesposter")
        moviecontent.classList.add("moviesimagecontainer")

        return block
    }
}

searchbtn.addEventListener('click', () => {
    console.log(url + recherche.value + APIKEY);
    fetch(url + recherche.value + APIKEY)
        .then(res => res.json())
        .then(data => {


            data.Search.forEach(movie => {
                console.log(data);
                // console.log(movie);
                let t = new Movie(
                    movie.Title,
                    movie.Poster,
                    movie.Type,
                    movie.Year,
                    movie.imdbID
                )
                movieslist.appendChild(t.html())
            });
        })
        .catch(err => console.log({ message: err }))
})