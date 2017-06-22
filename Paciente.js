
function Paciente(nombre, apellido,numeroPaciente,clave, foto){
	this.nombre = nombre;
	this.apellido = apellido;
	this.numeroPaciente	= numeroPaciente;
	this.clave = clave;
	this.foto = foto || "default.jpg";
	this.peso = [0],
	this.altura = [0],
	this.alergias = ["ninguna"],
	this.telefono = 911,
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
	

};

var pacientes = [
	new Paciente("Luis", "Damiano", 11 ,123456),
	new Paciente("Horacio", "Mercer",  12,123456),
	new Paciente("Jorge", "Maximino",13,123456),
	new Paciente("Hernando", "Salvador",14,123456),
	new Paciente("Esteban", "Eustaquio",15,123456),
	new Paciente("Rosa", "Ximenes",16,123456),
	new Paciente("Carlos", "Vasco",17,123456),
	new Paciente("Marcelino", "Sosa",18,123456),
	new Paciente("Diego", "Santos",19,123456),
	new Paciente("Leonardo", "Amor",20,123456),
];


function Consulta(pacienteIndex, medicoIndex,finalizada,consultaPaga){
	var numeroIncremental = listaConsultas.length;
	var letraNombreIdentificador = medico[medicoIndex].nombre.splice(0,1);
	var letrasApellidoIdentificador = medico[medicoIndex].apellido.splice(0,3);
	this.identificador = letraNombreIdentificador 
		+ letrasApellidoIdentificador 
		+ numeroIncremental;
	this.consultaPaga = consultaPaga;
	this.descripcion = "";
	this.finalizada = finalizada;
	this.paciente = pacienteIndex;
	this.medico = medicoIndex;
	this.modificarDescripcion = function(nuevaDescripcion){
		this.descripcion = nuevaDescripcion;

	};
	this.modificarEstado = function(nuevoEstado){
		this.finalizada = nuevoEstado;
	};		
	this.modificarPago = function(nuevoPago){
		this.consultaPaga = nuevoPago;
	};


};


var consultas = [
	new Consulta(pacientes[0],doctores[1]),
	new Consulta(pacientes[1],doctores[2]),
	new Consulta(pacientes[2],doctores[3]),
	new Consulta(pacientes[3],doctores[4]),
	new Consulta(pacientes[4],doctores[0]),
	new Consulta(pacientes[2],doctores[1]),
	new Consulta(pacientes[3],doctores[2]),
	new Consulta(pacientes[1],doctores[3]),
	new Consulta(pacientes[2],doctores[4]),
	new Consulta(pacientes[3],doctores[0]),
	new Consulta(pacientes[4],doctores[1]),
	new Consulta(pacientes[0],doctores[2])

];





// reportes y consultas

/**
 Genera consulta a partir del paciente y del medico
*/





function crearTabla(){
	var id = 1000;
	var usuarios = pacientes;
	var medicos =  doctores;
	var especialidades = ["Cardiologo","Geriatra", "Reumatología","Neumología","Pediatría","Neumología","Psiquiatría"];
	var estado = ["Abierta","Finalizada","Abierta","Abierta","Finalizada","Abierta","Abierta"];

	 var table = "<div class= \"table-responsive\">"
	 table +=  "<table class=\"table table-striped table-hover\">"
	 table +=     "<thead>";
	 table += " <tr> <th>ID</th> <th>Usuario</th>   <th>Medico</th> <th>Especialidad</th> <th>Estado</th> </tr> ";
     table +=    "</thead>"     
     table += " <tbody>";             
                  
              for(var i = 0 ; i< usuarios.length; i++){
              	table +=  "<tr>";

              	table += "<td>" + id  + "</td>" + "<td>" + usuarios[i]  + "</td>" + "<td>" + medicos[i]  + "</td>" +"<td>" + especialidades[i]  + "</td>" +"<td>" + estado[i]  + "</td>";
              	id++;
              	table += "</tr>";	
              }  
    table +=  "</tbody></table></div>"       
      	        
           
    return table;       

}















function formCrearConsulta(){
	var form 	=  '<hr>'
			 	+   '<label  for="in1A" >Medico</label>'
			 	+	'<input type="text"  class="form-control" id="in1A">'
				+	'<br >'
				+	'<label  for="in1B" >Especialidad</label>'
				+	'<input type="text"  class="form-control" id="in1B">'
				+	'<br >'
				+	'<label  for="in1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="in1C"></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control" value="Ingresar" id="btn1">';

    var crearConsulta = $("#crearConsulta");
    crearConsulta.html(form);

};

function formBuscarConsulta(){
	var form 	=  '<hr>'
			 	+   '<label  for="in1A" >Medico</label>'
			 	+	'<input type="text"  class="form-control" id="in1A">'
				+	'<br >'
				+	'<label  for="in1B" >Especialidad</label>'
				+	'<input type="text"  class="form-control" id="in1B">'
				+	'<br >'
				+	'<label  for="in1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="in1C"></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control" value="Buscar" id="btn1">';

    var buscarConsulta = $("#buscarConsulta");
    buscarConsulta.html(form);

};

function formPagarConsulta(){
	var form 	=  '<hr>'
			 	+   '<label  for="in1A" >Medico</label>'
			 	+	'<input type="text"  class="form-control" id="in1A">'
				+	'<br >'
				+	'<label  for="in1B" >Especialidad</label>'
				+	'<input type="text"  class="form-control" id="in1B">'
				+	'<br >'
				+	'<label  for="in1C" >Descripcion</label>'
				+	'<textarea  class="form-control" id="in1C"></textarea>'
				+	'<br >'
            	+   '<input type="button"  class="form-control" value="Pagar" id="btn1">';

    var pagarConsulta = $("#pagarConsulta");
    pagarConsulta.html(form);

};




function cambiarFoto(foto){

	//this usuario cambiar foto




}