import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();

    const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={40} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 md-2'>Movies App</Text>

                { /* Carousel */}
                <MainSlideShow 
                    movies={nowPlayingQuery.data ?? []} 
                />

                { /* Popular */}
                <MovieHorizontalList
                    className='mb-5'
                    movies={popularQuery.data?.pages.flat() ?? []}
                    title='Populares'
                    loadNextPage={ popularQuery.fetchNextPage }
                />

                <MovieHorizontalList
                    className='mb-5'
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    title='Top Rated'
                    loadNextPage={ topRatedQuery.fetchNextPage }
                />

                <MovieHorizontalList
                    className='mb-5'
                    movies={upcomingQuery.data?.pages.flat() ?? []}
                    title='Proximamente'
                    loadNextPage={ upcomingQuery.fetchNextPage }
                />

            </View>
        </ScrollView>
    )
}

export default HomeScreen