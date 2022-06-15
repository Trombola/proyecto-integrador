let locationQs = location.search
let workQs = new URLSearchParams(locationQs)
let capturarID = workQs.get('id')
console.log(capturarID);
let secGenero = document.querySelector('.detalleGeneros')

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre` // de aca sacas el genero
const url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${capturarID}/artists` // de aca sacas el artista

fetch(url) // traes todos los generos
.then(function(response) {
  return response.json()
})
.then(function(res) {

  console.log(res); // este objeto contiene los generos y su info
fetch(url2) // traes los artistas del genero seleccionado
.then(function(response) {
  return response.json()
})
.then(function(res2) {
  console.log(res2);
  for (let i = 0; i < res.data.length; i++) {
    if (capturarID==res.data[i].id){
      secGenero.innerHTML = `<article>${res.data[i].name}</article>`
    }
    
  }
  for (let i = 0; i < 5; i++) {
    secGenero.innerHTML += ` <a href="./detalleArtista.html?id=${res2.data[i].id}"><article>
    <img class="imagenesDetalleGenero" src="${res2.data[i].picture_medium}" alt="">
          <p class="pSection" >${res2.data[i].name}</p>
 </article></a>`
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
 
})
.catch(function(error) {
  console.log("Error: " + error);
})


// js para el formulario 

let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
formulario.addEventListener('submit', function (e) {
 e.preventDefault()
 if(campo.value == ''){
    alert('el campo esta vacio')
 } else if (campo.value.length<3){
    alert('el termino buscado debe tener al menos tres caracteres')
 }else{
    this.submit()
 }
})