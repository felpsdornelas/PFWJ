const requestFetch = (callback) => {
     fetch("https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json")
     .then(resposta => resposta.json())
     .then(dados => callback(dados));
}

export {requestFetch};