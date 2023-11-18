

function calculateRoute() {
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;

    // Simulación del cálculo de la ruta
    var message = `Ruta calculada desde ${origin} hasta ${destination}`;

    // Mostrar el mensaje en el DOM
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${message}</p>`;
}

