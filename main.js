//#region palindromo
function startPalindroma() {
	if (isPalindroma(document.getElementById("text").value)) {
		document.getElementById("notPalindroma").innerHTML = "Questa parola è palindroma"
	}
	else{
		document.getElementById("notPalindroma").innerHTML = "Questa parola è non palindroma"
	}
}
function isPalindroma(parola) {
	return parola = parola.split("").reverse().join("");
}
//#endregion

function startParidispari() {
	
}