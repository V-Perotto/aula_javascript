// prompt é usado para pergunta em pop-up ou senha, etc;
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("maior de idade");
}

else {
    alert("menor de idade");
};


// laços de repetição while e for

// while

var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    //count = count + 1; = count++
    count++;
};


// for

var aux;
for(aux=0; aux <=5; aux++){
    alert(aux);
};