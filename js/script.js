const url = "http://www.omdbapi.com/?s=";
const APIKEY=  "&apikey=afa3ef9";
let body = document.querySelector('body');
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
        let Type    = document.createElement('p')
        let Year    = document.createElement('p')
        let imdbID  = document.createElement('a')

        h2.innerText    = this.Title
        img.src         = this.img
        Type.innerText  = this.Type
        Year.innerText  = this.Year
        imdbID.href     = this.imdbID

        imdbID.appendChild(img)
        imdbID.appendChild(h2)
        imdbID.appendChild(Type)
        imdbID.appendChild(Year)
        
        block.appendChild(imdbID)
        
        return block
    }
}

btn.addEventListener('click',()=>{
    fetch(url + recherche.value+  APIKEY)
    .then(res=>res.json())
    .then(data=>{
        
        
        data.Search.forEach(movie => {
            console.log(movie);
            let t = new Movie(
                movie.Title,
                movie.Poster,
                movie.Type,
                movie.Year,
                movie.imdbID
            )
            body.appendChild(t.html())
            console.log( body);
        });
    })
    .catch(err=>console.log({message:err}))
})



