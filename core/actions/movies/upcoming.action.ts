import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async() => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')
        // console.log(data)
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovi )
        console.log(movies)
        return movies
    } catch(error) {
        console.log(error)
        throw 'Cannot load upcoming movies'
    }

}