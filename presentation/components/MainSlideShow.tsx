import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { Text, View } from 'react-native';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface Props {
    movies: Movie[];
    
}

const MainSlideShow = ( { movies }: Props ) => {

    const ref = useRef<ICarouselInstance>(null)

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={ ({item} ) => <Text>item.title</Text> }
        width={ 150 + 50 }
        height={ 350 }
      />
    </View>
  )
}

export default MainSlideShow