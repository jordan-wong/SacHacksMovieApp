import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>News4Movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        maxHeight: 150
    },
    text: {
        color: 'white',
        fontSize: 50
    }
});

export default Header;