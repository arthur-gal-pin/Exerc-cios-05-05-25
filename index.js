let nome = "";
let sobrenome = "";

alert("Olá! Seja bem-vindo ao sistema de credenciamento.");
do {
    nome = (prompt(`Por favor, insira o seu nome:`));
    if (!(isNaN(nome)) || nome === "") {
        alert("Você inseriu uma solicitação inválida. Por favor, insira seu nome novamente.");
    } else {
        sobrenome = (prompt(`Por favor, insira o seu sobrenome:`));
        if (!(isNaN(sobrenome)) || sobrenome === "") {
            alert("Você inseriu uma solicitação inválida. Por favor, insira seu sobrenome novamente.");
        }
    }
} while (nome == "" && sobrenome == "" || !(isNaN(nome)) || !(isNaN(sobrenome)))

alert(`Seja bem-vindo, ${nome} ${sobrenome}.`)