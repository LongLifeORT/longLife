

/**
 salirPaciente esconde o destruye todo el contenido del paciente logeado
*/

function salirPaciente(){

}

/**
 * Representa un paciente.
 * @constructor
 * @param {string} nombre - Nombre del paciente
 * @param {string} apellido - Apellido del paciente.
 * @param {int} numeroPaciente - Número creciente
 * @param {int} clave - Clave de ingreso.
 * @param {int} peso - Peso
 * @param {float} altura - altura.
 * @param {int} cedula - Nombre del paciente
 * @param {string} alergias - Alergias del paciente.
 * @param {string} foto - Foto de perfil del paciente.
 */

function Paciente(nombre, apellido,numeroPaciente,clave, peso, altura,cedula, alergias , foto){
	this.nombre = nombre;
	this.apellido = apellido;
	this.nombreCompleto = nombre + " " + apellido;
	this.numeroPaciente	= numeroPaciente;
	this.clave = clave;

	this.cedula = cedula;
	this.foto = foto  || selectorRandomFotoPerfil();

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


/**
 * Representa una consulta registrada.
 * @constructor
 * @param {int} pacienteIndex - Indice del paciente que pidio la consulta
 * @param {int} medicoIndex - Indice del médico con el cual se dara la consulta.
 * @param {string} descripcion - Descripción del pedido de consulta
 */

function Consulta(pacienteIndex, medicoIndex,descripcion){
	var numeroIncremental = Counter.conteo();
	
	var letraNombreIdentificador =  doctores[medicoIndex].nombre.slice(0,1);
	var letrasApellidoIdentificador = doctores[medicoIndex].apellido.slice(0,3);
	
	this.identificador = letraNombreIdentificador 
		+ letrasApellidoIdentificador 
		+ numeroIncremental;

	this.consultaPaga = false;
	this.descripcion =  descripcion  || randomDescription();
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
// indice de paciente, indice de medico, descripcion
	new Consulta(0,0,"Me duele el pecho y me cuesta respirar."),
	new Consulta(3,0, "Algo me pasa."),
	new Consulta(1,1, "Necesito pastillas para dormir."),
	new Consulta(2,2,"Tengo mucha tos."),
	new Consulta(3,4, "Mi niño tiene problemas para comer."),
	new Consulta(4,8, "Me cuesta leer."),
	new Consulta(5,5, "Mi hijo mucha tos."),
	new Consulta(6,7,"Tome un frasco de pastillas y no puedo parar de ir al baño."),
	new Consulta(7,7,"Fuerte dolor de estomago y vomitos."),
	new Consulta(8,5, "Mi hijo esta con vomitos."),
	new Consulta(9,6,"Escucho voces."),
	new Consulta(1,2, "Aveces tengo mucha tos."),
	new Consulta(2,4, " Mi hijo tiene problemas para ir al baño."),
	new Consulta(0,7 , "Tome unas pastillas y no puedo parar de ir al baño."),
	new Consulta(4,3, "Me cuesta respirar aveces."),
	new Consulta(3,6,"Veo gente muerta."),
	new Consulta(1,2, "Tengo mucha tos de mañana"),
	new Consulta(2,4, " Mi hijo no para de ir al baño ahora."),
	new Consulta(10,9, "Me duele el corazon luego de comer mucho asado."),
	new Consulta(6,3, " Me cuesta respirar cuando fuman cerca."),
	new Consulta(5,2, "Me duele el pecho."),
	new Consulta(4,1, "Me duele la espalda."),
	new Consulta(4,9,	"Me duele el corazon!."),
	new Consulta(8,7,	"Me cuesta leer  en la noche."),
	new Consulta(1,6,"Me cuesta respirar."),
	new Consulta(10,8, " Me duele la vista de tanto escribir."),
	new Consulta(3,5, "Mi hijo tiene mucha fiebre."),
	new Consulta(7,4, "Mi hijo no quiere comer."),
	new Consulta(0,4, "Mi hijo tiene problemas de atención."),
	new Consulta(10,3, "Aveces me cuesta respirar."),
	new Consulta(0,8 , "Creo que necesito lentes."),
	new Consulta(3,1, "Me puede dar pastillas para dormir?."),
	new Consulta(4,2, "Que tos que tengo."),
	new Consulta(0,3, "No puedo respirar bien."),
	new Consulta(6,4, "Mi hija no quiere volver a la escuela."),
	new Consulta(5,5, " Mi hija tiene problemas para dormir."),
	new Consulta(9,6, "Me persiguen la CIA y el FBI."),
	new Consulta(10,7, "Me tome la pastilla azul equivocada."),
	new Consulta(1,8, " No veo nada con estos lentes.")
];


//genera consultas aleatorias automaticamente en el inicio del programa.
function generarConsultas(_n){
	for(var i = 0; i < _n; i++){
		consultas.push(new Consulta(random(10, true), random(9, true)))
	}
}

// funcion que crea una nueva consulta manual por el paciente.

function crearNuevaConsulta(){
	//toma los valores de los inputs del formulario crear consulta
	var valorEspecialidad = $("#crear1A").val();
	var valorMedico = $("#crear1B").val();
	var valorDescripcion = $("#crear1C").val();
	//almacena el campo hmtl donde se presentara el resultado de la creacion de consult
	var resultado =	$("#resultadoCrear");
		
	//Si el campo especialidad y medico no estan vacios
	if(valorEspecialidad !== "empty" && valorMedico !== "empty"  ){
	//comienza a procesar los valores de los inputs.

	//El paciente ingresado es un objeto
		var paciente = usuarioIngresado ;
		console.log(paciente);
		//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
		var pacienteIndex = buscarPacienteEnArray();
		console.log(pacienteIndex);

		//buscamos que medico es dentro del array de doctores  mediate la propiedad nombre completo.
		var medicoIndex = busquedaEnArrayObjetos(doctores,"nombreCompleto",valorMedico);
		console.log(medicoIndex);
	
		//creamos una nueva consulta con el valor del index de  pacientes, el  index medico de doctores  y una descripcion si la tiene.
		consultas.push(new Consulta(pacienteIndex,medicoIndex,valorDescripcion));
		//muestra se actualizo las consultas
		mostrarTablaUsuarioConsultas();

		//luego de crear la consulta, vaciamos los inputs
		$('#crear1A, #crear1B, #crear1C ').val([])
		//Le damos un mensaje al usuario de que su consulta fue creada con exito.
		$(' #resultadoCrearConsulta ').html("Consulta creada "+ valorMedico + " lo atendera en unos momentos, gracias por su elecion");

	}else{resultadoCrearConsulta
		//si no se eligio especialidad ni medico, se pide al usuario complete el formulario
		$(' #resultadoCrearConsulta ').html("Complete el formulario primero");
	}
}



// tabla que contiene las consultas a mostrar
/*
	arrConsultas puede ser todas las consultas por si es necesario mostrar todas las consultas generadas.
	o solo las del usuario segun mostrarTablaUsuarioConsultas.
 */
function crearTablaTodasConsultas(arrConsultas){
	// el listado de consultas puede ser el parametro que busquemos o todas las consultas existentes.

	var listadoConsultas = arrConsultas || consultas ;
	var table = "<div class= \"table-responsive\">"
	table += "<table class=\"table table-striped table-hover\">"
	table += "<thead>";
	table += "<tr><th>ID</th><th>Usuario</th><th>Medico</th><th>Especialidad</th></tr> ";
	table += "</thead>"     
	table += "<tbody>";                             
	for(var i = 0 ; i< listadoConsultas.length; i++){
		table +=  "<tr id=" + listadoConsultas[i].identificador + ">";
		table += "<td>" + listadoConsultas[i].identificador + "</td>"
		+ "<td>" + pacientes[listadoConsultas[i].paciente].nombreCompleto + "</td>" 
		+ "<td>" + doctores[listadoConsultas[i].medico].nombreCompleto + "</td>"
		+ "<td>" + listadoConsultas[i].especialidad + "</td>";
		table += "</tr>";	
	}  
	table += "</tbody></table></div>"       
	//esta funcion retorna una tabla con los datos.
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
	var pacienteIndex = buscarPacienteEnArray();

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
	var listado = listadoEspecialidades(doctores);
	//listamos las especialidades disponibles

	//formulario para crear consulta
	var form = '<form>'
			+ '<hr>'
		 	+ '<label  for="crear1A" >Especialidad</label>';
	form += '<select class="form-control" name="selEspecialidad" id="crear1A">'
		+ '<option selected="selected" value="empty">Sel. Especialidad</option>';
	//ofrecemos un listado de especialidades disponibles
	for(var i = 0 ; i < listado.length ; i++ ){
		form += '<option value=' + '\"' + listado[i] + '\"' + '>' + listado[i] + '</option>';	
	};	

	form +=	'</select>'
		+	'<br >';

	form 	+='<label  for="crear1B" >Medico</label>'
		+ '<select class="form-control" name="selEspecialidad" id="crear1B">'
		+ '<option selected="selected" value="empty">Sel. Medico</option>';
//una vez que el paciente elige especialidad, la funcion buscarMedicos busca los medicos de esa especialidad y las presenta en el dropdown.


	form	+=	'</select>'
		+	'<br >';

	
	form +=	'<label  for="crear1C" >Descripcion</label>'
		+	'<textarea  class="form-control" id="crear1C"></textarea>'
		+	'<br >'
    	+   '<input type="button"  class="form-control btn-primary" value="Ingresar" id="btnCrear">'
    	+	'</form>';
    form +=  '<div class="text-center" id="resultadosCrearConsulta">'	
        +    '<p class="panel panel-default resultado"  id="resultadoCrearConsulta"></p>'
        +	'</div>';   	

    var crearConsulta = $("#crearConsulta");
    crearConsulta.html(form);


    //eventos de los formularios crear Consulta
	var especialidadCrear = $("#crear1A");
	//una vez elegida la especialidad da los medicos de esa especialidad
	especialidadCrear.on("change", buscarMedicos);

	var btnCrearConsulta = $("#btnCrear");
	btnCrearConsulta.on("click", crearNuevaConsulta);




};




//funcionalidades de buscar consulta

//Lista todas las IDs de las consultas del usuario
function listadoIdsConsultas(arrConsultas){


	//presentara todas las id de las consultas del usuario para generar el drop down
	var listado = [];
	var paciente = usuarioIngresado ;
				console.log(paciente);
				//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
				var pacienteIndex = buscarPacienteEnArray();
	
	console.log(listado);
	
	//recorremos el array consultas
		for(var i = 0; i < arrConsultas.length; i++){
			//  si la consulta es del paciente, añadimos el identificador al listado
				if(arrConsultas[i]["paciente"] === pacienteIndex){
					listado.push(arrConsultas[i]["identificador"]);
				}
			
		}
	return listado;
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


//function mostrar tabla con las consultas del usuario
function mostrarTablaUsuarioConsultas(){
		var consultasGeneradas = $("#presentarConsultasUsuario");


		var consultasUsuario = [];
		var paciente = usuarioIngresado ;
			console.log(paciente);
			//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
			var pacienteIndex = buscarPacienteEnArray();

				//recorrer el array de consultas,
				for(var i = 0 ; i < consultas.length; i++){
					if(consultas[i]["paciente"] == pacienteIndex){
						consultasUsuario.push(consultas[i]);
					}
				}
		var tabla = crearTablaTodasConsultas(consultasUsuario);
		consultasGeneradas.html(tabla)
}






//Creamos formulario de buscar consultas
function formBuscarConsulta(){
	var listado = listadoIdsConsultas(consultas);
	//listamos las ID de las consultas del usuario

	//formulario para buscar consulta
	var form 	=  '<form>'
				+	'<hr>'
			 	+   '<label  for="buscar1A" >ID</label>';
			 	//listamos los id de cada consulta del paciente
		form 	+= '<select class="form-control" name="Sel.Id" id="buscar1A">'
				+ '<option selected="selected" value="empty">Sel. ID</option>';
		//ofrecemos un listado de IDs de las consultas
				for(var i = 0 ; i < listado.length ; i++ ){
		form		+= 	'<option value=' + '\"' + listado[i] + '\"' + '>' + listado[i] + '</option>';	
					
					
				};	

		form	+=	'</select>'
				+	'<br >';

		form    +=	'<label  for="in1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="buscar1B"  disabled ></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control btn-primary" value="Buscar" id="btnBuscarConsulta">'
            	+	'</form>';
        form 	+=  '<div class="text-center" id="resultadosBuscarConsulta">'	
         		+    '<p class="panel panel-default resultado"  id="resultadoBuscarConsulta"></p>'
		        +    '<p class="panel panel-default resultado"  id="presentarConsultasUsuario"></p>'
		       
	            +	'</div>';



    var buscarConsulta = $("#buscarConsulta");
    buscarConsulta.html(form);

    mostrarTablaUsuarioConsultas();
	//mostramos las consultas generadas por el usuario;



	//eventos de los formularios buscar Consulta
	var identificacionBuscar = $("#buscar1A");
	identificacionBuscar.on("change", presentarDescripcion);
	var btnBuscarConsulta = $("#btnBuscarConsulta");
	btnBuscarConsulta.on("click", estadoConsulta);
	

};



function presentarDescripcion(){
	//cuando el paciente elige una ID de la consulta, puede ver la descripcion de la consulta.

	var idSelected = $("#buscar1A").val();
		if(idSelected !== "empty"){
			
			//luego de que el paciente elige un Identificador de consulta

			//vamos a mostrar la descripcion de la consulta.
			var descripcionConsulta = "";

			//que los presentaremos en el input presentacion.
			var campoDescripcion = $("#buscar1B");


				//recorremos las consultas por identificador 
				for(var i = 0; i < consultas.length; i++){
					//si la consulta tiene el identificador seleccionado, se toma la descripcion de la consulta
					if(consultas[i]["identificador"] == idSelected){
						descripcionConsulta = consultas[i]["descripcion"];
					}
				}
				// se presentan la descripcion de la consulta
				campoDescripcion.val(descripcionConsulta);
		}

};


//busca informacion de esa consulta
function estadoConsulta(){
	//Variable donde vamos a presentar los resultados de la busqueda.
	var resultado = $("#resultadoBuscarConsulta");
	//variable del id de la consulta elegida.
	var idSelected = $("#buscar1A").val();
	//verificar se selecciono un ID
	if(idSelected != "empty"){
		//Buscar el index de el array consultas utilizando el identificador.
		var consultaIndex = busquedaEnArrayObjetos(consultas, "identificador", idSelected);
		var consultaPaga = consultas[consultaIndex]["consultaPaga"];
		var consultaFinalizada =  consultas[consultaIndex]["finalizada"];
		var aPagar = "";
		var estaFinalizada = "";
			if(!consultaPaga){
				aPagar = "No olvide pagar la consulta."
			}else if(consultaPaga){
				aPagar = "La consulta ya fue paga."
			}
			if(!consultaFinalizada){
				estaFinalizada = "Su consulta se encuentra abierta."
			}else if(consultaFinalizada){
				estaFinalizada = "La consulta ya fue  cerrada."
			}




		resultado.html(aPagar + " " + estaFinalizada + "")
	}else{
		resultado.html("Selecione una consulta por favor.")


	}





}













function formModificarPerfil(){
	var paciente = usuarioIngresado ;
	console.log(paciente);		
	var divPadre = '<div>';
	var tablaConsulta = '<form class="form-horizontal">'
		+ 	'<div class="form-group">'
			+	 '<div class="col-xs-12 col-sm-12 ">'
			+ 		'<label for="mod_imagen_paciente" class="col-sm-2 control-label">'
			+ 			'<img src="./images/' + paciente.foto + '" ' + 'width="100" height="100" id="muestraImagenActual" class="img-responsive" alt="Foto de perfil"> '
			+		'</label>'
		+	'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_imagen_paciente" class="form-control" type="file" value="' + paciente.foto + '">'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_nombre_paciente" class="col-sm-2 control-label">Nombre </label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_nombre_paciente" class="form-control" type="text" value=" ' + paciente.nombre +  '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_apellido_paciente" class="col-sm-2 control-label">Apellido</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_apellido_paciente" class="form-control" type="text" value="' + paciente.apellido + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_numero_paciente" class="col-sm-2 control-label">Numero de Paciente</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_numero_paciente" class="form-control" type="text" value="' + paciente.numeroPaciente + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_clave_paciente" class="col-sm-2 control-label">Clave</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_clave_paciente" class="form-control" type="password" value="' + paciente.clave + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_cedula_paciente" class="col-sm-2 control-label">Cedula</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_cedula_paciente" class="form-control" type="text" value="' + paciente.cedula + '" disabled>'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_telefono_paciente" class="col-sm-2 control-label">Telefono</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_telefono_paciente" class="form-control" type="text" value="' + paciente.telefono + '" >'
		+		'</div>'
		+	'</div>'
		+ 	'<div class="form-group">'
		+ 		'<label for="mod_alergias_paciente" class="col-sm-2 control-label">Alergias</label>'
		+		'<div class="col-sm-8">'
		+ 			'<input id="mod_alergias_paciente" class="form-control" type="text" value="' + paciente.alergias.join(", ") + '">'
		+		'</div>'
		+	'</div>'
		+		'<div class="form-group text-center">'
		+			'<input id="mod_guardar_perfil" class="btn btn-primary" type="button" value="Guardar Cambios" style="width:80%">'
		+		'</div>'
			+  '<div class="text-center" id="resultadosModificarPerfil">'	
		+    '<p class="panel panel-default resultado"  id="resultadoModificarPerfil"></p>'
	    +	'</div>'
		+	'<fieldset>'
		+		'<legend>Modificar Clave</legend>'
		+ 		'<div class="form-group">'
		+ 			'<label for="mod_clave_actual" class="col-sm-2 control-label">Clave Actual</label>'
		+			'<div class="col-sm-8">'
		+ 				'<input id="mod_clave_actual" class="form-control" type="password" placeholder="Clave Actual">'
		+			'</div>'
		+		'</div>'

		+ 		'<div class="form-group">'
		+ 			'<label for="mod_clave_nueva" class="col-sm-2 control-label">Nueva Clave</label>'
		+			'<div class="col-sm-8">'
		+ 				'<input id="mod_clave_nueva" class="form-control" type="password" placeholder="Nueva Clave">'
		+			'</div>'
		+		'</div>'
		+	'</fieldset>'
		+	'<fieldset>'
		+		'<div class="form-group text-center">'
		+			'<input id="modificar_clave" class="btn btn-primary" type="button" value="Modificar clave" style="width:80%">'
		+		'</div>'
		+	'</fieldset>'
		+ '</form>';
		var resultado 	=  '<div class="text-center" id="resultadosModificarPerfil">'	
		        	+    '<p class="panel panel-default resultado"  id="resultadoCambiarClave"></p>'
	            	+	'</div>';

	
    var formPerfil = $("#formPerfil");
    formPerfil.html(divPadre + tablaConsulta +resultado + '</div>');
    $("#mod_imagen_paciente").hide();	



    //eventos de modificar perfil
    var guardarPerfil = $("#mod_guardar_perfil");
    //al presionar en guardar cambios llamamos a la funcion modificar perfil.
    guardarPerfil.on("click",modificarPerfil)
    //eventos de modificar clave
    var guardarClave = $("#modificar_clave");
    guardarClave.on("click",modificarClave)






};

/*

*/
//modificarPerfil modifica los datos del perfil
function modificarPerfil(){
	var paciente = usuarioIngresado;
	console.log(paciente.foto);
	//toma los valores de los inputs del formulario modificar  clave
	var nuevaFoto = $("#mod_imagen_paciente").val().split("\\").pop ();
	console.log(nuevaFoto);
	var nuevoTelefono = $("#mod_telefono_paciente").val();
	var nuevaAlergias = $("#mod_alergias_paciente").val();
	var resultado = $("#resultadoModificarPerfil");

	//buscamos el paciente a modificar del array.
	var pacienteIndex = buscarPacienteEnArray();
	pacientes[pacienteIndex]["telefono"] = nuevoTelefono;
	pacientes[pacienteIndex]["alergias"] = nuevaAlergias.split(",");

	//si el usuario modifico la foto
	if(nuevaFoto.length != 0){
		//modificamos la foto del paciente.
		pacientes[pacienteIndex]["foto"] = nuevaFoto;
		//cambia la imagen actual por la nueva imagen.
		$("#muestraImagenActual").attr("src", "./images/" +  paciente.foto);
	}
	resultado.html("Se ha modificado el Perfil.");

}

/*
 modificarClave cambia la clave del paciente logueado desde su perfil
*/

function modificarClave(){
	var paciente = usuarioIngresado;
	console.log(paciente.clave);
	//toma los valores de los inputs del formulario modificar  clave
	var valorClaveActual = $("#mod_clave_actual").val();
	var valorClaveNueva = Number($("#mod_clave_nueva").val());
	console.log(valorClaveActual, valorClaveNueva)

	//almacena el campo hmtl donde se presentara el resultado de modificar clave
	var resultado =	$("#resultadoCambiarClave");
		
	//Si el campo clave actual y nueva clave  no estan vacios
	var verificarVacio = validarVacio(valorClaveActual,valorClaveNueva);
	//comienza a procesar los valores de los inputs.
		if(verificarVacio){
			//Si la clave actual fue colocada correctamente
			if(valorClaveActual == paciente.clave ){
				//El paciente ingresado es un objeto
				console.log(paciente);
				//buscamos el index del paciente dentro del array comparando la propiedad nombre completo 
				var pacienteIndex = buscarPacienteEnArray();	
				//modificamos la clave actual por la nueva clave
				pacientes[pacienteIndex]["clave"] = valorClaveNueva;
				console.log(pacientes[pacienteIndex]["clave"]);
				resultado.html("Nueva Clave Ingresada con exito.");

			}else{
				//si la clave actual no es correcta.
				resultado.html("Ingrese la clave actual correcta");

			}
		}else{
			//Si los campos estan vacios.
			resultado.html("Ingrese valores en los campos de claves");
		}
};//ends modificarClave

