const url = "http://www.omdbapi.com/?s=";
const APIKEY = "&apikey=afa3ef9";
let page = 1;
let movieslist = document.querySelector('#movieslist');
let recherche = document.querySelector('input');
let searchbtn = document.querySelector("button[id='Searchbutton']")

class Movie {
    constructor(Title, Poster, Type, Year, imdbID) {
        this.Title = Title;
        this.img = Poster;
        this.Type = Type;
        this.Year = Year;
        this.imdbID = imdbID;
    }
    html() {
        let block = document.createElement('div');

        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let moviecontent = document.createElement('div');
        let movietext = document.createElement('div');
        let Type = document.createElement('p');
        let Year = document.createElement('p');
        let imdbID = document.createElement('a');

        h2.innerText = this.Title;
        img.src = this.img;
        Type.innerText = this.Type;
        Year.innerText = this.Year;
        imdbID.href     = "pagefilm.html";

        imdbID.setAttribute('onclick',`gopage("${this.imdbID}")`);


        moviecontent.appendChild(img);
        moviecontent.appendChild(h2);
        moviecontent.appendChild(Type);
        moviecontent.appendChild(Year);
        imdbID.appendChild(moviecontent);

        block.appendChild(imdbID);

        moviecontent.style.backgroundImage = "url(" + img.src + ")"
        moviecontent.style.backgroundRepeat = "no-repeat";
        moviecontent.style.backgroundSize = "100% 100%";

        movietext.classList.add("moviestextcontainer");

        //add class for block

        block.classList.add("moviesection");
        img.classList.add("moviesposter");
        moviecontent.classList.add("moviesimagecontainer");

        return block
    }
}

searchbtn.addEventListener('click', () => {
    movieslist.innerHTML = ""
    console.log(url + recherche.value + APIKEY);
    fetchMovie();
})

function gopage(id) {
    localStorage.setItem('movie',id);
}
let pagins = document.querySelectorAll('.pagin');

pagins.forEach(pagin => {
    pagin.addEventListener('click',()=>{
        fetchMovie(pagin.innerText);
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
                movieslist.appendChild(t.html());
            });
            let pagination = document.querySelector(".pagination");
            pagination.style.display  = "flex";
        })
        .catch(err => console.log({ message: err }));
}

