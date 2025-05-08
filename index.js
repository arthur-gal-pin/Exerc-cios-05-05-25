i = 1;
let saldo = ((Math.floor(Math.random() * 10) * Math.floor(Math.random() * 100)) * Math.floor(Math.random() * 100)).toFixed(2);

do {
    alert(saldo);
    saque = (parseFloat(prompt(`Insira um valor para a seu ${i}º saque.`))).toFixed(2);
    if (isNaN(saque)) {
        alert("Você não inseriu um número real. Tente novamente");
    } else if (saque > saldo) {
        alert("Você está tentando sacar um valor maior do que o que você tem de saldo. Tente novamente.");
    } else {
        saldo -= saque;
        i ++;
        alert(`Você conseguiu fazer o saque de R$${saque}.`);
    }
} while (saldo !== 0 || isNaN(saque))
alert("Você sacou todo o dinheiro de sua conta.")