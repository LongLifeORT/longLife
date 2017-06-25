	/*    Libreria de funciones del programa   */


$(document).ready(main);



function main() {

	
	//ocultamos la informacion de los formularios
	hideInfos();

	//listamos todas las especialidades disponibles
	arrListado = listadoEspecialidades(doctores);

	var crearConsultaMenu  = $(".crearConsultaMenu");
	var crearConsulta   = $(".menuCliente :first-child").eq(1);

	var buscarConsultaMenu = $(".buscarConsultaMenu");
	var misConsultas       = $(".menuCliente :first-child").eq(2);

	var modificarPerfilMenu  = $(".pagarConsultaMenu");
	var ConfigurarPerfil   = $(".menuCliente :first-child").eq(3);
	
	
	
	

	//menues para crear consulta
	crearConsultaMenu.on("click" , mostrarCrearConsulta);
	crearConsulta.on("click" , mostrarCrearConsulta);


	//menues para buscar consulta 
	misConsultas.on("click" , mostrarBuscarConsulta);
	buscarConsultaMenu.on("click" , mostrarBuscarConsulta);

	//menues para modificar el perfil
	ConfigurarPerfil.on("click" , mostrarModificarPerfil);
	//sidebar para modificar perfil
	modificarPerfilMenu.on("click" , mostrarModificarPerfil);
	//botonera en tablero para modificar perfil


	//mostrar tabla de consultas
	var configurarPerfil = $("#configurarPerfil");
	//
	var volverAMenu = $(".volverAMenu");
	volverAMenu.on("click" , showMenu);
	



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
	$("#resultadoCrearConsulta").html("");

	
}
//muestra la interface de buscar consulta
function mostrarBuscarConsulta() {
	hideInfos();
	hideMenues();
	var buscarConsultaInfo = $(".buscarConsultaInfo");
	buscarConsultaInfo.toggle();
	//$("#resultadoBuscarConsulta").html("");

}
// muestra la interface de modificar perfil
function mostrarModificarPerfil() {
	hideInfos();
	hideMenues();
	var modificarPerfilInfo = $(".modificarPerfilInfo");
	modificarPerfilInfo.toggle();

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
		if(array[i][prop] == valor){
			return i;
		}
	}
	return -1;
}

/**
 Objeto contador de consultas
*/

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
	var elementoBienvenida = '<h3 id="bienvenida" class="text-primary">Bienvenida/o '
		+ nombre
		+ '</h3>';
	contenedor.prepend(elementoBienvenida);
}

function borradoBienvenida(){
	var contenedor = $('#bienvenida');
	contenedor.html("");
}

/**
 calculo agnostico de IMC
*/

function calcularIMC(peso, altura){
	return peso / Math.pow(altura, 2);
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
		$(".botonera").show();
	}

	if(loginExito){
		usuarioIngresado = userLog;
		$("#login-form").modal('hide');
		mostrarOcultarBotonLoginLogout();

	}

	bienvenida(usuarioIngresado);
	console.log(usuarioIngresado);

}



/**
 Genera un número random entre 1 y el argumento

 _número = int
*/

function random(_numero){
	return Math.floor(Math.random() * (_numero - 1)) + 1;
}

/**
 Genera un número random entre el argumento +-10

 _media = int
*/

function randomMedia(_media){
	return Math.floor(Math.random() * ((_media + 10) - (_media - 10))) + (_media-10);
}

/**
 Genera una cedula random
*/

function randomCedula(){
	var cedula = "";
	for(var i = 0; i < 8; i++){
		cedula += random(9);
	}
	return cedula;
}