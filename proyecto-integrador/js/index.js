//js de la pagina
let listCanciones = document.querySelector('.lisCan')
let listAlbums = document.querySelector('.lisAlb')
let listArtistas = document.querySelector('.lisArt')

fetch('https://api.allorigins.win/raw?url= https://api.deezer.com/chart')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.artists.data[0].id);
        /* Seccion de las canciones */
        for (let i = 5; i < 10; i++) {
            let titulo = data.tracks.data[i].title
            let nombreArtista = data.tracks.data[i].artist.name
            let imagenes = data.tracks.data[i].artist.picture
            let id = data.tracks.data[i].id
            listCanciones.innerHTML += `
    <article class="article">
    <p>${titulo}</p>
    <p>${nombreArtista}</p>
    <a href="./detalleCanciones.html?id=${id}"> <img src="${imagenes}" alt='' class='picture'></a>
    </article>`
        }
        /* Seccion albums */
        for (let i = 0; i < 5; i++) {
            let titulo = data.albums.data[i].title;
            let nombreArtista = data.albums.data[i].artist.name;
            let imagenes = data.albums.data[i].cover;
            let id = data.albums.data[i].id;

            listAlbums.innerHTML += `
        <article class="article">
        <p>${titulo}</p>
        <p>${nombreArtista}</p>
        <a href="./detalleAlbum.html?id=${id}"> <img src="${imagenes}" alt='' class='picture'></a>
        </article>`
        }
        // Seccion artistas
        for (let i = 0; i < 5; i++) {
            let nombreArtista = data.artists.data[i].name
            let imagenes = data.artists.data[i].picture
            let id = data.artists.data[i].id
            listArtistas.innerHTML += `
        <article class="article">
        <p>${nombreArtista}</p>
        <a href="./detalleArtista.html?id=${id}"> <img src="${imagenes}" alt='' class='picture'></a>
        </article>`
        }
    })
    .catch(function (errores) {
        console.log(errores);
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