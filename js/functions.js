function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

// Replace
function setReplace(frase, nome, novo_nome){
    return frase.replase(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));


// Validar idade
//var validar; <-- global

function validaIdade(idade){
    var validar; // local
    if (idade >= 18){
        validar = true
    }
    else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));