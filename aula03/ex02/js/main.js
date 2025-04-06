window.addEventListener("DOMContentLoaded", () => {

     const vet = [10, 20, 30];

     // var a = vet[0];
     // var b = vet[1];
     // var c = vet[1];

     // Como utilizar a atribuição acima utilizando o recurso SPREAD do JavaScript? 

     [a, b, c] = [...vet]
     console.log(a, b, c);  

     console.log(Math.max(...vet));

     // Exemplos com objetos:

     const pessoa1 = {nome: "Felipe", idade: 20};

     const pessoa2 = {...pessoa1};
     console.log(pessoa2);

     const pessoa3 = {...pessoa1, sexo:"M"};
     console.log(pessoa3);

     const pessoa4 = {...pessoa3, idade:21};
     console.log(pessoa4);

});