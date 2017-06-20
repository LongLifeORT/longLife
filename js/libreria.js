/*    Libreria de funciones del programa   */


$(document).ready(main);



function main() {





}




 function tomarImagen(){
	  var nuevaImagen = $("#subir").val().split("\\").pop();
	  alert(nuevaImagen);
}	

function loginInicial(){
  $("#loginRegistro").html('<a href="#" id="login">Loguearse</a> | <a href="#" id="registro">Nuevo Registro</a>');
  $("#login").click(login);
  $("#registro").click(registro);
  $("#btnLogin").click(hola);

}