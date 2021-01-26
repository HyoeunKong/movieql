
import fetch from "node-fetch"
// let movies = [
//     {
//         id:0,
//         name:"Star Wars - Tthe new one",
//         score:1
//     },
//     {
//         id:1,
//         name:"Avengers = The new one",
//         score:8
//     },
//     {
//         id:2,
//         name:"The Codfather I",
//         score:99
//     },
//     {
//         id:3,
//         name:"Logan",
//         score:2
//     }
// ];

// export const getMovies = () => movies;
// export const getMovieById=(id) => {
//     const filteredMovie = movies.filter((movie) => movie.id === id);
//     return filteredMovie[0];
// };

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         return true
//     }else{
//         return true;
//     }
// }

// export const addMovie = (name,score ) => {
//     const obj = {
//         id : movies.length,
//         name,
//         score,
//     }
//     movies.push(obj);
//     return obj
//     const newMovie = {
//         id:`${movies.length}`,
//         name,
//         score,
//     };
//     movies.push(newMovie);
//     return newMovie;
// }

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit,rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`
    }

    return fetch(REQUEST_URL).then(res => res.json()).then(json => json.data.movies)
}
   
