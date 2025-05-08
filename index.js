let soma = 0;
let i = 0;
let input = 0;

do {
    input = parseFloat(prompt(`Insira a sua nota ${i+1}.`));
    if (input > 10 || isNaN(input)) {
        alert("Você inseriu um valor inválido. Tente inserir um número racional, entre 0 e 10")
    } else if (input < 0) {
        alert("Você optou por parar com as somas da nota de suas provas.")
    } else {
        i = i + 1;
        soma = soma + input;
    }
} while (input > 0 || isNaN(input))

alert(`A médias das suas ${(i)} notas foi de ${(soma / (i)).toFixed(2)}`);