var megaMenu = document.getElementById("overlay");
var ham_layers = document.getElementsByClassName("ham-layer");
var toggle = false; 

function toggleHamMenu(){
	if(toggle == false){
		document.getElementById("top_bun").style.top = "11px";
		document.getElementById("top_bun").style.transform = "rotate(45deg)";
       
       	document.getElementById("meat").style.opacity = "0";

		document.getElementById("bottom_bun").style.top = "-11px";
		document.getElementById("bottom_bun").style.transform = "rotate(-45deg)";

		for(var i = 0; i < ham_layers.length; i++){
			ham_layers[i].style.backgroundColor = "white";
		}

		toggle = true;
		megaMenu.style.height = "100vw";

	}else{

		document.getElementById("top_bun").style.transform = "rotate(0deg)";
	    document.getElementById("top_bun").style.top = "-0.05px";

	    document.getElementById("meat").style.opacity = "100";

	    document.getElementById("bottom_bun").style.transform = "rotate(0deg)";
		document.getElementById("bottom_bun").style.top = "0.05px";

		for(var i = 0; i < ham_layers.length; i++){
			ham_layers[i].style.backgroundColor = "#333";
		}

		toggle = false;
		megaMenu.style.height = "0vh";
	}

}