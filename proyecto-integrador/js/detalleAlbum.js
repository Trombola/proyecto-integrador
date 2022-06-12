let sec = document.querySelector('.dalbum');
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('id');


fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/album/${captura}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let listaCanciones = ''
        
        for (let i = 0; i < data.tracks.data.length; i++) {
           listaCanciones += `<li>${data.tracks.data[i].title} </li>`
        }
        sec.innerHTML = `
            <article>
                <h1 class="titulo">${data.title}</h1>
                <img class="dalbum" src="${data.cover}" alt="">
            </article>
            <article>
                <h3>ARTISTA:</h3>
                <a href="./detalleArtista.html?id=${data.artist.id}"><p class='estreno'>${data.artist.name}</p></a>

                <h3>GENERO:</h3>
                <p class='rating'>${data.genres.data[0].name}</p>

                <h3>FECHA DE PUBLICACION:</h3>
                <p class='rating'>${data.release_date} </p>
            </article>
            <article>
                <h3>CANCIONES DEL ALBUM:</h3>
                <ul>
                    ${listaCanciones}
                </ul>
            </article>`
    })
    .catch(function (errores) {
        console.log(errores);
    })