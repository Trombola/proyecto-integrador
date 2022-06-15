let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('id');
let secCan = document.querySelector('.sectionDetalleCancion')
console.log(captura);


fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/track/${captura}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        secCan.innerHTML = `<h1>${data.title}</h1>
        <article>
                <ul>
                    <li>ARTISTA:</li>
                    <a href="./detalleArtista.html?id=${data.artist.id}"><li>${data.artist.name}</li> <br></a>
                    <li>DISCO:</li>
                    <a href="./detalleAlbum.html?id=${data.album.id}"><li>${data.album.title}</li></a>
                </ul>
        </article>
        <article>
                <img src="${data.album.cover}" alt="">
            </article>
            <article>
            <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${captura}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
            </article>
            <article>
            <h3> <a href="./playlist.html">AGREGAR A MI PLAYLIST</a> </h3>

            <h3> <a href="./playlist.html">VER MI PLAYLIST</a> </h3>
        </article>`
    })
    .catch(function (errores) {
        console.log(errores);
    })