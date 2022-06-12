let locationQs = location.search
let workQs = new URLSearchParams(locationQs)
let capturarID = workQs.get('id')
console.log(capturarID);
let secGenero = document.querySelector('.detalleGeneros')

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre` // de aca sacas el genero
const url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${capturarID}/artists` // de aca sacas el artista
fetch(url) // traes todos los generos
.then(function(response) {
  return response.json()
})
.then(function(res) {

  console.log(res); // este objeto contiene los generos y su info
fetch(url2) // traes los artistas del genero seleccionado
.then(function(response) {
  return response.json()
})
.then(function(res1) {
  console.log(res1);
  for (let i = 0; i < res.data.length; i++) {
    if (capturarID==res.data[i].id)
    console.log(res.data[i].name);
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
 
})
.catch(function(error) {
  console.log("Error: " + error);
})

