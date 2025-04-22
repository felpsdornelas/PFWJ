
const requisicaoXhr = link => {

     const xhr = new XMLHttpRequest(); 

     xhr.open("GET", link, true);
     xhr.onload = function() {
          if (xhr.status === 200) {
               const dados = JSON.parse(xhr.responseText);
               console.log("Dados recebidos por XRH:", dados);
          }    
     };
     xhr.send();
}

const requisicaoFetch = () => {
     fetch("https://felpsdornelas.github.io/PFWJ/user.json")
     .then(resposta => resposta.json())
     .then( dados => 
          console.log("Dados recebidos por fetch:", dados));
}

export {requisicaoFetch, requisicaoXhr}
