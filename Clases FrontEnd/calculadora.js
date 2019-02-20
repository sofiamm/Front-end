let signo=" ";
let num1=0;
let num2=0;
let conca="";

function pan(n){ //MUESTRE LOS NUMEROS
	conca+=n;
	document.getElementById("respuesta").innerHTML=conca;
}

function vaciar(o){
	signo=o;
	num1=Number(conca);
	document.getElementById("respuesta").innerHTML=conca;
	conca=" ";
}

function result(){ //para que pueda dar el resultado
	num2=Number(conca);
	document.getElementById("respuesta").innerHTML=num2;
	conca="";

	let claseoperacion= new operation(num1,num2);
//onclickbotonigual
switch (signo){ 
	case"+":
	claseoperacion.sumar().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	break;
	case"-":
	claseoperacion.restar().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	break;
	case"*":
	claseoperacion.multi().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
	break;
	case"/":
	claseoperacion.div().then(function(response){
	document.getElementById("respuesta").innerHTML=response;
	},function(error){
		document.getElementById("respuesta").innerHTML="Hay un error";
	});
break;
default:
console.log("default");
break;
}

}

class operation{
	constructor(num1,num2){
		this.number1=num1;
		this.number2=num2;
	}
	sumar(){
		var objetoautilizar=this;
		//regresar la promesa
		return new Promise(function(resolve,reject){
		//do xhr stuff
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload =function(){
					if (xhr.status == 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoautilizar));
				}
			catch(err){
				reject(err.message);
			}
		});
	}
	restar(){
		var objetoautilizar=this;
		//regresar la promesa
		return new Promise(function(resolve,reject){
		//do xhr stuff
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload =function(){
					if (xhr.status == 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoautilizar));
				}
			catch(err){
				reject(err.message);
			}
		});
	}
	multi(){
		var objetoautilizar=this;
		//regresar la promesa
		return new Promise(function(resolve,reject){
		//do xhr stuff
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload =function(){
					if (xhr.status == 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoautilizar));
				}
			catch(err){
				reject(err.message);
			}
		});
	}
	div(){
		var objetoautilizar=this;
		//regresar la promesa
		return new Promise(function(resolve,reject){
		//do xhr stuff
			try{
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload =function(){
					if (xhr.status == 200){
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoautilizar));
				}
			catch(err){
				reject(err.message);
			}
		});
	}
}