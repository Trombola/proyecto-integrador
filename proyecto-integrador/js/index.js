//js de la pagina
//obtenemos los elementos del dom
//document es un objeto literal que representa el html cargado
// Utilizamos un selector, querySelector(), que recibe un string indicando el elemento a capturar.
let listCanciones = document.querySelector('.lisCan')
let listAlbums = document.querySelector('.lisAlb')
let listArtistas = document.querySelector('.lisArt')

//Utilizamos el metodo fetch que recibe como parametro la URL a la API, tambien conocido como endpoint
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
     /* Luego utilizamos el metodo .then() que tiene un callback 
    que tiene como parametro la respuesta del fetch*/
    .then(function (response) {
        /* Utilizando el metodo .json() convertimos la respuesta en un objeto literal */
        return response.json();
    })
    /* El segundo metodo .then() recibe como parametro un callback que tiene como 
    parametro el la informacion obtenida en el primer .then()*/
    .then(function (data) {
    /* Dentro de esta funcion ya podemos trabajar con los datos provistos por la API */
        console.log(data);
        /* Seccion de las canciones */
        /* utilizamos un ciclo for para recorrer el array que tiene las canciones */
        for (let i = 0 ; i < 5 ; i++) {
            /* Asignamos un valor de la API a una variable para mostrarlo */
            let titulo = data.tracks.data[i].title
            let nombreArtista = data.tracks.data[i].artist.name
            let imagenes = data.tracks.data[i].artist.picture
            let id = data.tracks.data[i].id
            /* Modificaremos un elemento del DOM utilizando el .innerHTML
            Ademas usaremos las template strings para poder utilizar los
            datos asignado a las variables previamente */
            listCanciones.innerHTML += `
                <li class="article">
                    <p>
                        <a href="./detalleCanciones.html?id=${id}">${titulo}</a> by <a href="./detalleArtista.html?id=${data.tracks.data[i].artist.id}">${nombreArtista}</a>
                    </p>
                    <a href="./detalleCanciones.html?id=${id}" class='aParaResponsive'> <img src="${imagenes}" alt='' class='picture'></a>
                </li>`
        }
        /* Seccion albums */
        
        for (let i = 0; i < 5; i++) {
            let titulo = data.albums.data[i].title;
            let nombreArtista = data.albums.data[i].artist.name;
            let imagenes = data.albums.data[i].cover;
            let id = data.albums.data[i].id;
            listAlbums.innerHTML += `
                <li class="article">
                    <p>
                        <a href="./detalleAlbum.html?id=${id}">${titulo}</a> by <a href="./detalleArtista.html?id=${data.albums.data[i].artist.id}">${nombreArtista}</a>
                    </p>
                    <a href="./detalleAlbum.html?id=${id}" class='aParaResponsive'> <img src="${imagenes}" alt='' class='picture'></a>
                </li>`
        }
        // Seccion artistas
        for (let i = 0; i < 5; i++) {
            let nombreArtista = data.artists.data[i].name
            let imagenes = data.artists.data[i].picture
            let id = data.artists.data[i].id
            listArtistas.innerHTML += `
                <li class="article">
                    <p>${nombreArtista}</p>
                    <a href="./detalleArtista.html?id=${id}" class='aParaResponsive'> <img src="${imagenes}" alt='' class='picture'></a>
                </li>`
        }
    })
    /* Finalmente utilizamos el metodo .catch() el cual
    atrapa los errores en cualquier instancia del fetch, este tiene un callback
    que recibe como parametro el error */
    .catch(function (errores) {
        console.log(errores);
    })

// js para el formulario 
// capturamos elementos del dom
let formulario = document.querySelector('form.header')
let campo = document.querySelector('.campo')
/* En este caso estamos esperando a que suceda algo con el formulario
El addEventListener es una funcion nativa del javaScript, esta recibe como parametros
el evento y luego un callback que tiene como parametro el evento sucedido */
formulario.addEventListener('submit', function (e){
/* Dentro del call back podemos utilizar la funcion .preventDefault() para evitar
comportamientos nativos del elemento HTML */
 e.preventDefault()
 /* Utilizamos validadores para asegurarnos que se cumplan ciertas condiciones */
 if(campo.value == ''){
    alert('el campo esta vacio')
 } else if (campo.value.length<3){
    alert('el termino buscado debe tener al menos tres caracteres')
 }else{
    this.submit()   /* Si no existen errores enviamos el formulario con el metodo .submit() */
 }
})