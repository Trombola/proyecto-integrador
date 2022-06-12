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
        console.log(data);
        fetch(`https://api.allorigins.win/raw?url= ${data.tracklist}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data2) {
                console.log(data2);
            let contador = 0   
            let guardarValor = data2.data[0].album.title
            for (let i = 0; i < data2.data.length ; i++) {
                
                if(contador<5){
                    if (data2.data[i].album.title != guardarValor) {
                        guardarDatos += `<a href="./detalleAlbum.html?id=${data2.data[i].album.id}"><li>${data2.data[i].album.title}</li></a>`
                        contador++
                    }
                }
                    guardarValor = data2.data[i].album.title
                }            

                console.log(guardarDatos);

                sec.innerHTML = `
            <article class='art'>    
                <h1>${data.name}</h1>
                <img src="${data.picture}" alt="">
            </article>
            <article class='art'>
                <h3>Albums:</h3>
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