console.log("conectado")

document.getElementById("portaPapeles").addEventListener("click", function() {
    var link = document.getElementById("link-pagina").getAttribute("href");

    console.log("link")
    var tempInput = document.createElement("input");
    tempInput.setAttribute("type", "text");
    tempInput.value = link;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("El enlace ha sido copiado al portapapeles.");
});




// const btnCopiar = document.getElementById('portaPapeles').addEventListener('click', function() {
//     const link = document.getElementById('link-pagina');
//     console.log(link)
//     // navigator.clipboard.writeText(link)

//     // alert("El enlace ha sido copiado al portapapeles.");
// })