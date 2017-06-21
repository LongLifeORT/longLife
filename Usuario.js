paciente: {
	init: function(){
		// Inicializa los metodos necesarios para que funcione la aplicación con el login de usuario usuario
		this.domCache();
		this.readyEvents();
	},
	domCache: function(){
		// Guarda los elementos del DOM que se van a utilizar por el usuario
	},
	readyEvents: function(){
		// Genera los event handlers necesarios para el usuario (por ejemplo, si es usuario y hace click en login, que busque solo en la lista de usuario.
	},
	
	
	//Creamos un constructor para el objeto usuario
	//De los usuarios se conoce nombre, apellido.
	/*Al ser un constructor, su nomenclatura comienza en Mayuscula, lleva de argumentos las propiedades que ya conocemos de los usuarios*/
			
	create: function Paciente(nombre, apellido,numeroPaciente,contraseña){
		this.nombre = nombre;
		this.apellido = apellido;
		this.numeroPaciente	= numeroPaciente;
		this.contraseña = contraseña;
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

	pacientes: [
	 
		new Usuario("Luis", "Damiano", 11 ,123456),
		new Usuario("Horacio", "Mercer",  12,123456),
		new Usuario("Jorge", "Maximino",13,123456),
		new Usuario("Hernando", "Salvador",14,123456),
		new Usuario("Esteban", "Eustaquio",15,123456),
		new Usuario("Rosa", "Ximenes",16,123456),
		new Usuario("Carlos", "Vasco",17,123456),
		new Usuario("Marcelino", "Sosa",18,123456),
		new Usuario("Diego", "Santos",19,123456),
		new Usuario("Leonardo", "Amor",20,123456),
	],

	login: function login(){

	},
	init: function(){
		//inicializa a usuario, usuario y todos los metodos necesarios para que la página muestre reportes, dibuje, etc.
	},
	domCache: function(){
			// Guarda los elementos del DOM que no son especificos a usuario o paciente
	},
	readyEvents: function(){
		// Genera los event handlers que no son especificos a medico o paciente
	},
	generateReport: function(){
		//retorna un JSON o string de los medicos, sus especialidades, y sus consultas
	},
	showReport: function(){
		// dibuja el reporte generado
	}
}





