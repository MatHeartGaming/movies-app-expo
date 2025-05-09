import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const upcomingMoviesAction = async({ page = 1, limit = 10 }: Options) => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming', {
            params: {
                page: page,
                limit: limit,
            }
        })
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovi )
        return movies
    } catch(error) {
        console.log(error)
        throw 'Cannot load upcoming movies'
    }

}