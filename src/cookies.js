
var i = 0;
document.getElementById("guardar").addEventListener("click", save);
document.getElementById("borrar").addEventListener("click", clear);

function save (){

	var a = document.getElementById("cantidad").value;
	var c = document.getElementById("result").value;
	var b = document.getElementById("unidad").innerHTML
	var d = document.getElementById("resultado").innerHTML;
	console.log(a, b,c ,d);

	if(b =="Seleccione unidad" || !a)
		return;
	var arr =  new Array(a, b, c, d);
	i++;

	localStorage.setItem(i.toString(), JSON.stringify(arr));
	
	for (var u = 1; u<i+1; u++){
	console.log(localStorage.getItem(u.toString()));
	
		}
		genera_tabla();

}

function clear(){
	i = 0;
	localStorage.clear();
	var borrar = document.getElementById("tabla1");
	borrar.remove();


	console.log(localStorage.getItem("saved"));

}


function genera_tabla() {
  

  var body = document.getElementById("tabla");
  var tabla   = document.createElement("table");
  tabla.id = "tabla1";
  var tBody = document.createElement("tbody");

   
    var hilera = document.createElement("tr");
      var celda = document.createElement("td");
      var s1 = localStorage.getItem(i.toString());
      console.log(s1);
      s = s1.replaceAll(",", " ").replaceAll("[", "▪︎").replaceAll("]", ".");
      var textoCelda = document.createTextNode(s.replaceAll("\""," "));
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    tBody.appendChild(hilera);
  tabla.appendChild(tBody);
  body.appendChild(tabla);

}