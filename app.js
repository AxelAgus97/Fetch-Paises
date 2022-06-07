let titDePaises= document.getElementById('tit-paises');
let contenedor= document.getElementById('contenedor')

let post = [];
function contadorP() {
    for (let i = 0; i <= post.length; i++) {
        console.log(post[i].name.common);
        titDePaises.innerHTML=post[i].name.common;
        contenedor.appendChild(titDePaises)
        //document.write(`${post[i].name.common}<br>`)
    }
}
fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(data=>{
        post=data;
        contadorP(post)
        mostrarP(post)
    })

function mostrarP(post) {
    post.map((post,i) =>{
        let titDePaises= document.getElementById('tit-paises');
        titDePaises.innerHTML= post[i].name.common;
        
    })
}