window.addEventListener("DOMContentLoaded", () => {

     const vet = [10, 20, 30]; 

     const [a, b, c] = vet;

     // Destruturação utilizando obejtos 

     const usuario1 = {
          nome: "Felipe", 
          idade: 20
     };

     const {nome: nomeUsuario} = usuario1;
     console.log(nomeUsuario);




});