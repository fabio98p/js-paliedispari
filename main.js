//#region palindromo
function startPalindroma() {
	if (isPalindroma(document.getElementById("textPalindroma").value)) {
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

function startPariDispari() {

	var myNumber = parseInt(document.getElementById("textNumero").value)
	var computerNumber = random(1, 5);
	var somma = myNumber + computerNumber

	if (!(somma%2) && document.getElementById("radioPari").checked || somma%2 && document.getElementById("radioDispari").checked) {
		//caso di vincita
		console.log("tu hai vinto");
		console.log(somma);
	}
	else{
		//caso di perdita
		console.log("tu hai perso");
		console.log(somma);
	}
}
function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}