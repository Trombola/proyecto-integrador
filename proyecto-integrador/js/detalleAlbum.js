window.addEventListener('load', function () {
    let sec = document.querySelector('.dalbum');
    let qs = location.search;
    let qsObj = new URLSearchParams(qs);
    let captura = qsObj.get('id');


    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${captura}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let listaCanciones = ''

            for (let i = 0; i < data.tracks.data.length; i++) {
                listaCanciones += `<a class="aGeneros" href="./detalleCanciones.html?id=${data.tracks.data[i].id}"><li>${data.tracks.data[i].title}</li></a>`
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
                <a class="aGeneros" href="./detalleGeneros.html?id=${data.genres.data[0].id}"><p class='rating'>${data.genres.data[0].name}</p></a>

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
})