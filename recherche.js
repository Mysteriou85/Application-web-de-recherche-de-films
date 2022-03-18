const url = "http://www.omdbapi.com/?s=";
const APIKEY = "&apikey=afa3ef9";
let page = 1
let movieslist = document.querySelector('#movieslist');
let recherche = document.querySelector('input')
let searchbtn = document.querySelector("button[id='Searchbutton']")

function gettopmovies(numberofmovies) {
    fetch(url + recherche.value + APIKEY)
        .then(res => res.json())
        .then(data => {


            data.Search.forEach(movie => {
                console.log(movie);
                let t = new Movie(
                    movie.Title,
                    movie.Poster,
                    movie.Type,
                    movie.Year,
                    movie.imdbID
                )
                movieslist.appendChild(t.html())
                console.log(movieslist);
            });
        })
        .catch(err => console.log({ message: err }))
}



class Movie {
    constructor(Title, Poster, Type, Year, imdbID) {
        this.Title = Title
        this.img = Poster
        this.Type = Type
        this.Year = Year
        this.imdbID = imdbID
    }
    html() {
        let block = document.createElement('div')

        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let imgcontainer = document.createElement('div')
        let Type = document.createElement('p')
        let Year = document.createElement('p')
        let imdbID = document.createElement('a')

        h2.innerText = this.Title
        img.src = this.img
        Type.innerText = this.Type
        Year.innerText = this.Year
        imdbID.href     = "pagefilm.html"

        imdbID.setAttribute('onclick',`gopage("${this.imdbID}")`)


        imgcontainer.appendChild(img)
        imgcontainer.appendChild(h2)
        imgcontainer.appendChild(Type)
        imgcontainer.appendChild(Year)
        imdbID.appendChild(imgcontainer)

        block.appendChild(imdbID)

        //add class for block

        block.classList.add("moviesection")
        img.classList.add("moviesposter")
        imgcontainer.classList.add("moviesimagecontainer")

        return block
    }
}

searchbtn.addEventListener('click', () => {
    movieslist.innerHTML = ""
    console.log(url + recherche.value + APIKEY);
    fetchMovie()
})

function gopage(id) {
    localStorage.setItem('movie',id)
}
let pagins = document.querySelectorAll('.pagin')

pagins.forEach(pagin => {
    pagin.addEventListener('click',()=>{
        fetchMovie(pagin.innerText)
    })
});
function fetchMovie(page) {
    let fetchUrl = page ? url + recherche.value+ `&page=${page}` + APIKEY : url + recherche.value + APIKEY

    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            movieslist.innerHTML=""
            console.log(data);
            data.Search.forEach(movie => {
                let t = new Movie(
                    movie.Title,
                    movie.Poster,
                    movie.Type,
                    movie.Year,
                    movie.imdbID
                )
                movieslist.appendChild(t.html())
            });
            let pagination = document.querySelector(".pagination");
            pagination.style.display  = "flex";
        })
        .catch(err => console.log({ message: err }))
}

