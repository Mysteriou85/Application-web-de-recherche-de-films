const url = "http://www.omdbapi.com/?s=";
const APIKEY = "&apikey=afa3ef9";
let page = 1
let movieslist = document.querySelector('#movieslist');
let recherche = document.querySelector('input')
let searchbtn = document.querySelector("button[id='Searchbutton']")
let pagins = document.querySelectorAll('.pagin')
let nexts = document.querySelectorAll('.next')

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

pagins.forEach(pagin => {
    pagin.addEventListener('click',()=>{
        fetchMovie(pagin.innerText)
    })
});
nexts.forEach(next => {
    next.addEventListener('click',(e)=>{
        console.log(next.classList[1]);
        if(next.classList[1] === "nextRight" && page < 5){
            page++
        }
        
        if (next.classList[1] === "nextLeft" && page > 1) {
            page--
        }
        fetchMovie(page)
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
        })
        .catch(err => console.log({ message: err }))
        console.log(page);
}
function gopage(id) {
    localStorage.setItem('movie',id)
}




