/* 
Funciones para validar datos
 */
//ACA VALIDAMOS EL CAMPO NO ESTE VACIO
//******************************************************
function validarVacio(inputA,inputB,inputC,inputD){
	var inputC = inputC || 1;
	var inputD = inputD || 1;
	if(inputA.length === 0 ||  inputB.length ===  0 || inputC.length === 0 || inputD.length === 0 ){
		return false;
	}else{
		return true;
	}
};

function validarInt(inputA,inputB){
	if(isNaN(inputA) || isNaN(inputB)){
		return false;
	}else{
		return true;
	}
}

function validacionTotal(a, b){
	if(a.length < 1 || b.length < 1){
		return true;
	}
	if(isNaN(a) || isNaN(b)){
		return true
	}
	return false;
}
	
function validarPositivo(error,resultado,btn,inputA,inputB,inputC){
	if(inputA <= 0 ||  inputB <= 0  ){
		error.html("Ingrese valores positivos!!").addClass("importante");
		btn.addClass("btn btn-danger");
		error.show();
		return false;
	}else{
		btn.removeClass(" btn btn-danger");
		resultado.html("Valores ingresados").addClass("importante");
		error.hide();
		return true;
	};
};

	