let artistas = document.querySelector('.arti')
let albums = document.querySelector('.alb')
let canciones = document.querySelector('.can')
let serRes = document.querySelector('.searchResul')
let sec  = document.querySelector('.search')
let esconder = document.querySelectorAll('.sep')
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('busqueda')

window.addEventListener('load', function () {
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
      for (let i = 0; i < 5; i++) {
        canciones.innerHTML += `<a href="./detalleCanciones.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`  
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
      for (let i = 0; i < 5; i++) {
        albums.innerHTML += `<a href="./detalleAlbum.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`  
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
    for (let i = 0; i < 5; i++) {
      artistas.innerHTML += `<a href="./detalleArtista.html?id=${data.data[i].id}"><p>${data.data[i].name}</p></a>`  
  }
  }
  if (artistas.style.display == 'none'&&albums.style.display == 'none'&&canciones.style.display == 'none') {
    alert('no hay resultados coincidentes con el termino buscado')
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})

  

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
