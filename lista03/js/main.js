import {requestFetch} from "./manager.js";    

window.addEventListener("DOMContentLoaded", () => {
     var optSelect = document.getElementById("optSelect");
     var exibir = document.getElementById("exibir");

     optSelect.addEventListener("change", () => {
          const selectValue = optSelect.value;

          switch (selectValue) {
               case "all":
                    requestFetch(allStudents);              
                    break;
          
               default:
                    break;
          }
     });

     const allStudents = (students) => {
          exibir.textContent = "";  // Limpar a área de exibição
               students.forEach(user => {
                    const studentInfo = document.createElement("div");

                    const nome = document.createElement("p");  // Cria um elemento para o nome
                    nome.textContent = `Nome: ${user.nome}`;  // Adiciona o nome do usuário ao conteúdo

                    const notaBim1 = document.createElement("p");  // Cria um elemento para o nome
                    notaBim1.textContent = `(1 bimestre: ${user.notaBim1})`;  // Adiciona o nome do usuário ao conteúdo



                    studentInfo.appendChild(nome);  // Adiciona o nome ao elemento "exibir"
                    studentInfo.appendChild(notaBim1);  // Adiciona o nome ao elemento "exibir"

                    exibir.appendChild(studentInfo);
          });
     };

});