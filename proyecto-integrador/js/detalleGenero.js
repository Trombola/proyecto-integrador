let locationQs = location.search
let workQs = new URLSearchParams(locationQs)
let capturarID = workQs.get('id')
let secGenero = document.querySelector('.detalleGeneros')
let titulo = document.querySelector('.tituloDetalleGeneros')

const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${capturarID}` // de aca sacas el genero
const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${capturarID}/artists` // de aca sacas el artista

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
  
  titulo.innerText = res.name
    
  for (let i = 0; i < res2.data.length; i++) {
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