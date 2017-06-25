function Medico(nombre, apellido, especialidad, numeroProfesional,clave){
	this.nombre = nombre;
	this.apellido = apellido;
	this.nombreCompleto = nombre + " " + apellido;
	this.especialidad = especialidad;
	this.numeroProfesional = numeroProfesional;
	this.clave = clave;
		
}

var doctores = [
	new Medico("Gerardo", "Torres", "Cardiologo", 123,123456),
	new Medico("Gabino", "Baldomero", "Geriatra",124 ,123456),
	new Medico("Modesto", "Abel", "Neumología",   125, 123456),
	new Medico("Ignacio", "Cogoyo", "Neumología", 126,123456),
	new Medico("Silvio", "Bautista", "Pediatría", 127,123456),
	new Medico("Ramiro", "Nicola", "Pediatría", 128,123456),
	new Medico("Adalberto", "Glauco", "Psiquiatría", 129,123456),
	new Medico(	"Amado", "Cipriano", "Toxicología", 130,123456),
	new Medico("Adolfo", "Wilfredo", "Oftalmología", 131,123456),
	new Medico("Rosario", "Reyes", "Cardiologo", 132,123456),			
];


/**
 interfaz de médico
 */

function inicializarInterfazMedico(){
	dibujarSelectMedico();
}

function dibujarSelectMedico(){
	var contenedor = $(".botonera");
	var nuevoContenido = '<form><div class="contenedor-consultas-medico"><h3>Seleccionar Paciente</h3><p><select id="sel-consultas-medico" class="form-control">';
	nuevoContenido += '<option value="">Seleccionar</option>';
	for(var i = 0; i < consultas.length; i++){
		console.log()
		if(doctores[consultas[i].medico].nombre === usuarioIngresado.nombre && consultas[i].finalizada !== true){
			nuevoContenido += '<option value="'
				+ i
				+ '">'
				+ pacientes[consultas[i].paciente].nombre
				+ '</option>';
		}
	}
	nuevoContenido += '</select></p></div></form><div id="form-consulta"></div>';
	$(".page-header").after(nuevoContenido);
	contenedor.hide();
	$("#sel-consultas-medico").on('change', function(){
		var indiceConsulta = this.value;
		dibujarTablaDeConsulta(this.value);
	});
}

/**
 dibujar tabla de la consulta
 _consulta = objeto
*/

function dibujarTablaDeConsulta(_consultaIndex){
	//console.log(consultas[_consultaIndex]);
	console.log("me active");
	if(_consultaIndex === ""){return}
	var contenedor = $("#form-consulta");
	var consultaActual = consultas[_consultaIndex];
	var pacienteSeleccionado = pacientes[consultaActual.paciente];
	var divPadre = '<div>';
	var tablaConsulta = '<form class="form-horizontal">'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Nombre completo</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.foto + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Nombre completo</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.nombreCompleto + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Identificador</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.numeroPaciente + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Contacto</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.telefono + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Peso registrado</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.peso[0] + ' kg" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Altura registrada</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.altura[0] + ' cm" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Alergias</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.alergias.join(", ") + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="imc" class="col-sm-2 control-label">IMC</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="imc" class="form-control" type="text" value="' + pacienteSeleccionado.imc() + '" disabled>'
		+		'</div>'
		+	'</div>'
		+	'<fieldset>'
		+		'<legend>Nuevo peso y altura</legend>'
		+ 		'<div class="form-group">'
		+ 			'<label for="nuevo-peso" class="col-sm-2 control-label">Nuevo peso</label>'
		+			'<div class="col-sm-8">'
		+ 				'<input id="nuevo-peso" class="form-control" type="text" placeholder="peso">'
		+			'</div>'
		+		'</div>'
		+ 		'<div class="form-group">'
		+ 			'<label for="nuevo-altura" class="col-sm-2 control-label">Nueva altura</label>'
		+			'<div class="col-sm-8">'
		+ 				'<input id="nuevo-altura" class="form-control" type="text" placeholder="altura">'
		+			'</div>'
		+		'</div>'
		+ 		'<div class="form-group text-center">'
		+			'<input id="modificar-peso-altura" class="btn btn-success" type="button" value="Actualizar" data-paciente="' + consultaActual.paciente + '">'
		+		'</div>'
		+	'</fieldset>'
		+	'<fieldset>'
		+		'<legend>Descripción</legend>'
		+		'<div class="form-group text-center">'
		+			'<textarea id="desc" class="form-control" rows="3"></textarea>'
		+			'<input id="finalizar-consulta" class="btn btn-success" type="button" value="FINALIZAR CONSULTA" style="width:80%">'
		+		'</div>'
		+	'</fieldset>'
		+ '</form>';
	contenedor.html(divPadre + tablaConsulta + '</div>');

	$("#modificar-peso-altura").on('click', function(){
		var indicePaciente = $(this).attr('data-paciente');
		modificarPesoAltura($("#nuevo-peso"), $("#nuevo-altura"), indicePaciente);
	});
	$("#finalizar-consulta").on('click', function(){
		consultas[_consultaIndex].modificarEstado();
		consultas[_consultaIndex].modificarDescripcion($("textarea#desc").val());
		$("#form-consulta").html("");
		$(".contenedor-consultas-medico").html("");
		dibujarSelectMedico();
		console.log(consultas[_consultaIndex])
	})
}



/**
 busca consultas
 arrConsultas = array
 indexMedico = int
 return array
*/
function buscarConsultas(arrConsultas, indexMedico){
	var arrayResultado = [];
	for(var i = 0; i < arrConsultas.length; i++){
		if(arrConsultas[i].medico === indexMedico){
			arrayResultado.push(arrConsultas[i]);
		}
	}
	return arrayResultado;
}

/**
 modificarPesoAltura
 peso = int
 altura = float
 pacienteIndex = int

 return undefined
*/
function modificarPesoAltura(peso, altura, pacienteIndex){
	pacientes[pacienteIndex].peso.push(peso);
	pacientes[pacienteIndex].altura.push(altura);
}

/**
 pacienteIndex = int
 
 returns bool
*/
function variacionMayorADiezIMC(pacienteIndex){
	var pesoAnterior = paciente[pacienteIndex].peso[peso.length - 2];
	var alturaAnterior = paciente[pacienteIndex].altura[altura.length - 2];
	var pesoNuevo = paciente[pacienteIndex].peso[peso.length - 1];
	var alturaNuevo = paciente[pacienteIndex].altura[altura.length - 2];
	var imcViejo = calcularIMC(pesoAnterior, alturaAnterior) / 100;
	var imcNuevo = calcularIMC(pesoNuevo, alturaNuevo) / 100;

	if(imcNuevo - imcViejo > 0.10 || imcNuevo - imcViejo < -0.10){
		return true;
	}
	return false;
}

/**
 pacienteIndex int

 return undefined
*/
function consultaPaga(indexConsulta){
	consultas[indexConsulta].consultaPaga = true;
}

/**
 indexConsulta int

 return undefined
*/
function finalizarConsulta(indexConsulta, descripcion){
	consultas[indexConsulta].descripcion = descripcion;
	consultas[indexConsulta].finalizada = true;
	console.log(consultas[indexConsulta]);
	/*consultas
		.push(consultasPendientes
			.splice(indexConsulta, 1));
	*/
}


/**
 habilita o deshabilita paciente
 cedula int

 return undefined
*/
function inhabilitarPaciente(cedula){
	var indexPaciente = busquedaEnArray(paciente, "cedula", cedula);
	paciente[indexPaciente].habilitado = true ? false : true;
}

