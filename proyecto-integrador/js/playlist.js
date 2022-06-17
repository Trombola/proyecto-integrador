<<<<<<< HEAD
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
=======
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
>>>>>>> 97cc5e26c0f4ac482a72307d353739ec074f0605
