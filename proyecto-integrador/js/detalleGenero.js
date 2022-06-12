let locationQs = location.search
let workQs = new URLSearchParams(locationQs)
let capturarID = workQs.get('id')
let array = ""


const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre${capturarID}`

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(res) {


  let idDg = res.data
  console.log(idDg);

  
  let dg = document.querySelector('.detalleGeneros')
  for (let i = 0; i < array.length; i++) {
    dg.innerHTML += `<p class="artistasDetalleGenero">${idDg[i].artists}</p>`

    
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})

