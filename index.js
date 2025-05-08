let valor = 0;
let i = 0;
let input = 0;

alert("Olá! Seja bem-vindo ao sistema de cálculo de compras online.")
do {
    input = parseFloat(prompt(`Insira o valor do seu ${i+1}º produto.`));
    if (isNaN(input) || input < 0) {
        alert("Você inseriu um valor inválido. Tente inserir um número real positivo.")
    } else if (input === 0) {
        alert("Você optou por parar com as somas das suas compras.")
    } else {
        i = i + 1;
        valor = valor + input;
    }
} while (input > 0 || isNaN(input))

alert(`A médias das suas ${i} compras foi de R$${valor}`);