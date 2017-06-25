

function inicializarInterfazPaciente(){

	//creamos una tabla con todas las consultas
	//crearTablaTodasConsultas();
	//mostrarTablaTodasConsultas();
	
	//listamos todas las especialidades disponibles
	arrListado = listadoEspecialidades(doctores);


	//creamos formulario de crear consulta
	formCrearConsulta();
	//creamos formulario de buscar consulta
	formBuscarConsulta();
	//creamos formulario de modificar perfil
	formModificarPerfil();


//eventos de los formularios
	var especialidadCrear = $("#crear1A");
	especialidadCrear.on("blur", buscarMedicos);
	var btnCrearConsulta = $("#btnCrear");
	btnCrearConsulta.on("click", crearNuevaConsulta);




	



}

 




function Paciente(nombre, apellido,numeroPaciente,clave, peso, altura,cedula, alergias , foto){
	this.nombre = nombre;
	this.apellido = apellido;
	this.nombreCompleto = nombre + " " + apellido;
	this.numeroPaciente	= numeroPaciente;
	this.clave = clave;

	this.cedula = cedula;
	this.foto = foto || "default.png";

	this.peso = [peso],
	this.altura = [altura],
	this.alergias = ["ninguna"],
	this.telefono = 911,
	this.habilitado = true,
	this.modificarNombre = function(nuevoNombre){
		this.nombre = nuevoNombre;
	};
	this.modificarApellido = function(nuevoApellido){
		this.apellido= nuevoApellido;
	};
	this.modificarCedula = function(nuevaCedula){
		this.cedula= nuevaCedula;
	};
	this.modificarContraseña = function(nuevaContraseña){
		this.contraseña= nuevaContraseña;
	};
	this.modificarFoto = function(nuevaFoto){
		this.foto = nuevaFoto();
	};
	this.modificarAlergias = function(nuevaAlergia){
		this.alergias = nuevaAlergia;
	};
	this.modificarTelefono = function(nuevoTelefono){
		this.telefono = nuevoTelefono;
	};
	this.imc = function(){
		//console.log(this.altura[0].split(""))
		return (this.peso[this.peso.length - 1] / (this.altura[this.altura.length - 1]/100) ** 2).toFixed(2);
	};
};

	var pacientes = [
		new Paciente("Luis", "Damiano", 11 ,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Horacio", "Mercer",  12,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Jorge", "Maximino",13,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Hernando", "Salvador",14,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Esteban", "Eustaquio",15,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Rosa", "Ximenes",16,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Carlos", "Vasco",17,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Marcelino", "Sosa",18,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Diego", "Santos",19,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Leonardo", "Amor",20,123456, randomMedia(80), randomMedia(160), randomCedula()),
		new Paciente("Alvaro", "Mesa",21,123456, randomMedia(80), randomMedia(160), randomCedula()),

	];



function Consulta(pacienteIndex, medicoIndex,descripcion){
	var numeroIncremental = Counter.conteo();
	
	var letraNombreIdentificador =  doctores[medicoIndex].nombre.slice(0,1);
	var letrasApellidoIdentificador = doctores[medicoIndex].apellido.slice(0,3);
	
	this.identificador = letraNombreIdentificador 
		+ letrasApellidoIdentificador 
		+ numeroIncremental;

	this.consultaPaga = false;
	this.descripcion =  descripcion  || "";
	this.finalizada = false;
	this.paciente = pacienteIndex;
	this.medico = medicoIndex;
	this.especialidad = doctores[medicoIndex].especialidad;

	this.modificarDescripcion = function(nuevaDescripcion){
		this.descripcion = nuevaDescripcion;

	};
	this.modificarEstado = function(){
		this.finalizada = true;
	};		
	this.modificarPago = function(nuevoPago){
		this.consultaPaga = nuevoPago;
	};


};

var consultas = [
// indice de paciente, indice de medico, estado de la consulta, estado del pago
	new Consulta(0,0,"Me duele el pecho y me cuesta respirar."),
	new Consulta(3,0),
	new Consulta(1,1),
	new Consulta(2,2,"Tengo mucha tos."),
	new Consulta(3,4),
	new Consulta(4,8),
	new Consulta(5,5),
	new Consulta(6,7,"Tome un frasco de pastillas y no puedo parar de ir al baño."),
	new Consulta(7,7,"Fuerte dolor de estomago y vomitos."),
	new Consulta(8,5),
	new Consulta(9,6,"Escucho voces."),
	new Consulta(1,2),
	new Consulta(2,4),
	new Consulta(0,7),
	new Consulta(4,3),
	new Consulta(3,6,"Veo gente muerta."),
	new Consulta(1,2),
	new Consulta(2,4),
	new Consulta(10,9),
	new Consulta(6,3),
	new Consulta(5,2),
	new Consulta(4,1),
	new Consulta(4,9),
	new Consulta(8,7),
	new Consulta(1,6),
	new Consulta(10,8),
	new Consulta(3,5),
	new Consulta(7,4),
	new Consulta(0,4),
	new Consulta(10,3),
	new Consulta(0,8),
	new Consulta(3,1),
	new Consulta(4,2),
	new Consulta(0,3),
	new Consulta(6,4),
	new Consulta(5,5),
	new Consulta(9,6),
	new Consulta(10,7),
	new Consulta(1,8)


];
console.log(consultas);


function crearNuevaConsulta(){
	var valorEspecialidad = $("#crear1A").val();
	var valorMedico = $("#crear1B").val();
	var valorDescripcion = $("#crear1C").val();
	var resultado =	$("#resultadoCrear");
		
		if(valorEspecialidad !== "empty" && valorMedico !== "empty"  ){

				var paciente = usuarioIngresado ;
				console.log(paciente);
				//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
				var pacienteIndex = busquedaEnArrayObjetos(pacientes,"nombreCompleto",paciente.nombreCompleto);
				console.log(pacienteIndex);

				//buscamos que medico es dentro del array de doctores  mediate la propiedad nombre completo.
				var medicoIndex = busquedaEnArrayObjetos(doctores,"nombreCompleto",valorMedico);
				console.log(medicoIndex);
			
				//creamos una nueva consulta con el valor del paciente, el medico y una descripcion si la tiene.
				consultas.push(new Consulta(pacienteIndex,medicoIndex,valorDescripcion));
				//muestra se actualizo las consultas
				mostrarTablaUsuarioConsultas();

				//luego de crear la consulta, vaciamos los inputs
				$('#crear1A, #crear1B, #crear1C ').val([])
				//Le damos un mensaje al usuario de que su consulta fue creada
				$(' #resultadoCrearConsulta ').html("Consulta creada "+ valorMedico + " lo atendera en unos momentos, gracias por su elecion");

		}else{resultadoCrearConsulta
			//si no se eligio especialidad ni medico, se pide al usuario complete el formulario
			$(' #resultadoCrearConsulta ').html("Complete el formulario primero");
		}


}


// tabla que contiene las consultas a mostrar
/*
arrConsultas puede ser todas las consultas
o solo las del usuario segun mostrarTablaUsuarioConsultas
 */
function crearTablaTodasConsultas(arrConsultas){
	var listadoConsultas = arrConsultas || consultas ;
	 var table = "<div class= \"table-responsive\">"
	 table +=  "<table class=\"table table-striped table-hover\">"
	 table +=     "<thead>";
	 table += " <tr> <th>ID</th> <th>Usuario</th>   <th>Medico</th> <th>Especialidad</th></tr> ";
     table +=    "</thead>"     
     table += " <tbody>";                             
              for(var i = 0 ; i< listadoConsultas.length; i++){
              	table +=  "<tr id =" +  listadoConsultas[i].identificador + ">";
              	table += "<td>" + listadoConsultas[i].identificador + "</td>"
              	+ "<td>" + pacientes[listadoConsultas[i].paciente].nombreCompleto  + "</td>" 
              	+ "<td>" + doctores[listadoConsultas[i].medico].nombreCompleto  + "</td>"
              	+ "<td>" + listadoConsultas[i].especialidad   + "</td>";
              	table += "</tr>";	
              }  
    table +=  "</tbody></table></div>"       
    return table;       

}


//function mostrar tabla con todas las consultas
function mostrarTablaTodasConsultas(){
var consultasGeneradas = $("#consultasGeneradas");
// la tabla se crea en Paciente.js
var tabla = crearTablaTodasConsultas(consultas);
	//consultasGeneradas.html(tabla)
}

//function mostrar tabla con las consultas del usuario
function mostrarTablaUsuarioConsultas(){
var consultasGeneradas = $("#resultadoBuscarConsulta");


var consultasUsuario = [];
var paciente = usuarioIngresado ;
	console.log(paciente);
	//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
	var pacienteIndex = busquedaEnArrayObjetos(pacientes,"nombreCompleto",paciente.nombreCompleto);

	//recorrer el array de consultas,
	for(var i = 0 ; i < consultas.length; i++){
		if(consultas[i]["paciente"] == pacienteIndex){
			consultasUsuario.push(consultas[i]);
		}
	}
var tabla = crearTablaTodasConsultas(consultasUsuario);
consultasGeneradas.html(tabla)
}










//function para listar las especialidades disponibles, retorna un array de especialidades
function listadoEspecialidades(arrDoctores){

	var listado = [];
	var noEsta = true;
	console.log(listado);
	//si el listado esta vacio, ingresar la primera especialidad
	if(listado.length == 0){
				listado.push(arrDoctores[0].especialidad);
			};
	//recorremos el array doctores
		for(var i = 0; i < arrDoctores.length; i++){
			// recorremos el array listado
			for(var j = 0; j < listado.length; j++){
				//si la especialidad esta disponible
				if(arrDoctores[i].especialidad === listado[j]){
				//si se encuentra la especialidad !noEsta	
					noEsta = false;
				}else{
					noEsta = true;
				};
			}
			//si noEsta la especialidad en el listado, la agregamos
			if(noEsta){
				listado.push(arrDoctores[i].especialidad);
			};
		}
	return listado;

}

function buscarMedicos(){
	var especialidadSelected = $("#crear1A").val();
		if(especialidadSelected !== "empty"){
			
			//luego de que el paciente elige una especialidad
			var especialidadSelected = $("#crear1A").val();
			//vamos a mostrar los medicos disponibles
			var MedicosDisponibles = $("#crear1B");
		
			// para eso creamos un array con los medicos de esa especialidad
			var listadoMedicos = [];
			//que los presentaremos en opciones del input select.
			var opciones = '<option selected="selected" value="empty">Sel. Medico</option>';


				//recorremos los medicos por nombre completo
				for(var i = 0; i < doctores.length; i++){
					//si el medico tiene la especialidad seleccionada, se lo ingresa en la lista de medicos disponibles.
					if(doctores[i]["especialidad"] == especialidadSelected){
						listadoMedicos.push(doctores[i]["nombreCompleto"]);
					}
				}
				// se presentan las opciones con los medicos disponibles
				for(var j = 0; j < listadoMedicos.length; j++){
					opciones += '<option value=' + '\"' + listadoMedicos[j] + '\"' + '>' + listadoMedicos[j] + '</option>';

				}


			MedicosDisponibles.html(opciones);
		}
};


//function para formulario para crear consulta, como parametro toma el listado de array de especialidades
function formCrearConsulta(){
	var listado = arrListado;
	//listamos las especialidades disponibles
	


	//formulario para crear consulta
	var form 	=  '<form>'
				+	'<hr>'
			 	+   '<label  for="crear1A" >Especialidad</label>';
		form 	+= '<select class="form-control" name="selEspecialidad" id="crear1A">'
				+ '<option selected="selected" value="empty">Sel. Especialidad</option>';
		//ofrecemos un listado de especialidades disponibles
				for(var i = 0 ; i < listado.length ; i++ ){
		form		+= 	'<option value=' + '\"' + listado[i] + '\"' + '>' + listado[i] + '</option>';	
				};	

		form	+=	'</select>'
				+	'<br >';

		form 	+='<label  for="crear1B" >Medico</label>'
				+ '<select class="form-control" name="selEspecialidad" id="crear1B">'
				+ '<option selected="selected" value="empty">Sel. Medico</option>';
//una vez que el paciente elige especialidad, la funcion buscarMedicos busca los medicos de esa especialidad y las presenta en el dropdown.


		form	+=	'</select>'
				+	'<br >';

		
		form	+=	'<label  for="crear1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="crear1C"></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control btn-primary" value="Ingresar" id="btnCrear">'
            	+	'</form>';
        form 	+=  '<div class="text-center" id="resultadosCrearConsulta">'	
		        +    '<p class="panel panel-default resultado"  id="resultadoCrearConsulta"></p>'
	            +	'</div>';   	

    var crearConsulta = $("#crearConsulta");
    crearConsulta.html(form);

};

function formBuscarConsulta(){
	var listado = arrListado;
	//listamos las especialidades disponibles

	

	//formulario para crear consulta
	var form 	=  '<form>'
				+	'<hr>'
			 	+   '<label  for="crear1A" >Especialidad</label>';

		form 	+= '<select class="form-control" name="selConvertir" id="buscar1A">'
				+ '<option selected="selected" value="empty">Sel. Especialidad</option>';
		//ofrecemos un listado de especialidades disponibles
				for(var i = 0 ; i < listado.length ; i++ ){
		form		+= 	'<option value=' + '\"' + listado[i] + '\"' + '>' + listado[i] + '</option>';	
					
					
				};	




		form	+=	'</select>'
				+	'<br >';

		form	+=	'<label  for="crear1B" >Medico</label>'
				+	'<input type="text"  class="form-control" id="buscar1B">'
				+	'<br >'
				+	'<label  for="in1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="buscar1C"></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control btn-primary" value="Buscar" id="btnBuscarConsulta">'
            	+	'</form>';
        form 	+=  '<div class="text-center" id="resultadosBuscarConsulta">'	
		        +    '<p class="panel panel-default resultado"  id="resultadoBuscarConsulta"></p>'
	            +	'</div>';


    var buscarConsulta = $("#buscarConsulta");
    buscarConsulta.html(form);

    mostrarTablaUsuarioConsultas();
	//mostramos las consultas generadas por el usuario;

};

function formModificarPerfil(){

	var paciente = usuarioIngresado ;
				console.log(paciente);
				//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
	var pacienteIndex = busquedaEnArrayObjetos(pacientes,"nombreCompleto",paciente.nombreCompleto);

	var pacienteSeleccionado = pacientes[pacienteIndex];			
	var divPadre = '<div>';
	var tablaConsulta = '<form class="form-horizontal">'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Foto</label>'
		+		'<div class="col-sm-8">'
		+ 			'<img src="./images/' + pacienteSeleccionado.foto + ' width="100" height="100" class="img-responsive" alt="Foto de perfil"> '
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Nombre </label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.nombre + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Apellido</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.apellido + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Numero de Paciente</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.numeroPaciente + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Clave</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.clave + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Cedula</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.cedula + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Telefono</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.telefono + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="nuevo-peso" class="col-sm-2 control-label">Alergias</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="nuevo-peso" class="form-control" type="text" value="' + pacienteSeleccionado.alergias.join(", ") + '" disabled>'
		+		'</div>'
		+	'</div>'
		+	'<fieldset>'
		+		'<legend>Modificar Perfil</legend>'
		+ 		'<div class="form-group">'
		+ 			'<label for="nuevo-peso" class="col-sm-2 control-label">Nueva Clave</label>'
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
		+	'</fieldset>'
		+	'<fieldset>'
		+		'<legend>Descripción</legend>'
		+		'<div class="form-group text-center">'
		+			'<input id="guardar-perfil" class="btn btn-success" type="button" value="Guardar Cambios" style="width:80%">'
		+		'</div>'
		+	'</fieldset>'
		+ '</form>';
	



    var formPerfil = $("#formPerfil");
    formPerfil.html(divPadre + tablaConsulta + '</div>');	

};




function cambiarFoto(foto){

	//this usuario cambiar foto




}

/* 
this.nombre = nombre;
	this.apellido = apellido;
	this.nombreCompleto = nombre + " " + apellido;
	this.numeroPaciente	= numeroPaciente;
	this.clave = clave;
	this.cedula = "";
	this.foto = foto || "default.jpg";
	this.peso = [peso],
	this.altura = [altura],
	this.alergias = ["ninguna"],
	this.telefono = 911,
	this.habilitado = true,
	this.modificarNombre = function(nuevoNombre){
		this.nombre = nuevoNombre;
	};
	this.modificarApellido = function(nuevoApellido){
		this.apellido= nuevoApellido;
	};
	this.modificarCedula = function(nuevaCedula){
		this.cedula= nuevaCedula;
	};
	this.modificarContraseña = function(nuevaContraseña){
		this.contraseña= nuevaContraseña;
	};
	this.modificarFoto = function(nuevaFoto){
		this.foto = nuevaFoto();
	};
	this.modificarAlergias = function(nuevaAlergia){
		this.alergias = nuevaAlergia;
	};
	this.modificarTelefono = function(nuevoTelefono){
		this.telefono = nuevoTelefono;
	};
	this.imc = function(){
		//console.log(this.altura[0].split(""))
		return (this.peso[this.peso.length - 1] / (this.altura[this.altura.length - 1]/100) ** 2).toFixed(2);
	};
};
*/