let nome = "";
let sobrenome = "";

alert("Olá! Seja bem-vindo ao sistema de credenciamento.");
do {
    nome = (prompt(`Por favor, insira o seu nome:`));
    if (!(isNaN(nome)) || nome === "") { //Se o input for um número ou vazio, não armazenará a variável.
        alert("Você inseriu uma solicitação inválida. Por favor, insira seu nome novamente.");
    } else {
        sobrenome = (prompt(`Por favor, insira o seu sobrenome:`));
        if (!(isNaN(sobrenome)) || sobrenome === "") { //Se o input for um número ou vazio, não armazenará a variável.
            alert("Você inseriu uma solicitação inválida. Por favor, insira seu sobrenome novamente.");
        }
    }
} while (nome == "" && sobrenome == "" || !(isNaN(nome)) || !(isNaN(sobrenome))) //O loop continuará enquanto as variáveis forem vazias ou o nome ou sobrenome forem um número.

alert(`Seja bem-vindo, ${nome} ${sobrenome}.`);