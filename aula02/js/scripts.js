window.addEventListener("DOMContentLoaded", function(){

     // EXEMPLO 1 UTILIZANDO FOR EACHz
     
     const maiorValor = (a, b) => (a > b) ? a : b;

     const VET = [10, 5, 78, 21, 33];
     const REF = 20;

     const vetInteiro = (vetor, valor) => {
          var vetMaior = [];
          for (i = 0; i < vetor.length; i++) {
               if(vetor[i] >= valor){
                    vetMaior.push(vetor[i]);
               }               
          } 
          return vetMaior;
     };

     const imprimirVet = (vet) => {
          vet.forEach((valor, index) => console.log(index, valor));
     }

     imprimirVet(vetInteiro(VET, REF));

     console.log("-------------------------------");
     // ---------------------------------------------

     // EXEMPLO 2 UTILIZANDO ARRAY MAP

     const VET1 = [10, 20, 30];

     console.log(VET1.map(valor => (valor * 2)));

     console.log("-------------------------------");
     // ---------------------------------------------

     // EXEMPLO 3 UTILIZANDO FILTER

     const VET2 = [10, 20, 30, 15];

     console.log(VET2.filter(VET2 => VET2 >= 15));

     console.log("-------------------------------");
     // ---------------------------------------------

     // EXEMPLO 4 UTILIZANDO EVERY

     const VET3 = [10, 20, 30, 15];

     console.log(VET3.every(VET3 => VET3 >= 15)); // Todos os valores do meu vetor é maior ou igual a 15? false

     console.log("-------------------------------");
     // ---------------------------------------------

     // EXEMPLO 5 UTILIZANDO SOME

     const VET4 = [10, 20, 30, 15];

     console.log(VET4.some(VET4 => VET4 >= 15)); // Tem pelo menos um maior ou igual a 15? True

     console.log("-------------------------------");
     // ---------------------------------------------

     // EXEMPLO 6 UTILIZANDO REDUCE

     const VET5 = [10, 20, 30];

     soma = 0;
     console.log(VET5.reduce((soma,valor) => soma += valor, 10)); 


});