import React from 'react';
import { ImageBackground, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NewsListItem = ({ newsData }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                Linking.openURL(newsData.link);
            }}>
            <ImageBackground source={{ uri: newsData.image.url }} style={styles.container}>
                <Text
                    style={styles.text1}
                >
                    {newsData.head}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
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
    text1: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    }
});

export default NewsListItem;