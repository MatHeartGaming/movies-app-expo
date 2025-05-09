import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { MovieDBCreditResponse } from "@/infrastructure/interfaces/credit-response.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number | string): Promise<Cast[]> => {

    try {
        const { data } = await movieApi.get<MovieDBCreditResponse>(`/${movieId}/credits`);
        
        const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity)
        return cast;
        } catch(error) {
            console.log(error)
            throw 'Cannot load cast with id: ' + movieId
        }

}