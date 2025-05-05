let numU;

do {
    numU = parseInt(prompt("Digite um número:"));
    if (numU < 0 || isNaN(numU)) {
        alert("Você inseriu um valor inválido.");
    }
} while (numU < 0 || isNaN(numU))