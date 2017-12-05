

function pressed(){
    var subs = document.getElementById("subscribeButton"); 
	
	if(subs.classList.contains('button_red')){
		subs.classList.remove("button_red");
		subs.classList.add("button_pressed");
		subs.innerHTML = "Subscribed";
		
	}else{
		subs.classList.remove("button_pressed");
		subs.classList.add("button_red");
		subs.innerHTML = "Subscribe";	
	}
}


function add_rmSub(){
		
	var x = document.getElementById("num_subs");
	var y ;
		
	if(document.getElementById("subscribeButton").classList.contains('button_red')){
		y = parseInt(x.textContent) + 1;
		/* Converting again into string */
		x = y + "";
	}else{
		y = parseInt(x.textContent) - 1;
		/* Converting again into string */
		x = y + "";
	}
		/* Fill again the original div with the updated value */
		document.getElementById("num_subs").innerHTML = x;
}





function add_rmSub(){
		
	var x = document.getElementById("num_subs");
	var y ;
		
	if(document.getElementById("subscribeButton").classList.contains('button_red')){
		y = parseInt(x.textContent) + 1;
		/* Converting again into string */
		x = y + "";
	}else{
		y = parseInt(x.textContent) - 1;
		/* Converting again into string */
		x = y + "";
	}
		/* Fill again the original div with the updated value */
		document.getElementById("num_subs").innerHTML = x;
}


function show_desc(){
    var info= document.getElementById("desc");
	var tag = document.getElementById("showDesc"); 	
	
	$("#desc").slideToggle("fast");
	
	if(tag.innerHTML == "SHOW MORE")
		tag.innerHTML = "SHOW LESS";
	else
		tag.innerHTML = "SHOW MORE";
}

/*
$( function() {
	$('#user_chat').ChatSocket({
	Room:"RoomDeveloteca", // important  - room or user
	pass:"1234", // important - pass of room or user
	lblTitulChat:" Chat Develoteca.com ", //Chat Name
	lblCampoEntrada:"Menssage",
	lblEnviar:"Send",
	textoAyuda:"Develoteca", // Help button
	Nombre:"Anónimo", // default Name.
	urlImg:"http://placehold.it/50/55C1E7/fff&text=U", // Avatar chat
	btnEntrar:"btnEntrar",
	btnEnviar:"btnEnviar",
	lblBtnEnviar:"Enviar",
	lblTxtEntrar:"txtEntrar",
	lblTxtEnviar:"txtMensaje",
	lblBtnEntrar:"Enter",  // Joined button
	idDialogo:"DialogoEntrada",
	classChat:"",  // add class chat
	idOnline:"ListaOnline", // id control users joined
	lblUsuariosOnline:"Users joined", // text users online
	lblEntradaNombre:"Name:",
	panelColor:"success"
	});
});
 */   