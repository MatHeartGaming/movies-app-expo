import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    console.log('id: ' + id)

    const { movieQuery, castQuery } = useMovie(+id)

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View
                className='flex flex-1 justify-center items-center'
            >
                <Text className='mb-4'>Espere por favorr</Text>
                <ActivityIndicator color='purple' size={30} />
            </View>
        )
    }

    const movie = movieQuery.data;

    return (
        <ScrollView>
            <MovieHeader
                title={movie.originalTitle}
                originalTitle={movie.title}
                poster={movie.poster}
            />
            <MovieDescription
                movie={movie}
            />
            <MovieCast cast={ castQuery.data ?? [] } />
        </ScrollView>
    )
}

export default MovieScreen