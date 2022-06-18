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
                section.innerHTML += `<article>
            <h1>${data.title} </h1>  
          
            <ul>
            <li>ARTISTA:</li>
            <a href="./detalleArtista.html?id=${data.artist.id}"><li>${data.artist.name}</li></a>
          </ul>
         <img src="${data.album.cover}" alt="">
            
           

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