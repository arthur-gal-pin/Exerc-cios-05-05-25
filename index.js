let numU;

do {
    numU = prompt("Digite um número positivo:"); //Variável é um número, que precisa ser positivo.

    if (numU <= 0 || isNaN(numU)) { //Condição que verfica se o input é válido.
        alert("Você inseriu um valor inválido.");
    }
} while (numU <= 0 || isNaN(numU)) //Repete a condição até o usuário inserir um número positivo.

alert(`Você inseriu o número positivo ${numU}.`); //Retorna o número digitado.
