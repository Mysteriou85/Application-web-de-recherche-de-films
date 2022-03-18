const url = "http://www.omdbapi.com/?s=";
const APIKEY=  "&apikey=afa3ef9";
let body = document.querySelector('.box');
let recherche = document.querySelector('input')
let btn = document.querySelector('button')


class Movie {
    constructor(Title,Poster,Type,Year,imdbID){
        this.Title = Title
        this.img = Poster
        this.Type = Type
        this.Year = Year
        this.imdbID = imdbID
    }
    html(){
        let block   = document.createElement('div')

        let h2      = document.createElement('h2')
        let img     = document.createElement('img')
        let blockimg= document.createElement('div')
        let Type    = document.createElement('p')
        let Year    = document.createElement('p')
        let imdbID  = document.createElement('a')

        h2.innerText    = this.Title
        img.src         = this.img
        Type.innerText  = this.Type
        Year.innerText  = this.Year
        imdbID.href     = "page.html"

        imdbID.setAttribute('onclick',`gopage("${this.imdbID}")`)
        // imdbID.setAttribute('target',"blank")

        imdbID.classList.add("page")
        blockimg.classList.add('block-image')
        blockimg.appendChild(img)
        
        imdbID.appendChild(blockimg)
        imdbID.appendChild(h2)
        imdbID.appendChild(Type)
        imdbID.appendChild(Year)
        
        block.appendChild(imdbID)
        
        return block
    }
    goPage(){
        return this.imdbID
    }
}

btn.addEventListener('click',()=>{
    body.innerHTML = ""
    fetch(url + recherche.value+  APIKEY)
    .then(res=>res.json())
    .then(data=>{
        
        
        data.Search.forEach(movie => {
            // console.log(movie);
            let t = new Movie(
                movie.Title,
                movie.Poster,
                movie.Type,
                movie.Year,
                movie.imdbID
            )
            body.appendChild(t.html())
        });
    })
    .catch(err=>console.log({message:err}))
})
function gopage(id) {
    localStorage.setItem('movie',id)
}



