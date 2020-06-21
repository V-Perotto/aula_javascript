var nome = "Vittorio Perotto";
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var fruta = {nome: "maça", cor:"vermelha"}
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]

var lista = ["maçã", "pera", "mamão"];

//alert( nome + " tem " + idade);
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);

// mudar a string ou etc de uma variavel --> (antiga, nova):
console.log(frase.replace("Japão", "Brasil"));

console.log(frase.toUpperCase());
console.log(lista[1]);

// colocar novo item e mostrar:
lista.push("uva");
console.log(lista);

// retirar item e mostrar:
lista.pop("uva");
console.log();

// ver tamanho da lista:
console.log(lista.length);

// trazer elementos ao contrário
console.log(lista.reverse());

// trazer elementos de array para string:
console.log(lista.toString());

// primeiro elemento da string:
console.log(lista.toString()[0]);

// transformar em string e colocar o que quiser como divisão:
console.log(lista.join(" - "));

// dicionario
console.log(fruta.nome);
alert(fruta.cor);

console.log(frutas);
alert(frutas[1].nome);