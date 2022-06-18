let sec = document.querySelector('.dArtista');
let guardarDatos = '';
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('id');
console.log(captura);
// obtenemos la informacion del cantante clickeado en la home
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${captura}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${captura}/albums`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data2) {
                console.log(data2);
        
            for (let i = 0; i < 5; i++) {
                guardarDatos += `<a href="./detalleAlbum.html?id=${data2.data[i].id}">
                <li>${data2.data[i].title}</li><img src="${data2.data[i].cover}" alt="" class='imgAlbumDetalleArtista'></a>`
                }          

                console.log(guardarDatos);

                sec.innerHTML = `
            <article class='art'>    
                <h1>${data.name}</h1>
                <img src="${data.picture}" alt="" class='imgArtista'>
            </article>
            <article class='art dArtistaResponsiveArticulos'>
                <h3>Albums:</h3>
                <ul class='listadoAlbums'>
                    ${guardarDatos}
                </ul>
            </article>`
            })
            .catch(function (errores) {
                console.log(errores);
            })



    })
    .catch(function (errores) {
        console.log(errores);
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