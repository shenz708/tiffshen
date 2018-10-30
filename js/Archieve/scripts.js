var megaMenu = $('#overlay'); //grabs the overlay
var ham_layers = $('#ham-layer'); //creates an array of objects that have the class name "ham_layer"
var toggle = false; //creates two states to keep track of when the hamburger menu is clicked.

function toggleHamMenu(){

  if (toggle == false){ //default state
    $('#top_bun').style.top = "11px";
    $('#top_bun').style.transform = "rotate(45deg)";
    $('#meat').style.opacity = "0";
    $('#bottom_bun').style.top = "-11px";
    $('#bottom_bun').style.transform = "rotate(-45deg)";

    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to white.
    for (var i = 0; i < ham_layers.length; i++){
      ham_layers[i].style.backgroundColor = "white";
    }

    toggle = true;
    megaMenu.style.height = "100vw";

  }else{
    //rotates and positions each layer of the hamburger. The "meat" layer reappears too.
    $(#'top_bun').style.transform = "rotate(0deg)";
    $(#'top_bun').style.top = "-0.05px";
    $(#'meat').style.opacity = "100";
    $(#'bottom_bun').style.transform = "rotate(0deg)";
    $(#'bottom_bun').style.top = "0.05px";

    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to "grey".
    for (var i = 0; i < ham_layers.length; i++){
      ham_layers[i].style.backgroundColor = "#333";
    }

    toggle = false;
    megaMenu.style.height = "0vh"; //gives a height of 0 view height, so the user can't see it
  }
}
