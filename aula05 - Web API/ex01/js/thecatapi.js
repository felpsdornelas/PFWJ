const getCats = async () => {
     try{
          const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Rqla9kNFAXdZWVyJseD5A6XIppn8EadmlMDVI1kccLeA9L15Ie2cglVJEuwVtNnl');
          const data = await response.json(); 
          // console.log(data[0].url); = traz apenas a url
          return data; // Vetor contendo os gatos 
     }
     catch(error) {
          console.log(error);
          return []; // Vetor vazio erro
     }
}

export default getCats;

// await -> espera 
// response -> constante que receberá resposta da requisão assíncrona
// async -> trata de uma requisão assíncrona
