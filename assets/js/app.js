/*partiendo del a que dice añadir una lista*/
var addList = document.getElementById("add-list"); /*para llamar al a */

/*función para que al hacer focus sobre a, éste desaparezca y en su lugar se vea el formulario*/
addList.addEventListener("focus", function() {
	var divCreator = document.getElementById("div-creator");/*div padre del formulario*/
	divCreator.removeChild(addList); /*para que desaparezca el link a*/

	var listCreator = document.createElement("input"); /*creando el input para agregar las listas*/
	listCreator.setAttribute("type","text"); /*para que sea tipo texto*/
	listCreator.setAttribute("placeholder","Añadir una lista"); /*para que diga añadir una lista adentro*/
	listCreator.setAttribute("class","list-creator"); /*dándole clase*/
	divCreator.appendChild(listCreator); /*dándole padre al input de las listas*/

	var buttonCreator = document.createElement('button');/*para crear el botón*/
	buttonCreator.setAttribute("id","buttonCreator");/*para darle id al botón*/
	buttonCreator.setAttribute("type","button");/*para recordarle que es un tipo botón*/		
	
	var textButtonCreator = document.createTextNode("Guardar"); /*creando nodo de texto del botón*/
	buttonCreator.appendChild(textButtonCreator);/*enlazando el texto del botón a su padre botón*/
	divCreator.appendChild(buttonCreator); /*darle al botón guardar el padre div creator*/
	

	buttonCreator.addEventListener("click", function(){ /*llamo al botón creado arriba y le agrego evento*/
		/*tiene que aparecer un div nuevo con el nombre que puso el usuario en el input del html*/
		var listsContainer = document.getElementById("lists-container"); /*para darle un padre al div que tendrá las listas*/
		var lists = document.createElement("div"); /*para guardar cada lista nueva*/
		lists.setAttribute("class","lists"); /*para asignar una clase a cada lista que se cree*/
		listsContainer.appendChild(lists); /*para darle padre a cada lista que se cree*/

		/*crear un título para la lista y rescatarlo del input original al hacer click en guardar*/
		var titleList = document.createElement("p"); /*título de la lista nueva*/
		var textTitleList = document.createTextNode(""); /*creando un nodo de texto vacío*/
		titleList.appendChild(textTitleList); /*para que el nodo texto se una al p*/
		lists.appendChild(titleList); /*para poner el título de la lista dentro del div lista*/
		
		var newTitle = document.getElementsByClassName('list-creator')[0].value;/*acá con .value recupero lo que ingresó el usuario, para luego utilizarlo*/
		document.getElementsByClassName('list-creator')[0].value = "";/*acá le indico que una vez ya rescatado lo ingresado, quede limpio nuevamente mi input*/	
		textTitleList.textContent = newTitle; /*le agrego el texto ingresado en el input original como título de la tarjeta lista*/

		/*creando el elemento pinchable a para que aparezca el textarea*/
		var addCard = document.createElement("a"); /*para que lleve el texto agregar tarjeta*/
		addCard.setAttribute("class","add-card"); /*para darle una clase*/
		addCard.setAttribute("href","#"); /*para que aparezca como link*/

		/*nodo de texto de a*/
		var textAddCard = document.createTextNode("Añadir una tarea...");/*creando nodo texto y su contenido*/
		addCard.appendChild(textAddCard); /*dándole a la a su hijo texto para que diga algo*/
		lists.appendChild(addCard);/*dándole al div su hijo a*/

		/*agregando una función y un evento para que al pinchar desaparezca a y apareza el input*/
		addCard.addEventListener("focus", function(){ /*para que a desaparezca y poder ingresar los elementos textarea y botón agregar*/
			lists.removeChild(addCard); /*para que desaparezca el link a*/
 
 		/*textearea para la lista de tareas*/
			var listHomework = document.createElement("textarea"); /*crear un div para la lista de tareas*/
			listHomework.setAttribute("placeholder","Agrega nueva tarea"); /*dirá agregar tareas*/
			listHomework.setAttribute("class","homeWorkLists")/*clase al textarea para poder llamarlo*/
			lists.appendChild(listHomework); /*le doy al div que contiene las listas creadas el hijo input tareas*/

			/*creando el botón para agregar tareas*/
			var buttonAdd = document.createElement('button');/*para crear el botón*/
			buttonAdd.setAttribute("id","buttonAdd");/*para darle id al botón*/
			buttonAdd.setAttribute("type","button");/*para recordarle que es un tipo botón*/	

			/*creando su nodo de texto para que diga añadir*/
			var textButtonAdd = document.createTextNode("Añadir"); /*creando nodo de texto del botón*/
			buttonAdd.appendChild(textButtonAdd);/*enlazando el texto del botón a su padre botón*/
			lists.appendChild(buttonAdd); /*darle al botón guardar el padre div lists*/

			/*función para que al hacer click en añadir aparezca la nueva tarea*/
			buttonAdd.addEventListener("click", function(){ /*al dar click sobre el botón añadir*/
				var homeWork = document.createElement("p");/*para mostrar la nueva tarea*/
				homeWork.setAttribute("class","homeWorkCard")
				var textHomeWork = document.createTextNode("");
				homeWork.appendChild(textHomeWork); /*para darle el nodo texto al párrafo de la tarea*/
				lists.appendChild(homeWork); /*agregando la tarea al div lists*/

				var newHomeWork = document.getElementsByClassName("homeWorkLists")[0].value; /*acá con .value recupero lo que ingresó el usuario, para luego utilizarlo*/
				document.getElementsByClassName("homeWorkLists")[0].value = ""; /*acá le indico que una vez ya rescatado lo ingresado, quede limpio nuevamente mi textarea*/
				textHomeWork.textContent = newHomeWork; /*le agrego el texto ingresado en el textarea como tarea de la lista*/
				lists.insertBefore(homeWork,listHomework); /*para que la nueva tarea quede siempre justo antes de el textarea*/
			})
	
		})
	})
})
			


/*necesito desactivar el focus para que dejen de aparecer botones guardar*/