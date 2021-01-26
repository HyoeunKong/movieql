import {getMovies,getMovieById,addMovie,deleteMovie} from './db'
const resolvers = {
    Query:{
       movies: (_,{limit,rating}) => getMovies(limit,rating)
    }
    //    movie: (_,{id}) => getMovieById(id)
    // },
    // Mutation:{
    //    addMovie:(_,{name,score}) => addMovie(name,score),
    //    deleteMovie:(_,{id}) => deleteMovie(id)
    // }

}
export default resolvers