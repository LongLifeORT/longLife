/*    Libreria de funciones del programa   */


$(document).ready(main);



function main() {


	var crearConsultaMenu = $(".crearConsultaMenu");

	var buscarConsultaMenu = $(".buscarConsultaMenu");

	var pagarConsultaMenu = $(".pagarConsultaMenu");

	var preguntasMenu = $(".preguntasMenu");

	
	hideInfos();
	crearConsultaMenu.on("click" , mostrarCrearConsulta);
	buscarConsultaMenu.on("click" , mostrarBuscarConsulta);
	pagarConsultaMenu.on("click" , mostrarPagarConsulta);
	preguntasMenu.on("click" , mostrarPreguntas);

 //mostrar tabla de consultas
 mostrarTabla();






}
//ends main


//oculta todo los info para mostrar solo uno luego.
function hideInfos(){
	var crearConsultaInfo = $(".crearConsultaInfo");
	var buscarConsultaInfo = $(".buscarConsultaInfo");
	var pagarConsultaInfo = $(".pagarConsultaInfo");
	var preguntasInfo = $(".preguntasInfo");


	var infos = $(".infos");
	infos.hide();

}
//oculta todo los info para mostrar solo uno luego.
function hideMenues(){
	var menues = $(".menues");
	menues.slideToggle();



}




// muestra la interface de crear consulta
function mostrarCrearConsulta() {
	hideInfos();

	var crearConsultaInfo = $(".crearConsultaInfo");
	crearConsultaInfo.toggle();

	crearConsultaInfo.on("click" , hideMenues);

}
//muestra la interface de buscar consulta
function mostrarBuscarConsulta() {
	hideInfos();

	var buscarConsultaInfo = $(".buscarConsultaInfo");
	buscarConsultaInfo.toggle();
	buscarConsultaInfo.on("click" , hideMenues);
}
// muestra la interface de pagar consulta
function mostrarPagarConsulta() {
	hideInfos();

	var pagarConsultaInfo = $(".pagarConsultaInfo");
	pagarConsultaInfo.toggle();
	pagarConsultaInfo.on("click" , hideMenues);

}
//muestra la interface de preguntas frecuentes
function mostrarPreguntas() {
	hideInfos();

	var preguntasInfo = $(".preguntasInfo");
	preguntasInfo.toggle();
	preguntasInfo.on("click" , hideMenues);

}













//function mostrar tabla
function mostrarTabla(){
var consultasGeneradas = $("#consultasGeneradas");
var tabla = crearTabla();
consultasGeneradas.html(tabla)

}

function crearTabla(){
	var id = 1000;
	var usuarios = ["Luis Damiano","Gerardo Pablo", " Rafael Gabino" ,"Samuel Pablo", " RafaelRaymundo"," Rico Pablo"," Gerardo Samuel"];
	var medicos = ["Gerardo Torres","Modesto Torres", "Ignacio Abel" , "Fausto Pablo"," Rafael Renato" , "Rico Santos" , " Rafael Torres" ];
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

/**
 retorna indice donde esta el objeto en array indexado

 array array
 prop string
 valor any

 return int
*/
function busquedaEnArrayObjetos(array, prop, valor){
	for(var i = 0; i < array.length; i++){
		if(array[i][prop] = valor){
			return i;
		}
	}
	return -1;
}


// reportes y consultas

/**
 Genera consulta a partir del paciente y del medico
*/
function Consultas(pacienteIndex, medicoIndex){
	var numeroIncremental = listaConsultas.length;
	var letraNombreIdentificador = medico[medicoIndex].nombre.splice(0,1);
	var letrasApellidoIdentificador = medico[medicoIndex].apellido.splice(0,3);
	this.identificador = letraNombreIdentificador 
		+ letrasApellidoIdentificador 
		+ numeroIncremental;
	this.consultaPaga = false;
	this.descripcion = "";
	this.finalizada = false;
	this.paciente = pacienteIndex;
	this.medico = medicoIndex;
}

