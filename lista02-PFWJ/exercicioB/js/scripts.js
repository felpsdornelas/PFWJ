window.addEventListener("DOMContentLoaded", function(){

     var maioridade = document.getElementById("maioridade");
     var funcionariosMasculinos = document.getElementById("funcionariosMasculinos");
     var maiorSalario = document.getElementById("maiorSalario");
     var mulherSalario = document.getElementById("mulherSalario");
     var mediaSalarioMasc = document.getElementById("mediaSalarioMasc");
     var mediaSalarioFem = document.getElementById("mediaSalarioFem");

     const vetFuncionarios = [
                        {nome: "Ana", idade: 18, sexo: "F", salario: 1000},
                        {nome: "João", idade: 20, sexo: "M", salario: 3000},
                        {nome: "César", idade: 33, sexo: "M", salario: 1900},
                        {nome: "Maria", idade: 12, sexo: "F", salario: 7000},
                        {nome: "Zé", idade: 17, sexo: "M", salario: 2400}
     ];

     // Nome e idade de todos o maiores de idade;
     const usuariosMaioridade = vetFuncionarios.filter(idadeFunc => idadeFunc.idade >= 18);
     maioridade.innerHTML = usuariosMaioridade.map(funcionario => `Nome: ${funcionario.nome} Idade: ${funcionario.idade}`).join("<br>");

     // Nome dos usuários masculinos;
     const usuariosMasculinos = vetFuncionarios.filter(funcionarios => funcionarios.sexo == "M");
     funcionariosMasculinos.innerHTML = usuariosMasculinos.map(funcionario => `Nome: ${funcionario.nome}`).join("<br>");

     // Dados da pessoa com o maior salario; 

     const usuarioComMaiorSalario = vetFuncionarios.reduce((valorInicial, valorAtual) => {
          return valorAtual.salario >= valorInicial.salario ? valorAtual : valorInicial; // Isso me retornou um objeto e não um array
     });
     maiorSalario.textContent = `Nome: ${usuarioComMaiorSalario.nome} / Idade: ${usuarioComMaiorSalario.idade} / Sexo: ${usuarioComMaiorSalario.sexo} / Salario: ${usuarioComMaiorSalario.salario}` ;

     // Há alguma mulher que ganha acima de 5000? 

     const mulherArray = vetFuncionarios.filter(funcionario => funcionario.sexo == "F").some(funcionario => funcionario.salario > 5000);
     mulherSalario.innerHTML = mulherArray

     // Média dos salarios dos homens e das mulheres? 

     // HOMENS 
     const homensArray = vetFuncionarios.filter(funcionario => funcionario.sexo == "M");

     const totalSalarioMasc = homensArray.reduce((valorInicial, valorAtual) => {
          // var somaMasc = 0;
          return somaMasc = valorInicial + valorAtual.salario;
     }, 0);

     var mediaSalarioMasc1 = totalSalarioMasc / homensArray.length;

     //MULHERES
     const mulheresArray = vetFuncionarios.filter(funcionario => funcionario.sexo == "F");

     const totalSalarioFem = mulheresArray.reduce((valorInicial, valorAtual) => {
          // var somaFem = 0;
          return somaFem = valorInicial + valorAtual.salario;
     }, 0);
     
     var mediaSalarioFem1 = totalSalarioFem / mulheresArray.length;

     mediaSalarioMasc.textContent = `Média do sálario masculino: R$ ${mediaSalarioMasc1.toFixed(2)}`;
     mediaSalarioFem.textContent = `Média do sálario masculino: R$ ${mediaSalarioFem1.toFixed(2)}`;
});


