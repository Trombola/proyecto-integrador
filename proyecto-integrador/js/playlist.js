let temasRecuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(temasRecuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.playlist');

let cancionesFavoritos = '';

/* Evaluar el localStorage */

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay items en favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < favoritos.length; i++) {
        /* Buscar el personaje */
        const URL = `https://api.allorigins.win/raw?url=https://api.deezer.com/playlist/908622995${favoritos[i]}`;   
        
        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                cancionesFavoritos += `<article>
                                         <p>Nombre de Playlist: ${data.title}</p>
                                         <img src=${data.image}>
                                          <a href="/detalle.html?id=${data.id}">Ir a detalle</a>
                                    </article> 
                                    <hr>` 
            section.innerHTML = cancionesFavoritos;
            }).catch(function(error) {
                console.log(error);
            })
    }
}


const url = " https://api.allorigins.win/raw?url=https://api.deezer.com/playlist/908622995"

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
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