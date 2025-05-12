let soma = 0; //Representa a soma de todas as notas inseridas pelo usuário.
let i = 0; //Conta a quantidade de notas já inseridas, para calcular a média posteriormente.
let input = 0; //Nota inserida pelo aluno no código.

do {
    input = (prompt(`Insira a sua nota ${i+1}. Use ponto para expressar as vírgulas.`)); //Recebe o input
    if (input > 10 || isNaN(input)) {
        alert("Você inseriu um valor inválido. Tente inserir um número racional, entre 0 e 10."); //Verifica a validade do input.
    } else if (input < 0) {
        alert("Você optou por parar com as somas da nota de suas provas."); //Verifica e anuncia o fim do programa.
    } else {
        input = parseFloat(input);
        i ++;
        soma += input; //Realiza a soma das notas.
        console.log(soma, i)
    }
} while (input > 0 || isNaN(input))

alert(`A médias das suas ${(i)} notas foi de ${(soma / (i)).toFixed(2)}`); //Devolve o output, e realiza o cálculo das médias.