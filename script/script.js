function gerarValor() {
	const valorGerado = Math.floor(Math.random() * (10 - 0));
	console.log("Novo valor: ", valorGerado); //Apenas para teste

	return valorGerado;
}

function resetar() {
	tentativas = 3;
	valorCorreto = gerarValor();
	
	document.getElementById("valor").disabled = false; 
	document.getElementById("botaoChutar").disabled = false;
	
	document.getElementById("resultado__tentativas").innerHTML = `Tentativas restantes: ${tentativas}`;
	document.getElementById("resultado__texto").innerHTML = "";
	document.getElementById("resultado__texto--alerta").innerHTML = "Jogo resetado.";
}

function chutar() {
	const valorChute = parseInt(document.getElementById("valor").value);

	if (valorChute < 0 || valorChute > 10 || isNaN(valorChute)) {
		document.getElementById("resultado__texto").innerHTML = `Você deve digitar um valor de 0 a 10!`;
	} 
	else if (valorChute == valorCorreto) {
		document.getElementById("resultado__texto").innerHTML = `Você acertou o valor!! Era ${valorCorreto}`;

		valorCorreto = gerarValor();
	}
	else {
		tentativas--;

		document.getElementById("resultado__tentativas").innerHTML = `Tentativas restantes: ${tentativas}`;

		if (tentativas == 0) {
		document.getElementById("valor").disabled = true; 
		document.getElementById("botaoChutar").disabled = true;
		document.getElementById("resultado__texto--alerta").innerHTML = `Clique em "resetar" para reiniciar.`;
		}
		
		if (valorChute < valorCorreto) {
			document.getElementById("resultado__texto").innerHTML = `Você errou. O valor correto é maior!`;
		} 
		else if (valorChute > valorCorreto) {
			document.getElementById("resultado__texto").innerHTML = `Você errou. O valor correto é menor!`;
		}
	}
}

let valorCorreto = gerarValor();
let tentativas = 3;
