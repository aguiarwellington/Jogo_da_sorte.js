//selecionar o que eu quero pegar no html 
//var titulo = document.querySelector('H1');

//titulo.innerHTML = 'Jogo do número secreto';

let tentativas = 1;
let numeroSecreto = geraNumeroAleatorio();



function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;

}


function exibirMensagem(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p',  'Escolha um número entre 1 e 10');
};

exibirMensagem();




function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);

            document.getElementById('new').removeAttribute('disabled');
    } else {
            if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;

           limparCampo();
    }

  
    console.log(numeroSecreto);
}


function geraNumeroAleatorio(){
   return parseInt(Math.random()* 10 + 1); 

}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function novoJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
     tentativas = 1;

    exibirMensagem();

    document.getElementById('new').setAttribute('disabled', true);
}




