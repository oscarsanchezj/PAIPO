function validarFormulario() {

  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var tlf = document.getElementById("tlf").value;
  var dir = document.getElementById("dir").value;
  var localidad = document.getElementById("localidad").value;
  var provincia = document.getElementById("provincia").value;
  var cp = document.getElementById("cp").value;

  var mensaje = "Atención! Debe rellenar los siguientes campos para realizar su pedido: \n\n";
  var error = false;

  if(nombre.length == 0) {
    mensaje += "\"Nombre\"  ";
    error = true;
  }

  if(apellidos.length == 0) {
    mensaje += "\"Apellidos\"  ";
    error = true;
  }

  if(email.length == 0) {
    mensaje += "\"Email\"  ";
    error = true;
  }

  if(tlf.length == 0) {
    mensaje += "\"Teléfono\"  ";
    error = true;
  }

  if(dir.length == 0) {
    mensaje += "\"Dirección\"  ";
    error = true;
  }

  if(localidad.length == 0) {
    mensaje += "\"Localidad\"  ";
    error = true;
  }

  if(provincia.length == 0) {
    mensaje += "\"Provincia\"  ";
    error = true;
  }

  if(cp.length == 0) {
    mensaje += "\"Código postal\"  ";
    error = true;
  }

  if(error == true) {
    alert(mensaje);
  } else {
    alert("Pedido realizado correctamente");
    error = false;
  }

}