let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('id');

// capturando elementos del dom

let hacheUno = document.querySelector('.tituloDetalleCancion')
let articulo = document.querySelector('.articleDetalleCancion')

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${captura}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        hacheUno.innerText = data.title
        articulo.innerHTML += `
                <ul class='listDetalleCancion'>
                    <li>ARTISTA:</li>
                    <li><a href="./detalleArtista.html?id=${data.artist.id}">${data.artist.name}</a></li>
                    <br>
                    <li>DISCO:</li>
                    <li><a href="./detalleAlbum.html?id=${data.album.id}">${data.album.title}</a></li>
                    <br>
                    <li><img src="${data.album.cover}" alt=""></li>
                </ul>
                <iframe class='playerDetalleCancion' title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${captura}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`

    })
    .catch(function (errores) {
        console.log(errores);
    })

// js para agregar a la playlist
let favoritos = []
// recuperamos los datos del local storage
let recuperoStorage = localStorage.getItem('favoritos')
/* Si habian datos en el localStorage hacemos que favoritos tome 
ese valor transformado de string a objeto literal */
if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}
// capturamos el boton
let btnFav = document.querySelector('.btnPlaylist')
/* si la cancion ya se encontraba en la playlist hacemos
que el boton cambie el innerText para avisar al usuario */
if (favoritos.includes(captura)) {
    btnFav.innerText = 'Eliminar de playlist'
}
/* Luego de los validadores queremos que cuando el usuario 
haga click se elimine o agregue el id de la cancion al localStorage */
btnFav.addEventListener('click', function () {
    /* Si el id de la cancion ya se encontraba en 
    el local storage y aprieta el boton 
    queremos que este elimine el id y que se 
    cambie el texto del boton */
    if (favoritos.includes(captura)) {
        let indice = favoritos.indexOf(captura);
        favoritos.splice(indice, 1);
        btnFav.innerText = 'AGREGAR A MI PLAYLIST';
    } else {
        favoritos.push(captura);
        btnFav.innerText = 'Eliminar de playlist';
    }
    let playlistString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', playlistString)
})


// js para el formulario 

let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campo.value == '') {
        alert('el campo esta vacio')
    } else if (campo.value.length < 3) {
        alert('el termino buscado debe tener al menos tres caracteres')
    } else {
        this.submit()
    }
})