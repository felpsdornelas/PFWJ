import usuarios from "./users.js";
import {mostrarTodosUsuarios, mostrarGeneroUsuario} from "./managerUsers.js"; // Nomeada é necessário estar dentro de chaves
// import managerUsers from "./managerUsers.js"; 

window.addEventListener("DOMContentLoaded", function() {
     mostrarTodosUsuarios(usuarios);
     mostrarGeneroUsuario(usuarios, "M")
});

