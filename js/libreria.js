/*    Libreria de funciones del programa   */


$(document).ready(main);



function main() {
	var crearConsultaMenu = $(".crearConsultaMenu");
	var buscarConsultaMenu = $(".buscarConsultaMenu");
	var pagarConsultaMenu = $(".pagarConsultaMenu");
	var preguntasMenu = $(".preguntasMenu");
	hideInfos();
	
	crearConsultaMenu.on("click" , mostrarCrearConsulta);
	buscarConsultaMenu.on("click" , mostrarBuscarConsulta);
	pagarConsultaMenu.on("click" , mostrarPagarConsulta);


	//mostrar tabla de consultas
 	mostrarTabla();
	var configurarPerfil = $("#configurarPerfil");


	var volverAMenu = $(".volverAMenu");
	volverAMenu.on("click" , showMenu);



	$("#modificarPerfil").on('click', agregarFormPerfil)




}
//ends main





//oculta todo los divs info para mostrar;
function hideInfos(){
	var infos = $(".infos");
	infos.hide();

}
//oculta todo los  divs menu para mostrar;
function hideMenues(){
	var menues = $(".menues");
	menues.fadeOut("200");

}
function showMenu(){
	var menues = $(".menues");
	menues.fadeIn("200");
	hideInfos();
}



// muestra la interface de crear consulta
function mostrarCrearConsulta() {
	hideInfos();
	hideMenues();
	var crearConsultaInfo = $(".crearConsultaInfo");
	crearConsultaInfo.toggle();

	//funtion para crear el formulario en el archivo Paciente.js
	formCrearConsulta();

}
//muestra la interface de buscar consulta
function mostrarBuscarConsulta() {
	hideInfos();
	hideMenues();

	var buscarConsultaInfo = $(".buscarConsultaInfo");
	buscarConsultaInfo.toggle();

	//function para buscar el formulario  en el archivo Paciente.js
	formBuscarConsulta();


}
// muestra la interface de pagar consulta
function mostrarPagarConsulta() {
	hideInfos();
	hideMenues();

	var pagarConsultaInfo = $(".pagarConsultaInfo");
	pagarConsultaInfo.toggle();

	//function para pagar consulta
	formPagarConsulta();

}


//function mostrar tabla
function mostrarTabla(){
var consultasGeneradas = $("#consultasGeneradas");
// la tabla se crea en Paciente.js
var tabla = crearTabla();
consultasGeneradas.html(tabla)

}





/**
 retorna indice donde esta el objeto en array indexado

 array array
 prop string
 valor any

 return int
*/
function busquedaEnArrayObjetos(array, prop, valor){
	for(var i = 0; i < array.length; i++){
		if(array[i][prop] = valor){
			return i;
		}
	}
	return -1;
}