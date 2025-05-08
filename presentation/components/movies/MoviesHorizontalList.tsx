import { Movie } from '@/infrastructure/interfaces/movie.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

const MovieHorizontalList = ( { title, movies }: Props ) => {
  return (
    <View>
      <Text className='text-2xl font-bold px-4 mb-2'>{title}</Text>

        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ movies }
            keyExtractor={ (item) => `${item.id}` }
            renderItem={ ({item}) => <MoviePoster id={item.id} poster={ item.poster } /> }
        />

    </View>
  )
}

export default MovieHorizontalList