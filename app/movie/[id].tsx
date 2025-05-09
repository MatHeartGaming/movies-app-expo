import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';



const MovieScreen = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>MovieScreen</Text>
        </View>
    )
}

export default MovieScreen