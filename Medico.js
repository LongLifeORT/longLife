medico: {
	init: function(){
		// Inicializa los metodos necesarios para que funcione la aplicación con el login de usuario medico
		this.domCache();
		this.readyEvents();
	},
	domCache: function(){
		// Guarda los elementos del DOM que se van a utilizar por el medico
	},
	readyEvents: function(){
		// Genera los event handlers necesarios para el medico (por ejemplo, si es medico y hace click en login, que busque solo en la lista de medico.
	},
	listPatients: function(){
		// Ordena los datos de los pacientes para imprimirlos y que el doc pueda elegir que paciente modificar
	},
	showPatient: function(){
		// Similar a listPatients(), pero muestra solo los datos del paciente seleccionado
	}
	updatePatient: function(){
		// Metodo para agregar nuevo peso, altura, etc. Similar al metodo modifyPatient() del objeto paciente
	},
	
	//Creamos un constructor para el objeto medico
	//De los doctores se conoce nombre, apellido, su especialidad, numero de profesional.
	/*Al ser un constructor, su nomenclatura comienza en Mayuscula, lleva de argumentos las propiedades que ya conocemos de los medicos*/
			
	create: function Medico(nombre, apellido, especialidad, numeroProfesional,contraseña){
		this.nombre = nombre;
		this.apellido = apellido;
		this.especialidad = especialidad;
		this.numeroProfesional = numeroProfesional;
		this.contraseña = contraseña;
	},

	doctores: [
		{
			nombre: "Fulano",
			apellido: "DeFulano",
			especialidad: "Mago de Oz",
			numIdentificador: "007",
			contraseña: "asdfgh"
		},
		{
			nombre: "Fulano2",
			apellido: "DeFulano2",
			especialidad: "Mago de Oz",
			numIdentificador: "0072",
			contraseña: "asdfgh"
		}
	],
		
	init: function(){
		//inicializa a medico, doctor y todos los metodos necesarios para que la página muestre reportes, dibuje, etc.
	},
	domCache: function(){
			// Guarda los elementos del DOM que no son especificos a medico o paciente
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