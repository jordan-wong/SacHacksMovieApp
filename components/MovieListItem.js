import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

const MovieListItem = ({ movie }) => {
    return (
        <ImageBackground key={movie.id} style={styles.container}>
            <Text
                style={styles.text}
            >
                {movie.l}
            </Text>
        </ImageBackground>
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