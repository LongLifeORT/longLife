
function Paciente(nombre, apellido,numeroPaciente,clave, foto){
	this.nombre = nombre;
	this.apellido = apellido;
	this.nombreCompleto = nombre +" "+ apellido;
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
console.table(pacientes);



function Consulta(pacienteIndex, medicoIndex,descripcion){
	var numeroIncremental = Counter.conteo();
	
	var letraNombreIdentificador =  doctores[medicoIndex].nombre.slice(0,1);
	var letrasApellidoIdentificador = doctores[medicoIndex].apellido.slice(0,3);
	
	this.identificador = letraNombreIdentificador 
		+ letrasApellidoIdentificador 
		+ numeroIncremental;
	console.log(this.identificador);
	this.consultaPaga = false;
	this.descripcion =  descripcion  || "";
	this.finalizada = false;
	this.paciente = pacienteIndex;
	this.medico = medicoIndex;
	this.especialidad = doctores[medicoIndex].especialidad;

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
// indice de paciente, indice de medico, estado de la consulta, estado del pago
	new Consulta(0,0),
	new Consulta(1,1),
	new Consulta(2,2),
	new Consulta(3,4),
	new Consulta(4,8),
	new Consulta(5,5),
	new Consulta(6,7),
	new Consulta(7,7),
	new Consulta(8,5),
	new Consulta(9,6),
	new Consulta(1,2),
	new Consulta(2,4),
	new Consulta(7,7),
	new Consulta(4,3),
	new Consulta(3,6),
	new Consulta(1,2),
	new Consulta(2,4)

];





// reportes y consultas

/**
 Genera consulta a partir del paciente y del medico
*/
function crearTablaTodasConsultas(){
	var listadoConsultas = consultas;


	 var table = "<div class= \"table-responsive\">"
	 table +=  "<table class=\"table table-striped table-hover\">"
	 table +=     "<thead>";
	 table += " <tr> <th>ID</th> <th>Usuario</th>   <th>Medico</th> <th>Especialidad</th></tr> ";
     table +=    "</thead>"     
     table += " <tbody>";             
                  
              for(var i = 0 ; i< listadoConsultas.length; i++){
              	table +=  "<tr>";


              	table += "<td>" + listadoConsultas[i].identificador + "</td>" + "<td>" + listadoConsultas[i].paciente.nombreCompleto  + "</td>" 
              	+ "<td>" + listadoConsultas[i].medico.nombreCompleto  + "</td>"
              	+ "<td>" + listadoConsultas[i].especialidad   + "</td>";
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