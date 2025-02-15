document.getElementById("btnDescubrir").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    let sorpresa = document.querySelector(".sorpresa");
    sorpresa.style.display = "block";

    let mensajes = document.querySelectorAll(".mensaje");
    mensajes.forEach((mensaje, index) => {
        setTimeout(() => {
            mensaje.style.opacity = "1";
        }, 1500 * (index + 1));
    });

    let corazon = document.querySelector(".corazon");
    setTimeout(() => {
        corazon.style.opacity = "0";
    }, 6000);

    let musica = document.getElementById("musica");
    musica.play();
});
