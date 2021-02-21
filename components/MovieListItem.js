import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MovieListItem = ({ movie }) => {
    return (
        <View style={styles.container}>
            <Text
                key={movie.id}
                style={styles.text}
            >
                {movie.l}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#00008B',
        width: "100%",
        minHeight: 200,
        paddingTop: 20
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        color: 'white'
    }
});

export default MovieListItem;