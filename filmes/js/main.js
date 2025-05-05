import { getMovies, getGenres } from "./tmdbapi.js";

window.addEventListener("DOMContentLoaded", async () => {
     const painelMovies = document.getElementById("painelMovies");

     var genreMap = {}; 

     // Chama a função para buscar a lista de gêneros
     const genres = await getGenres();
     genres.forEach(genre => {
          genreMap[genre.id] = genre.name;
     });

     // O restante do código permanece o mesmo

    const showMovies = async () => {
        const vetMovies = await getMovies();

        if (vetMovies.length > 0) {

          // Divide os filmes em grupos de 5;
          const chunkSize = 5;

          for (let i = 0; i < vetMovies.length; i += chunkSize) {
               const movieChunk = vetMovies.slice(i, i + chunkSize);

               // Cria uma nova seção para cada grupo de 5 filmes
               const section = document.createElement("section");
               section.className = "movieSection";

               movieChunk.forEach(movie => {
               const movieUn = document.createElement("div");
               movieUn.className = "movieUn";

               const img = document.createElement("img");
               const parag = document.createElement("p"); 
               const genreP = document.createElement("p"); 

               genreP.className = "genero";

               img.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
               parag.textContent = movie.title;

               // Pega os nomes dos gêneros
               const genreNames = movie.genre_ids.map(id => genreMap[id]).join(", ");
               genreP.textContent = "Gêneros: " + genreNames;

               movieUn.appendChild(img);
               movieUn.appendChild(parag);
               movieUn.appendChild(genreP);

               section.appendChild(movieUn);
               });

               painelMovies.appendChild(section); // Adiciona a seção ao painelMovies
            }
        }
    };

    showMovies();
});