let lista = document.getElementById("lista")

function consultarpokemon(id, num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response){
        response.json()
        .then(function(pokemon){
            crearpokemon(pokemon, num)
        })  
    })
}

function consultarpokemones(){
    let primerid = Math.round(Math.random() * 150)
    let segunid = Math.round(Math.random() * 150)

    consultarpokemon(primerid, 1)
    consultarpokemon(segunid, 2)
}

function crearpokemon(pokemon, num){
let item = lista.querySelector(`#pokemon-${num}`)

let imagen = item.getElementsByTagName("img")[0]
imagen.setAttribute("src", pokemon.sprites.front_default)


let nombre = item.getElementsByTagName("p")[0]
nombre.textContent = pokemon.name


}


consultarpokemones()


var campo = new Array()
campo[0] = "soleado <br> ☀️"
campo[1] = "despejado <br> ⛅"
campo[2] = "nublado <br> ☁️"
campo[3] = "arenoso <br> 🌥️"
campo[4] = "lluvioso <br> 🌧️"
campo[5] = "nieve <br> 🌨️"
campo[6] = "viento <br> 🌪️"
campo[7] = "niebla <br> 🌫️"
campo[8] = "arcoiris <br> 🌈"
var rand = Math.floor(Math.random()*campo.length);


var Q = campo.length;
 
function mostrarFrases() {
var numAleatorio=Math.round(Math.random()*(Q-1));
document.getElementById("clima").innerHTML=campo[numAleatorio];
}


function todas(){
mostrarFrases()
consultarpokemones()
}

