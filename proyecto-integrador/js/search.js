let artistas = document.querySelector('.arti')
let albums = document.querySelector('.alb')
let canciones = document.querySelector('.can')
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('busqueda')
 console.log(captura);
// traemos las canciones
 fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/search?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        canciones.innerHTML += `<a href="./detalleCanciones.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`  
    }
})
.catch(function(error) {
  console.log("Error: " + error);
})
// traemos los albums
fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/search/album?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        albums.innerHTML += `<a href="./detalleAlbum.html?id=${data.data[i].id}"><p>${data.data[i].title}</p></a>`  
    }
})
.catch(function(error) {
  console.log("Error: " + error);
})
// traemos los artistas
fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/search/artist?q=${captura}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        artistas.innerHTML += `<a href="./detalleArtista.html?id=${data.data[i].id}"><p>${data.data[i].name}</p></a>`  
    }
})
.catch(function(error) {
  console.log("Error: " + error);
})