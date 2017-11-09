/*Usando addEventListener*/
/*var inp = document.getElementById("creator");*/
document.getElementById("creator").addEventListener("focus", function(){  /*para que se active al ponerle click*/
	var buttonListCreator = document.createElement('button');/*para crear el botón*/
	buttonListCreator.setAttribute("id","listCreator");/*para darle id al botón*/
	buttonListCreator.setAttribute("type","button");/*para recordarle que es un tipo botón*/	

	var divCreator = document.getElementById("div_creator");/*enlazando el botón a su div padre*/
	
	var textButtonCreator = document.createTextNode("Guardar"); /*creando nodo de texto del botón*/
	buttonListCreator.appendChild(textButtonCreator);/*enlazando el texto del botón a su padre botón*/
	divCreator.appendChild(buttonListCreator);

	/*tiene que aparecer un div nuevo con el nombre que puso el usuario en el input del html*/
	var listHomework = document.createElement("input"); /*crear un input para la lista de tareas*/
	listHomework.setAttribute("type","text");/*input tipo texto*/
	listHomework.setAttribute("placeholder","Agrega una tarea"); /*dirá agregar tareas*/
	listHomework.classList.add("class","inputLists")/**/
	});


	/*boton.addEventListener("click", function(){
		var tareas = document.getElementsByClassName('input_titulo')[0].value;//aca con .value repurero lo que ingreso el usuario, para luego utilizarlo
		document.getElementsByClassName('input_titulo')[0].value = "";//aca le indico que una vez ya rescatado lo ingresado, quede limpio nuevamente mi input
		console.log(tareas);
	})
})*/
	
	
