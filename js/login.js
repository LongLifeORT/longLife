/**
Login
*/

// variable global que contiene el usuario objeto a maniputar

var usuarioIngresado;

//oculto menús que no interesan

function ocultarMenus(){
	$(".menuInfo").hide();
	$(".menuCliente").hide();
	$(".menuDoctor").hide();
}


// agregar boton de login

function agregarBotonLogin(){
	var contenedor = $('#navbar ul');
	contenedor.append(''
		+ '<li class="text-center">'
		+ '<button type="button" class="btn btn-primary navbar-btn" data-toggle="modal" data-target=".login-form" id="login-ingresar">'
		+ 	'Ingresar'
		+ '</button></li>');
}

// agrego botón de logout

function agregarBotonSalida(){
	var contenedor = $('#navbar ul');
	contenedor.append('<li><a href="#" style="display:none" id="logout">Salir</a></li>');
}

// generar form login

function agregarFormLogin(){
	var form = '<div id="login-form" class="modal fade login-form" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'
		+ '<div class="modal-dialog modal-sm" role="document">'
		+ 	'<div class="modal-content">'
		+ 		'<div class="modal-header">'
		+ 			'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
		+			'<h4 class="modal-title">Modal title</h4>'
		+		'</div>'
		+		'<div class="modal-body">'
		+			'<form id="my-login">'
		+				'<div class="form-group">'
		+					'<label for="txt-usuario">Usuario:</label>'
		+					'<input type="text" class="form-control" id="txt-usuario" name="txt-usuario">'
		+				'</div>'
		+				'<div class="form-group">'
		+					'<label for="txt-clave">Clave:</label>'
		+					'<input type="password" class="form-control" id="txt-clave" name="txt-clave">'
		+				'</div>'
		+				'<span id="error-login"></span>'
		+			'</form>'
		+		'</div>'
		+		'<div class="modal-footer">'
		+			'<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>'
		+			'<button type="button" id="btn-ingresar" class="btn btn-primary">Ingresar</button>'
		+		'</div>'
		+ 	'</div>'
		+ '</div>';

	$("nav").after(form);
}

<<<<<<< HEAD
// accion de form login

function ingresarUsuario(){
	console.log("hola");
	var usuario = $("#txt-usuario");
	var txtClave = $("#txt-clave");
	var contenedorError = $("#error-login");
	var loginExito = false;
	var esMedico = false;
	var userLog;

	var paciente = busquedaEnArrayObjetos(pacientes, "numeroPaciente", Number(usuario.val()));
	var medico = busquedaEnArrayObjetos(doctores, "numeroProfesional", Number(usuario.val()));
	if(paciente > -1){
		if(pacientes[paciente].clave === Number(txtClave.val())){
			loginExito = true;
			esMedico = false;
			userLog = pacientes[paciente];
		}
	}
	console.log(medico);
	if(medico > -1){
		console.log(doctores[medico].clave === Number(txtClave.val()))
		if(doctores[medico].clave === Number(txtClave.val())){
			console.log("entro")
			loginExito = true;
			esMedico = true;
			userLog = doctores[medico];
		}
	}

	/*for(var i = 0; i < doctores.length; i++){
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
			if(pacientes[i].numeroPaciente === Number(clave.val())){
				loginExito = true;
				medico = false;
				userLog = pacientes[i];
			}
		}	
	}*/
	if(!loginExito || !validarVacio(usuario.val(), txtClave.val())){
		contenedorError.html("Usuario y/o contraseña incorrectos");
	}
=======
>>>>>>> d1f12d63bd767d024a5c6636894970c63f781334


// ocultar boton de login/mostrar boton salida

function mostrarOcultarBotonLoginLogout(){
	var login = $("#login-ingresar");
	var logout = $("#logout");
	if(login.is(':hidden')){
		login.show();
		logout.hide();
	}else{
		login.hide();
		logout.show();
	}
	
}

// salir de sesión

function salirSesion(){
	// hacer un reload de la página
	//window.location.reload(false); 
	// o limpiar los datos
	usuarioIngresado = null;
	ocultarMenus();
	mostrarOcultarBotonLoginLogout();
	borradoBienvenida();
}

//test

$().ready(function(){
	ocultarMenus();
	agregarBotonLogin(),
	agregarBotonSalida();
	agregarFormLogin();
	$("#btn-ingresar").on('click', function(){
		//Validamos que exista usuario y relizamos el login
		ingresarUsuario();
		//Limpiamos los inputs
		$("#my-login")[0].reset();
		if(usuarioIngresado.especialidad !== undefined){
			inicializarInterfazMedico();
		}
	});
	$("#logout").on('click', salirSesion);
})