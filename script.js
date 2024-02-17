function comprar() {
  var nombre = document.getElementById("nombre").value;
  var vacias = parseInt(document.getElementById("vacia").value);
  var bolsas1 = parseInt(document.getElementById("bolsa").value);
  var bolsas2 = parseInt(document.getElementById("bolsas").value);
  var vacia = 250 * vacias;
  var bolsa = 1000 * bolsas1;
  var bolsas = 5800 * bolsas2;
  var total = (vacia + bolsa + bolsas);
  alert(nombre + " compra hecha por: $" + total);
}