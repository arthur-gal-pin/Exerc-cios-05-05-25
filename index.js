i = 1; //Variável que conta o número de saques já realizados (Mínimo 1.).
let saldo = ((Math.floor(Math.random() * 10) * Math.floor(Math.random() * 100)) * Math.floor(Math.random() * 100)).toFixed(2); //Variável que armazena o saldo da conta.

do {
    saque = (parseFloat(prompt(`Insira um valor para a seu ${i}º saque.`))).toFixed(2); //O sauqe, que será reduzido do saldo.
    if (isNaN(saque)) {
        alert("Você não inseriu um número real. Tente novamente"); //Caso não seja um número, não executará nenhum código.
    } else if (saque > saldo) {
        alert("Você está tentando sacar um valor maior do que o que você tem de saldo. Tente novamente."); //Caso o saque for maior que o saldo, não deixará esse saque acontecer.
    } else {
        saldo -= saque;
        i ++;
        alert(`Você conseguiu fazer o saque de R$${saque}.`);
    }
} while (saldo !== 0 || isNaN(saque)) //Enquanto o saldo ainda seja diferente de 0 ou o saque não seja um número, ele continua o looping
alert("Você sacou todo o dinheiro de sua conta.");