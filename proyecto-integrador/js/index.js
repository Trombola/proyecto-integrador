let secCanciones = document.querySelector('.homeCanciones')
let secAlbums = document.querySelector('.homeAlbumes')
let secArtistas = document.querySelector('.homeArtistas')

fetch('https://api.allorigins.win/raw?url= https://api.deezer.com/chart')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    /* Seccion de las canciones */
    for (let i = 0; i < 5; i++) {
    let titulo = data.tracks.data[i].title
    let nombreArtista = data.tracks.data[i].artist.name
    let imagenes = data.tracks.data[i].artist.picture
        secCanciones.innerHTML += `
    <article class="article">
    <p>${titulo}</p>
    <p>${nombreArtista}</p>
    <a href=""> <img src="${imagenes}" alt='' class='picture'></a>
    </article>`
    }
    /* Seccion albums */
    for (let i = 0; i < 5; i++) {
        let titulo = data.albums.data[i].title
        let nombreArtista = data.albums.data[i].artist.name
        let imagenes = data.albums.data[i].cover
            secAlbums.innerHTML += `
        <article class="article">
        <p>${titulo}</p>
        <p>${nombreArtista}</p>
        <a href=""> <img src="${imagenes}" alt='' class='picture'></a>
        </article>`
        }
    // Seccion artistas
    for (let i = 0; i < 5; i++) {
        let nombreArtista = data.artists.data[i].name
        let imagenes = data.artists.data[i].picture
            secArtistas.innerHTML += `
        <article class="article">
        <p>${nombreArtista}</p>
        <a href=""> <img src="${imagenes}" alt='' class='picture'></a>
        </article>`
        }
})
.catch(function(errores){
    console.log(errores);
})






