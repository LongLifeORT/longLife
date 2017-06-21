
function Paciente(nombre, apellido,numeroPaciente,clave, foto){
	this.nombre = nombre;
	this.apellido = apellido;
	this.numeroPaciente	= numeroPaciente;
	this.clave = clave;
	this.foto = foto || "default.jpg";

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
	}
};

pacientes = [
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
