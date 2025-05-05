import getCats from "./thecatapi.js";

window.addEventListener("DOMContentLoaded", () => {

     const btnShowCats = document.getElementById("btnShowCats");
     const painelCats = document.getElementById("painelCats");
     const msgWarning = document.getElementById("msgWarning");

     btnShowCats.addEventListener("click", () => {
          showCats();
     })
})

const showCats = async () => {
     showMsgAlerta("Processando... Aguarde");
     const vetCats = await getCats();
     //Tem gato para exibir
     if (vetCats.length > 0) {
          vetCats.forEach(cat => { // ForEach para aparecer mais que um vetor
               const img = document.createElement("img"); // Cria um elemento dinâmico img
               const parag = document.createElement("p"); // Cria um elemento dinâmico paragrafo
               img.src = cat.url; // Adiciona ao elemento dinâmico o objeto gato, porém a sua URL
               parag.src = cat.breeds[0].name; // Adiciona ao elemento dinâmico o objeto gato, porém a sua URL
               img.className = "cat"; // Adiciona um class, utilizado mais no CSS
               painelCats.appendChild(img) // Adiciona à DIV o elemento dinâmico IMG
               painelCats.appendChild(parag) // Adiciona à DIV o elemento dinâmico IMG
               showMsgAlerta(""); 
          });
     }
     // Não tem gato para exibir
     else {
          showMsgAlerta("Erro no carragamento dos gatos");
     }
}

const showMsgAlerta = (msg) => {
     msgWarning.innerHTML = msg;
}