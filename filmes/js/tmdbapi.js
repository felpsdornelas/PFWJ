 
const getGenres = async () => {
     const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', {
         headers: {
             accept: 'application/json',
             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzFlNTRhMWJhNWQ2Yjk0YmJhMjdkZWQ1Y2ZmYmVkOSIsIm5iZiI6MTc0NjMyODgyOS41NzMsInN1YiI6IjY4MTZkY2ZkNDc1YTY1ZTEwYmY0ODM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8xGGSt_Pjym97yqC4hockFyVoRxVr4a0FUuMDUz9SY'
         }
     });

     const data = await response.json();
     return data.genres; 
}

const getMovies = async () => {

     const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzFlNTRhMWJhNWQ2Yjk0YmJhMjdkZWQ1Y2ZmYmVkOSIsIm5iZiI6MTc0NjMyODgyOS41NzMsInN1YiI6IjY4MTZkY2ZkNDc1YTY1ZTEwYmY0ODM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8xGGSt_Pjym97yqC4hockFyVoRxVr4a0FUuMDUz9SY'
          }
     }

     try{
          const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
          const data = await response.json();
          return data.results;
     }
     catch(error) {
          console.log(error);
          return [];
     }
}

export { getMovies, getGenres };