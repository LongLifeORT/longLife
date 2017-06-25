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
	$("#sel-consultas-medico").on('change', function(){
		dibujarTablaDeConsulta(this.value);
	})
}

function dibujarSelectMedico(){
	var contenedor = $(".botonera");
	var nuevoContenido = '<div class="contenedor-consultas-medico"><h3>Seleccionar Paciente</h3><select id="sel-consultas-medico">';
	nuevoContenido += '<option value="">Seleccionar</option>';
	for(var i = 0; i < consultas.length; i++){
		console.log()
		if(doctores[consultas[i].medico].nombre === usuarioIngresado.nombre){
			nuevoContenido += '<option value="'
				+ i
				+ '">'
				+ pacientes[consultas[i].paciente].nombre
				+ '</option>';
		}
	}
	nuevoContenido += '</select></div>';
	$(".page-header").after(nuevoContenido);
	contenedor.hide();
}

/**
 dibujar tabla de la consulta
 _consulta = objeto
*/

function dibujarTablaDeConsulta(_consultaIndex){
	if(_consultaIndex === ""){return}
	var contenedor = $(".contenedor-consultas-medico");
	var consultaActual = consultas[_consultaIndex];
	var pacienteSeleccionado = pacientes[consultaActual.paciente];
	var divPadre = '<form>';
	var tablaConsulta = '<img src="' + pacienteSeleccionado.foto + '" alt="Foto de paciente">'
		+ '<h4>Nombre completo:</h4>' + pacienteSeleccionado.nombreCompleto
		+ '<h4>Identificador:</h4>' + pacienteSeleccionado.numeroPaciente
		+ '<h4>Telefono de contacto:</h4>' + pacienteSeleccionado.telefono
		+ '<h4>Peso:</h4>' + pacienteSeleccionado.peso[0]
		+ '<h4>Altura:</h4>' + pacienteSeleccionado.altura[0]
		+ '<h4>Alergias</h4>' + pacienteSeleccionado.alergias.join(", ")
		+ '';
	contenedor.append(divPadre + tablaConsulta + '</div>');
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
	paciente[pacienteIndex].peso.push(peso);
	paciente[pacienteIndex].altura.push(altura);
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
	consultasPendientes[indexConsulta].descripcion = descripcion;
	consultasPendientes[indexConsulta].finalizada = true;
	consultasFinalizadas
		.push(consultasPendientes
			.splice(indexConsulta, 1));
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

