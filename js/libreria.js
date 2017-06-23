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
 	//mostrarTabla();
	var configurarPerfil = $("#configurarPerfil");


	var volverAMenu = $(".volverAMenu");
	volverAMenu.on("click" , showMenu);



	//$("#modificarPerfil").on('click', agregarFormPerfil)




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



var Counter = {
	value: 0,
	increment: function(){
		this.value++;
	},
	// Esta es la función que se llama en el constructor de las consultas, de manera que el objeto consulta tenga un par propiedad:valor, donde valor es un entero
	conteo: function(){
		this.increment();
		return this.value;
	},
	reset: function(){
		this.value = 0;
	}
}

/**
 Esta función despliega una bienvenida al usuario
 de la página
*/

function bienvenida(_usuario){
	var nombre = _usuario.nombre;
	//si agregamos genero
	// var terminacion = "";
	// if(_usuario.genero === 'm') { terminacion = "o" }
	// else{ terminacion = "a" }
	var contenedor = $('#contenedor-lateral');
	var elementoBienvenida = '<h3 class="text-primary">Bienvenida/o '
		+ nombre
		+ '</h3>';
	contenedor.prepend(elementoBienvenida);
}


// logica principal de login : accion de form login

function ingresarUsuario(){
	var usuario = $("#txt-usuario");
	var clave = $("#txt-clave");
	var contenedorError = $("#error-login");
	var loginExito = false;
	var medico = false;
	var userLog;

	for(var i = 0; i < doctores.length; i++){
		if(doctores[i].numeroProfesional === Number(usuario.val())){
			if(doctores[i].clave === Number(clave.val())){
				loginExito = true;
				medico = true;
				userLog = doctores[i];
			}
		}
	}
	for(var i = 0; i < pacientes.length; i++){
		if(pacientes[i].numeroPaciente === Number(usuario.val())){
			if(pacientes[i].clave === Number(clave.val())){
				loginExito = true;
				medico = false;
				userLog = pacientes[i];
			}
		}	
	}
	if(!loginExito || !validarVacio(usuario.val(), clave.val())){
		contenedorError.html("Usuario y/o contraseña incorrectos");
	}


	if(loginExito && medico){
		$(".menuDoctor").show();
	}else if(loginExito && !medico){
		$(".menuCliente").show();
	}

	if(loginExito){
		usuarioIngresado = userLog;
		$("#login-form").modal('hide');
		mostrarOcultarBotonLoginLogout();

	}
	bienvenida(usuarioIngresado);
}

