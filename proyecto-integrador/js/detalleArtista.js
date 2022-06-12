let sec = document.querySelector('.dArtista');
let guardarDatos = '';
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let captura = qsObj.get('id');

// obtenemos la informacion del cantante clickeado en la home
fetch(`https://api.allorigins.win/raw?url= https://api.deezer.com/artist/${captura}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        fetch(`https://api.allorigins.win/raw?url= ${data.tracklist}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data2) {
                for (let i = 0; i < 5; i++) {
                    guardarDatos += `<li>${data2.data[i].title}</li>`
                }

                console.log(guardarDatos);

                sec.innerHTML = `
            <article class='art'>    
                <h1>${data.name}</h1>
                <img src="${data.picture}" alt="">
            </article>
            <article class='art'>
                <h3>TOP 5 CANCIONES:</h3>
                <ul>
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