const url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre "

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {

  let generos = data.data
  console.log(generos);
  console.log(data);

  let section = document.querySelector('.sectionGeneros')
  for (let i = 1; i < 5; i++) {
    section.innerHTML +=  `<article>
    <a class="aGeneros" href="./detalleGenero.html"><img class="imagenesGenero" src="${generos[i].picture_medium}"
          alt=""></a>
          <p class="pSection" >${generos[i].name}</p>
 </article>`

    
    
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})


