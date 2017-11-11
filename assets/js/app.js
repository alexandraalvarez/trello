/*Usando addEventListener*/
/*var inp = document.getElementById("creator");*/
document.getElementsByClassName("creator")[0].addEventListener("focus", function(){  /*para que se active al ponerle click*/
	var buttonListCreator = document.createElement('button');/*para crear el botón*/
	buttonListCreator.setAttribute("id","listCreator");/*para darle id al botón*/
	buttonListCreator.setAttribute("type","button");/*para recordarle que es un tipo botón*/	

	var divCreator = document.getElementById("div-creator");/*enlazando el botón a su div padre*/
	
	var textButtonCreator = document.createTextNode("Guardar"); /*creando nodo de texto del botón*/
	buttonListCreator.appendChild(textButtonCreator);/*enlazando el texto del botón a su padre botón*/
	divCreator.appendChild(buttonListCreator);

	})


	/*tiene que aparecer un div nuevo con el nombre que puso el usuario en el input del html*/
	/*var listsContainer = document.getElementById("lists-container"); /*para darle un padre al div que tendrá las listas*/
	/*var lists = document.createElement("div"); /*para guardar cada lista nueva*/
	/*lists.setAttribute("class","lists"); /*para asignar una clase a cada lista que se cree*/
	/*listsContainer.appendChild(lists); /*para darle padre a cada lista que se cree*/

	/*crear un título para la lista y rescatarlo del input original al hacer click en guardar*/
	/*var titleList = document.createElement("h4"); /*título de la lista nueva*/
	/*var textTitleList = document.createTextNode("valor recatado del input original");
	titleList.appendChild(textTitleList); /*para que el nodo texto se una al h4*/
	/*lists.appendChild(titleList); /*para poner el título de la lista dentro del div lista*/

	/*buttonListCreator.addEventListener("click", function(){ /*llamo al botón creado arriba y le agrego evento*/
		/* = document.getElementsByClassName('creator')[0].value;//aca con .value recupero lo que ingresó el usuario, para luego utilizarlo
		document.getElementsByClassName('inputLists')[0].value = "";//aca le indico que una vez ya rescatado lo ingresado, quede limpio nuevamente mi input
		console.log(homeWork);*/
	
	/*input para la lista de tareas*/
	/*var listHomework = document.createElement("input"); /*crear un div para la lista de tareas*/
	/*listHomework.setAttribute("type","text");/*input tipo texto*/
	/*listHomework.setAttribute("placeholder","Agrega una tarea"); /*dirá agregar tareas*/
	/*listHomework.classList.add("class","inputLists")/*clase al input para poder llamarlo*/

	
	
	
	/*})*/
