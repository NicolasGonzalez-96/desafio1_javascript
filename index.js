precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
// Función para actualizar la cantidad y el total a pagar
function actualizarCantidad(cambio) {
    var cantidadElement = document.querySelector(".cantidad");
    var precioInicial = parseFloat(document.querySelector(".precio-inicial").innerHTML);
    var cantidad = parseInt(cantidadElement.innerHTML);
    cantidad += cambio;
    if (cantidad < 0) {
        cantidad = 0;
    }
    cantidadElement.innerHTML = cantidad;
    var total = cantidad * precioInicial;
    document.querySelector(".valor-total").innerHTML = total;
}