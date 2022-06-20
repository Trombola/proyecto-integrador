let section = document.querySelector('.playlist')
let recuperoStorage = localStorage.getItem('favoritos')
let canciones = JSON.parse(recuperoStorage)

if (canciones.length == 0) {
    section.innerHTML = '<p>no hay canciones en la playlist</p>'
} else {
    for (let i = 0; i < canciones.length; i++) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${canciones[i]}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                section.innerHTML += `
            <article class='play'>
                <div>
                    <h2><a href="./detalleCanciones.html?id=${data.id}">${data.title}</a></h2>  
                    <ul>
                        <li>ARTISTA:</li>
                        <a href="./detalleArtista.html?id=${data.artist.id}"><li>${data.artist.name}</li></a>
                    </ul>
                    <img src="${data.album.cover}" alt="">
                </div>
                <div class='divPlayerPlaylist'>
                    <iframe class='playerPlaylist' title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${data.id}" width="80%" height="200px" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                </div>
            </article>`

            })
            .catch(function (errores) {
                console.log(errores);
            })

    }
}

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