
var x;

function calcula(){
	x = 1;
	try{
		 var a = parseFloat(document.getElementById("cantidad").value) || 0;
		var selected = document.getElementById("selected").value || 0;
		console.log(selected);
		switch(selected){
			case "km":
			var b = a / 1.60934;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Kilómetros";
			document.getElementById("resultado").innerHTML = "Millas";
			break;
			case "mk":
			var b = a * 1.60934;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Millas";
			document.getElementById("resultado").innerHTML = "Kilómetros";
			break;
			case "pm":
			var b = a * 0.3048;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Pies";
			document.getElementById("resultado").innerHTML = "Metros";
			break;
			case "mp":
			var b =3.28084  * a;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Metros";
			document.getElementById("resultado").innerHTML = "Pies";
			break;
			case "cp":
			var b = a * 0.39;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Centímetros";
			document.getElementById("resultado").innerHTML = "Pulgadas";
			break;
			case "pc":
			var b = a* 2.54;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Pulgadas";
			document.getElementById("resultado").innerHTML = "Centímetros";
			break;

		}
	}catch (e){}

}
document.getElementById("intercambiar").addEventListener("click",comprobar);

function comprobar(){
	if (x == 1){
		calculo();
	}
	else
		calcula();

}

function calculo(){
x = 0;
	try{
		var a = parseFloat(document.getElementById("cantidad").value) || 0;
		var selected = document.getElementById("selected").value || 0;
		console.log(selected);
		switch(selected){
			case "km":
			var b = a * 1.60934;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Millas";
			document.getElementById("resultado").innerHTML = "Kilómetros";
			break;
			case "mk":
			var b = a / 1.60934;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Kilómetros";
			document.getElementById("resultado").innerHTML = "Millas";
			break;
			case "mp":
			var b = a * 0.3048;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Pies";
			document.getElementById("resultado").innerHTML = "Metros";
			break;
			case "pm":
			var b =3.28084  * a;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Metros";
			document.getElementById("resultado").innerHTML = "Pies";
			break;
			case "pc":
			var b = a * 0.39;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Centímetros";
			document.getElementById("resultado").innerHTML = "Pulgadas";
			break;
			case "cp":
			var b = a* 2.54;
			document.getElementById("result").value = b.toFixed(2);
			document.getElementById("unidad").innerHTML = "Pulgadas";
			document.getElementById("resultado").innerHTML = "Centímetros";
			break;

		}
	}catch (e){}
	}
	




