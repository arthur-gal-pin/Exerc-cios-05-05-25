let valor = 0; //Armazena o valor total das compras.
let i = 0; //Armazena o número de compras.
let input = 0; //Recebe o valor de uma compra individual.

alert("Olá! Seja bem-vindo ao sistema de cálculo de compras online.");
do {
    input = parseFloat(prompt(`Insira o valor do seu ${i+1}º produto.`));
    if (isNaN(input) || input < 0) { //O input só aceita números que são maiores que 0.
        alert("Você inseriu um valor inválido. Tente inserir um número real positivo.");
    } else if (input === 0) {
        alert("Você optou por parar com as somas das suas compras."); //Ao digitar o número 0, o código para.
    } else {
        i ++;
        valor += input; //Valor total das compras é o valor anterior das compras mais o valor daquele produto em individual.
    }
} while (input > 0 || isNaN(input))

alert(`A médias das suas ${i} compras foi de R$${valor}`);