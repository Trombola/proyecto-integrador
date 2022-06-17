let obtener_localStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

/* capturar el elemento en el dom */;

let section = document.querySelector('.playlist');

let cancionesAgregadas = '';

/* Evaluar el localStorage */

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay items en favoritos</p>';
} else {
    /* Si contiene elementos */

    for (let i = 0; i < favoritos.length; i++) {
        /* Buscar el personaje */

        /* Buscar la cancion */
        const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${captura}`;   
        
        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                cancionesAgregadas += `<article>                   
                                        <p>Nombre: ${data.data[i].title}</p>
                                        <p>Nombre: ${data.data[i].fans}</p>
                                        <p>Nombre: ${data.data[i].link}</p>
                                        <p>Nombre: ${data.data[i].share}</p>
                                        <img src=${data.data[i].picture}>
                                        <a href="./detalleCancion.html?id=${data.data[i].id}">Ir a detalle Cancion</a>
                                    </article> 
                                    <hr>` 
            section.innerHTML = cancionesAgregadas;
            }).catch(function(error) {
                console.log(error);
            })
    }
}







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