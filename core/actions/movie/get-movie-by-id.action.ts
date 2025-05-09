import { movieApi } from "@/core/api/movie-api"
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface"
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {

    try {
            const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

            console.log('Peli - HHTP cargada con id: ' + id);
            
            const movie = MovieMapper.fromMovieDbToCompleteMovie(data);
            return movie;
        } catch(error) {
            console.log(error)
            throw 'Cannot load movie with id: ' + id
        }

}