// formulario de reserva
// valida que la fecha de la reserva no sea en el pasado

document.getElementById("reserva-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const fecha = document.getElementById("fecha").value;
    
    if (new Date(fecha) < new Date()) {
        alert("No puedes seleccionar una fecha pasada.");
        return;
    }

    alert(`Reserva confirmada:\nNombre: ${nombre} ${apellidos}\nFecha: ${fecha}`);
});

