const url = "http://www.omdbapi.com/?s=";
const APIKEY = "&apikey=afa3ef9";
let page = 1;
let movieslist = document.querySelector("#movieslist");
let recherche = document.querySelector("input");
let searchbtn = document.querySelector("button[id='Searchbutton']");
let pagins = document.querySelectorAll(".pagin");
let nexts = document.querySelectorAll(".next");
let pagination = document.querySelector(".pagination");

class Movie {
  constructor(Title, Poster, Type, Year, imdbID) {
    this.Title = Title;
    this.img = Poster;
    this.Type = Type;
    this.Year = Year;
    this.imdbID = imdbID;
  }
  html() {
    let block = document.createElement("div");

    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    let moviecontent = document.createElement("div");
    let movietext = document.createElement("div");
    let Type = document.createElement("p");
    let Year = document.createElement("p");
    let imdbID = document.createElement("a");

    h2.innerText = this.Title;
    img.src = this.img;
    Type.innerText = this.Type;
    Year.innerText = this.Year;
    imdbID.href = "pagefilm.html";

    imdbID.setAttribute("onclick", `gopage("${this.imdbID}")`);

    moviecontent.appendChild(img);
    movietext.appendChild(h2);
    movietext.appendChild(Year);

    imdbID.appendChild(moviecontent);
    imdbID.appendChild(movietext);

    block.appendChild(imdbID);

    moviecontent.style.backgroundImage = "url(" + img.src + ")";
    moviecontent.style.backgroundRepeat = "no-repeat";
    moviecontent.style.backgroundSize = "100% 100%";

    movietext.classList.add("moviestextcontainer");
    //add class for block

    block.classList.add("moviesection");
    img.classList.add("moviesposter");
    moviecontent.classList.add("moviesimagecontainer");

    return block;
  }
}

recherche.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchbtn.click();
  }
});

// lance ca recherche
searchbtn.addEventListener("click", () => {
  fetchMovie();
});

//  gere la pagination numero
pagins.forEach((pagin) => {
  pagin.addEventListener("click", () => {
    fetchMovie(pagin.innerText);
  });
});

//  gere la pagination fléché
nexts.forEach((next) => {
  next.addEventListener("click", () => {
    if (next.classList[1] === "nextRight" && page < 5) {
      page++;
    }

    if (next.classList[1] === "nextLeft" && page > 1) {
      page--;
    }
    fetchMovie(page);
  });
});

// function assemble l'url et affiche le contenue dans le main
function fetchMovie(page) {
  movieslist.innerHTML = "";
  let fetchUrl = page
    ? url + recherche.value + `&page=${page}` + APIKEY
    : url + recherche.value + APIKEY;

  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      // si reponse est bonne
      if (data.Response == "True") {
        data.Search.forEach((movie) => {
          let t = new Movie(
            movie.Title,
            movie.Poster,
            movie.Type,
            movie.Year,
            movie.imdbID
          );
          movieslist.appendChild(t.html());
        });

        pagination.style.display = "flex";
      }
      // si reponse fause
      else {
        let fail = document.createElement("p");
        let failImage = document.createElement("img");
        let failcontent = document.createElement("div");

        failImage.src = "https://c.tenor.com/b9k82qg9_NAAAAAd/sonic-dance.gif";
        fail.innerText =
          "domage petit apprend tes nom de film et on verra plus tard";

        failcontent.style.gridColumn = 3;

        failcontent.appendChild(failImage);
        failcontent.appendChild(fail);
        movieslist.appendChild(failcontent);
        pagination.style.display = "none";
      }
    })
    .catch((err) => console.log({ message: err }));
}

// fonction permetant stocker les info du film click pour la page 2
function gopage(id) {
  localStorage.setItem("movie", id);
}
