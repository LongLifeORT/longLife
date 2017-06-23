function Medico(nombre, apellido, especialidad, numeroProfesional,clave){
	this.nombre = nombre;
	this.apellido = apellido;
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
	dibujarTableroMedico();
	$("#sel-consultas-medico").on('change', function(){
		dibujarTablaDeConsulta(this.value);
	})
}

function dibujarSelectMedico(){
	var contenedor = $(".botonera");
	var nuevoContenido = '<select id="sel-consultas-medico">'
	for(var i = 0; i < consultas.length; i++){
		if(consultas[i].medico === usuarioIngresado.nombre){
			nuevoContenido += '<option value="'
				+ i
				+ '">'
				+ consultas[i].paciente
				+ '</option>';
		}
	}
	nuevoContenido += '</select>';
	contenedor.html(nuevoContenido);
}

/**
 dibujar tabla de la consulta
 _consulta = objeto
*/

function dibujarTablaDeConsulta(_consultaIndex){
	var contenedor = $(".botonera");
	var consulta = consultas[_consultaIndex];
	var divPadre = '<div class="container text-center">';
	var tabla = '<table id="tabla-consulta-medico">'
		+ '<thead>'
		+	'<tr>'
		+		'<th>Nombre</th>'
		+		'<th>Apellido</th>'
		+		'<th>Peso</th>'
		+		'<th>Altura</th>'
		+	'</tr>'
		+ '</thead>'
		+ '<tbody>'
		+	'<tr>'
		+		'<td>' + pacientes[consulta.paciente].nombre + '</td>'
		+		'<td>' + pacientes[consulta.paciente].apellido + '</td>'
		+		'<td>' + pacientes[consulta.paciente].peso + '</td>'
		+		'<td>' + pacientes[consulta.paciente].altura + '</td>'
		+	'</tr>'
		+ '</tbody>'
		+	'<tr>'
		+		'<td colspan="1">'
		+			'<input type="button" id="btn-agregar-peso" value="Agregar nuevo peso">'
		+		'</td>'
		+		'<td colspan="1">'
		+			'<input type="button" id="btn-agregar-altura" value="Agregar nueva altura">'
		+		'</td>'
		+		'<td colspan="2">'
		+			'<input type="button" id="btn-finalizar-consulta" value="Finzalizar consulta">'
		+		'</td>'
		+	'</tr>'
		+'</table>';
		contenedor.html(divPadre + tabla + '</div>');
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

