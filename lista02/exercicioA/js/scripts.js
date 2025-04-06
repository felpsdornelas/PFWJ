window.addEventListener("DOMContentLoaded", () => {

     var somaIdadesArray = document.getElementById("somaIdadesArray");
     var mediaAritmeticaArray = document.getElementById("mediaAritmeticaArray");
     var maiorIdadeArray = document.getElementById("maiorIdadeArray");
     var idadesImparesArray = document.getElementById("idadesImparesArray");
     var maioridadeArray = document.getElementById("maioridadeArray");
     var numeroUsuario = document.getElementById("numeroUsuario");
     var btnNumeroUsuario = document.getElementById("btnNumeroUsuario");
     var numeroUsuarioArray = document.getElementById("numeroUsuarioArray");

     var idadeUsuario = document.getElementById("idadeUsuario");
     var btnIdadeUsuario = document.getElementById("btnIdadeUsuario");
     var numeroIdadeArray = document.getElementById("numeroIdadeArray");

     // Criação do vetor de idades     
     const vetIdade = [15, 20, 21, 22, 30]; 

     // Exercício A - Somar todas as idades (Utilizando reduce)
     
     const somaIdades = vetIdade.reduce((valorAnterior, valorAtual) => {
          const soma = valorAnterior + valorAtual;
          return soma;
     }, 0);

     somaIdadesArray.textContent = somaIdades;

     console.log(somaIdades);

     // Exercício B - Média aritmética
     
     mediaAritmeticaArray.textContent = somaIdades / vetIdade.length;

     // Exercício C - Maior Idade

     const maiorIdade = vetIdade.reduce((valorAnterior, valorAtual) => Math.max(valorAnterior, valorAtual));

     maiorIdadeArray.textContent = maiorIdade;

     // Exercício D - As idades ímpares

     const idadesImpares = vetIdade.filter(idade => idade % 2 == 1);
     idadesImparesArray.textContent = idadesImpares;

     // Exercício E - Maioridade (true ou false)
     const maioridadeBoolean = vetIdade.every(idade => idade >= 18);
     maioridadeArray.textContent = maioridadeBoolean;

     // Exercício F - Todas as idades são maiores ou iguais a um valor informado pelo usuário?
     btnNumeroUsuario.addEventListener("click", () => {

          var padrao = /^\d+$/; 

          if (!padrao.test(numeroUsuario.value)){
               alert("É necessário que seja um número");
          } 
          else {
               const verificaNumeroUsuario = vetIdade.every(idade => idade >= numeroUsuario.value);
               numeroUsuarioArray.textContent = verificaNumeroUsuario;
          }
     });

     // Exercício G - Exibir todas as idades maiores ou iguais a determinada idade;
     btnIdadeUsuario.addEventListener("click", () => {

          var padrao = /^\d+$/; 

          if (!padrao.test(idadeUsuario.value)) {
               alert("É necessário que seja um número");
          } 
          else {
               const verificaIdadeUsuario = vetIdade.filter (idade => idade >= idadeUsuario.value);  
               numeroIdadeArray.textContent = verificaIdadeUsuario;
          }
     });

});  