const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre "

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {

  let generos = data.data

  let section = document.querySelector('.sectionGeneros')
  
  for (let i = 0; i < generos.length; i++) {
    section.innerHTML +=  `<article class='articleDetalleGenero'>
    <a class="aGeneros" href="./detalleGeneros.html?id=${generos[i].id}">
    <img class="imagenesGenero" src="${generos[i].picture_medium}"
          alt=""></a>
          <p class="pGenero" >${generos[i].name}</p>
 </article>`

    
    
  }
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