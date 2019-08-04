const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Escolha pedra, papel ou tesoura: `, resposta => {
    const opcoes = {
        pedra: 1,
        papel: 2,
        tesoura: 3
    };
    
    const escolhaDoUsuario = opcoes[resposta];
    const escolhaDoComputador = Math.round(Math.random()*2) + 1;

    const resultado = {
        resultadoUsuario: console.log(`Você: ${escolhaDoUsuario}`),
        resultadoComputador: console.log(`Computador: ${escolhaDoComputador}`)
    };

    function exibeResultado(){
        return resultado;
    }

    if(escolhaDoUsuario === 1 && escolhaDoComputador === 3){
        exibeResultado();
        console.log('Você ganhou!');  
    } else if(escolhaDoUsuario === 1 && escolhaDoComputador === 2){
        exibeResultado();
        console.log('Você perdeu!');
    } else if(escolhaDoUsuario === 1 && escolhaDoComputador === 1){
        exibeResultado();
        console.log('Empatou!');
    }

    if(escolhaDoUsuario === 2 && escolhaDoComputador === 1){
        exibeResultado();
        console.log('Você ganhou!');
    } else if(escolhaDoUsuario === 2 && escolhaDoComputador === 3){
        exibeResultado();
        console.log('Você perdeu!');
    } else if(escolhaDoUsuario === 2 && escolhaDoComputador === 2){
        exibeResultado();
        console.log('Empatou!');
    }

    // 1 < 3 > 2
    if(escolhaDoUsuario === 3 && escolhaDoComputador === 2){
        exibeResultado();
        console.log('Você ganhou!');
    } else if(escolhaDoUsuario === 3 && escolhaDoComputador === 1){
        exibeResultado();
        console.log('Você perdeu!');
    } else if(escolhaDoUsuario === 3 && escolhaDoComputador === 3){
        exibeResultado();
        console.log('Empatou!');
    }

    rl.close();

});
