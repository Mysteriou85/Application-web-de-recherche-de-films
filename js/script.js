const url = "http://www.omdbapi.com/?s";
const APIKEY=  "&apikey=afa3ef9";
let pour = document.querySelector('.bulb');

console.log(pour);
// fetch(url+"?s=spider man&apikey=f6e256e1")
// // fetch("http://www.omdbapi.com/?t=spider+man&apikey=f6e256e1")
// .then(res=>res.json())
// .then(data=>console.log(data))


class t {
    constructor(nom,color){
        this.nom = nom
        this.color = color
    }
    try(){
        console.log(`t = ${this.nom} + ${this.color}`);
    }
    html(){
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let block = document.createElement('div')
        h2.innerText =this.nom
        p.innerText =this.color
        block.appendChild(h2)
        block.appendChild(p)
        return block
    }
}
let tbob = new t('bob',"red")
let fich=tbob.html()
pour.append(fich)
