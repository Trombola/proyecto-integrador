let section = document.querySelector('.playlist')

let favoritos = []

localStorage.setItem('favoritos', 'Desesperados')

let obtener_localStorage = localStorage.getItem('favoritos')

let favoritosObtenidos = JSON.parse(obtener_localStorage)


if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay canciones en favoritos</p>';
} else {
    /* Si contiene canciones en favoritos: */

    for (let i = 0; i < favoritos.length; i++) {
        /* Buscar la cancion */
        const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${captura}`;   
        
        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                section.innerHTML  += `<article>
             <p>${localStorage.getItem('favoritos')}</p>
                                    </article> ` 
            }).catch(function(error) {
                console.log(error);
            })
    }
}