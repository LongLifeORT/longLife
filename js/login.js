/**
Login
*/


//oculto menús que no interesan

function inicializarMenuLogin(){
	$(".menuInfo").hide();
	$(".menuCliente").hide();
	$(".menuDoctor").hide();
}


//agrego menu de login

function agregarBotonLogin(){
	var container = $('.sidebar');
	container.prepend('<ul class="nav nav-sidebar menuLogin">'
		+ '<li class="active text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".login-form" id="loginIngresar">Ingresar</a></li></ul>');
}

// agrego botón de logout

function agregarBotonSalida(){
	var contenedor = $('#navbar ul');
	contenedor.append('<li><a href="#">Salir</a></li>');
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
		+			'<form>'
		+				'<div class="form-group">'
		+					'<label for="txt-usuario">Usuario:</label>'
		+					'<input type="text" class="form-control" id="txt-usuario" name="txt-usuario">'
		+				'</div>'
		+				'<div class="form-group">'
		+					'<label for="txt-clave">Clave:</label>'
		+					'<input type="text" class="form-control" id="txt-clave" name="txt-clave">'
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

// accion de form login

function ingresarUsuario(){
	console.log("hola");
	var usuario = $("#txt-usuario");
	var clave = $("#txt-clave");
	var contenedorError = $("#error-login");
	var loginExito = false;
	var medico = false;

	//var validado = validarVacio($("#error-login"),$("#btn-ingresar"),usuario,clave);

	//medico.doctores[]
	//paciente.pacientes[]
	for(var i = 0; i < doctores.length; i++){
		if(doctores[i].numeroProfesional === Number(usuario.val())){
			if(doctores[i].clave === Number(clave.val())){
				//objeto global de usuario logueado
				usuarioLogueado = doctores[i];
				loginExito = true;
				medico = true;
			}
		}
	}
	for(var i = 0; i < pacientes.length; i++){
		if(pacientes[i].numeroPaciente === Number(usuario.val())){
			if(pacientes[i].numeroPaciente === Number(clave.val())){
				//objeto global de usuario logueado
				usuarioLogueado = pacientes[i];
				loginExito = true;
				medico = false;
			}
		}	
	}
	if(!loginExito || !validarVacio(usuario.val(), clave.val())){
		//contenedorError.show();
		contenedorError.html("Usuario y/o contraseña incorrectos");
	}


	if(loginExito && medico){
		$(".menuDoctor").show();
		console.log("Exito medico");
		$("#login-form").modal('hide');
		//this.attr("data-dismiss", "modal");
	}else if(loginExito && !medico){
		$(".menuCliente").show();
		console.log("Exito paciente");
		$("#login-form").modal('hide');
	}
}

//test

$().ready(function(){
	inicializarMenuLogin();
	agregarBotonLogin(),
	agregarBotonSalida();
	agregarFormLogin();
	$("#btn-ingresar").on('click', ingresarUsuario)

})