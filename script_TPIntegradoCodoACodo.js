const precioTicket = 200;
function calcular(){
    document.getElementById('importe').value = 'TOTAL A PAGAR: $ '+(document.getElementById('cantidad').value*precioTicket*document.getElementById('seleccionCategoria').value);
}