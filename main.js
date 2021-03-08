//#region palindromo
function startPalindroma() {
	if (isPalindroma(document.getElementById("textPalindroma").value)) {
		console.log();
		document.getElementById("notPalindroma").innerHTML = "Questa parola è palindroma"
	}
	else{
		document.getElementById("notPalindroma").innerHTML = "Questa parola è non palindroma"
	}
}
function isPalindroma(parola) {
	return parola == parola.split("").reverse().join("");
}
//#endregion

//#region paridispari
function startPariDispari() {
	var somma = insertNumber("textNumero") + random(1, 5);
	document.getElementById("somma").innerHTML = "il risultato è "+ somma +" quindi hai "
	if (!(somma%2) && document.getElementById("radioPari").checked || somma%2 && document.getElementById("radioDispari").checked) {
		//caso di vincita
		document.getElementById("result").innerHTML = "vinto"
	}
	else{
		//caso di perdita
		document.getElementById("result").innerHTML = "perso"
	}
}
function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function insertNumber(hello) {
	return parseInt(document.getElementById(hello).value)
}
//#endregion