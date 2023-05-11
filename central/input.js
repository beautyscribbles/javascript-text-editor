onload = function () 

{

	    var statements = document.getElementsByTagName("textarea")[0];

	    var submit = document.getElementsByTagName("button")[0];

	    var fontSize = document.getElementById("set-size");

	    var fontColor = document.getElementById("set-color");

	    var theme = document.getElementById("set-theme");

	    var settings = document.getElementById("settings");

	    var settingsButton = document.getElementById("settings-button");



//Send Code to Eval
submit.onclick = function () { 
eval( "" + statements.value + "" ) 
}

// Change Font Size
fontSize.onchange = function () {
statements.style.fontSize = fontSize.value;
}

// Change Font Color
fontColor.onchange = function () {
statements.style.color = fontColor.value;
}


theme.onchange = function () {
statements.style.backgroundColor = theme.value;
}
                                                                     // Toggle Settings
settingsButton.onclick = function () {
if (settings.className == "hide")
settings.className = "show";
else
	//
	//                                                                                                                         settings.className = "hide";
	//
	//
	//
	//                                                                                                                                 if (this.className == "fa fa-cog rotateoff") 
	//
	//                                                                                                                                             this.className = "fa fa-cog rotateon";
	//
	//                                                                                                                                                     else 
	//
	//                                                                                                                                                                 this.className = "fa fa-cog rotateoff";
	//
	//                                                                                                                                                                     }
	//
	//
	//
	//                                                                                                                                                                     }
