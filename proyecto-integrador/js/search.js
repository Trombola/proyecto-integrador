let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('busqueda')

// elementos del dom
let artistas = document.querySelector('.arti')
let albums = document.querySelector('.alb')
let canciones = document.querySelector('.can')
let serRes = document.querySelector('.searchResul')
let sec  = document.querySelector('.search')
let esconder = document.querySelector('.invisible')
let animacionDeCarga = document.querySelector('.animacionDeCarga')
let noData = document.querySelector('.noData')
let hacheDos = document.querySelectorAll('.escondite')
let artistas1 = document.querySelector('.arti2')
let albums1 = document.querySelector('.alb2')
let canciones1 = document.querySelector('.can2')


window.addEventListener('load', function () {
  esconder.style.display = 'none'
  setTimeout( function (){
    esconder.style.display = 'block'
    animacionDeCarga.style.display = 'none'
    if (artistas.style.display == 'none'&&albums.style.display == 'none'&&canciones.style.display == 'none') {
      noData.style.display = 'block'
    }
}, 2000);
})
noData.style.display = 'none'
  serRes.innerText =`Resultados de búsqueda para: ${captura}`
  // traemos las canciones
 fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    if (data.data.length == 0) {
      canciones.style.display = 'none'
    }
    else{
      for (let i = 0; i < data.data.length; i++) {
        canciones1.innerHTML += `<a href="./detalleCanciones.html?id=${data.data[i].id}" class='aSearch'>
                                  <p>${data.data[i].title}</p>
                                  <img src="${data.data[i].album.cover}" alt="" class='imagenesSearch'>
                                 </a>`  
    }
    }
    
})
.catch(function(error) {
  console.log("Error: " + error);
})
// traemos los albums
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    if (data.data.length == 0) {
        albums.style.display = 'none'
    }
    else{
      for (let i = 0; i < data.data.length; i++) {
        albums1.innerHTML += `<a href="./detalleAlbum.html?id=${data.data[i].id}" class='aSearch'>
                                  <p>${data.data[i].title}</p>
                                  <img src="${data.data[i].cover}" alt="" class='imagenesSearch'>
                              </a>`  
      }
    }
    
})
.catch(function(error) {
  console.log("Error: " + error);
})
// traemos los artistas
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    if (data.data.length == 0) {
      artistas.style.display = 'none'
  }
  else{
    for (let i = 0; i < data.data.length; i++) {
      artistas1.innerHTML += `<a href="./detalleArtista.html?id=${data.data[i].id}" class='aSearch'>
                                <p>${data.data[i].name}</p>
                                <img src="${data.data[i].picture}" alt="" class='imagenesSearch'>
                              </a>`  
  }
  }
  
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
