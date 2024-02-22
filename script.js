const share = document.querySelector('.share-button');
const compartir = document.querySelector('.compartir');
const texto = document.querySelector('.compartir-texto');



share.addEventListener('click' , () => {
    compartir.classList.remove('compartir');
    compartir.classList.toggle('activo');
    texto.classList.toggle('oula')

    const comprobar = compartir.classList.contains('activo');
    if (comprobar === true) {
        texto.innerHTML = "Share";

    } else {
        compartir.classList.add('compartir');
    }
    
})
