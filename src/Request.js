// const API_KEY = "09f8190b6f6e44474bdf16644b916fd7";

const requests = {
     requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=09f8190b6f6e44474bdf16644b916fd7&language=en-US&page=1`,
    
     requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=09f8190b6f6e44474bdf16644b916fd7&language=en-US&page=1`,
    
     requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=09f8190b6f6e44474bdf16644b916fd7&language=en-US&page=2`,
    
     requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=09f8190b6f6e44474bdf16644b916fd7&language=en-US&query=horror&page=2&include_adult=false`,
    
     requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=09f8190b6f6e44474bdf16644b916fd7&language=en-US&page=2`,
};

export default requests ;


// https://www.themoviedb.org/discover/movie?api_key=09f8190b6f6e44474bdf16644b916fd7&with_genres=35