
const mostrarTodosUsuarios = (usuarios) => {
     usuarios.forEach(usuario => console.log(usuario.nome));
};

const mostrarGeneroUsuario = (usuarios, generos) => {
     usuarios
         .filter(usuarios => usuarios.sexo == generos)
         .forEach(usuarios => console.log(usuarios.nome));
 }

//  // Importação padrão
// const managerUsers = {
//      mostrarGeneroUsuario
// }

// importação nomeada
export {mostrarTodosUsuarios, mostrarGeneroUsuario}