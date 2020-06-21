function botao() {
    // realiza uma função caso um elemento receba um ID com o respectivo nome
    // no caso abaixo, ele irá injetar um texto:
    // <b> = negrito;
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar");
}

function redirect() {
    // nova janela
    window.open("https://lp.treinaweb.com.br/python/aula1");
    
    // mesma aba
    window.location.href = "https://lp.treinaweb.com.br/python/aula1";
}

function trocar(elemento) {
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse";
    // mais pratico do que o de cima, e totalmente utilitario para um elemento em especifico.
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}