window.addEventListener("DOMContentLoaded", function(){

     const vetFuncionarios = [{nome: "Ana", idade: 18, genero: "F", salario: 1000},
                        {nome: "João", idade: 20, genero: "M", salario: 3000},
                        {nome: "César", idade: 33, genero: "M", salario: 1900},
                        {nome: "Maria", idade: 12, genero: "F", salario: 7000},
                        {nome: "Zé", idade: 17, genero: "M", salario: 2400}];

     // Nome e idade de todos o maiores de idade;
     vetFuncionarios.filter (vetFuncionarios => {
          if(vetFuncionarios.idade >= 18) 
               return console.log(`Nome: ${vetFuncionarios.nome} Idade: ${vetFuncionarios.idade}`);
     });

     console.log("-------------------------------------------------");
     
     // Nome de todas as pessoas do sexo MASCULINO;
     vetFuncionarios.filter(vetFuncionarios => {
          if(vetFuncionarios.genero == "M")
          return console.log(`Nome: ${vetFuncionarios.nome}`);
     });
     
     console.log("-------------------------------------------------");


     console.log(vetFuncionarios.filter(vetFuncionarios => vetFuncionarios.salario == Math.max(vetFuncionarios.salario)));

     // Há alguma mulher que ganha acima de 5000? 
     console.log("Há alguma mulher que ganha acima de 5000?")
     console.log(vetFuncionarios.some(vetFuncionarios => vetFuncionarios.salario > 5000));
});