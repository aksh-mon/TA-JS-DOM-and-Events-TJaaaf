document.addEventListener("DOMContentLoaded", function() {
	var colorInput = document.createElement("input");
    colorInput.classList.add("input")
	colorInput.type = "color";
	
	colorInput.addEventListener("change", function() {
		console.log(this.value);
        document.getElementById("color-picker").style.backgroundColor = this.value;
    
	});
	
	document.getElementById("color-picker").appendChild(colorInput);
});
