let soma = 0;
let i = 1;
let input = 0;

do {
    input = parseFloat(prompt(`Insira a sua nota ${i}.`));
    if (input > 10 || isNaN(input)) {
        alert("Você inseriu um valor inválido. Tente inserir um número real, entre 0 e 10")
    } else if (input < 0) {
        alert("Você optou por parar com as somas da nota de suas provas.")
    } else {
        i = i + 1;
        soma = soma + input;
    }
} while (input > 0 || isNaN(input))

alert(`A médias das suas ${(i - 2)} notas foi de ${(soma / (i - 1)).toFixed(2)}`);