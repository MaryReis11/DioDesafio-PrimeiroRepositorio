
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criarMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {

	criarMoscaTempo = 1500
}else if (nivel === 'dificil'){

	criarMoscaTempo = 1000
}else if (nivel === 'chucknoris') {

	criarMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo(){

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}
	ajustaTamanhoPalcoJogo()

	var cronomentro = setInterval(function(){

		tempo -= 1
		if (tempo < 0) {
			clearInterval(cronomentro)
			clearInterval(criarMosca)
			window.location.href = 'vitoria.html'
		}else{
			document.getElementById('cronomentro').innerHTML = tempo
		}
	}, 1000)

	function posicaoRondomica() {

	//remover o mosca(caso exista)
	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove()

		//console.log('Elemento selecionado foi: v' + vidas)
		if (vidas > 3 ) {

			window.location.href = 'fim_jogo.html'

		}else{
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

		vidas++
	}
   }
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	console.log(posicaoX, posicaoY)

//criar elemento html
	var mosca = document.createElement('img')

	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosca)

}
//tamanho aleatorio de mosca
	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() *3)

		switch(classe){
			case 0:
				return 'mosquito1'
			case 1:
				return 'mosquito2'
			case 2:
				return 'mosquito3'
		}
	}
	
//lado aleatorio mosca
	function ladoAleatorio() {
		var classe = Math.floor(Math.random() * 2)

		switch(classe){
			case 0:
				return 'ladoA'
			case 1:
				return 'ladoB'
		}
	}