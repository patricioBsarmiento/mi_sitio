document.addEventListener('DOMContentLoaded', () => { //se ejecuta lo de las llaves cuando haya cargado mi documento
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500
    });
}) 