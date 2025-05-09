import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';



const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovie(+id)

    if(movieQuery.isLoading) {
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
            <Text>{ movie?.title ?? 'No tiene' }</Text>
        </ScrollView>
    )
}

export default MovieScreen