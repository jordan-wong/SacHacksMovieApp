import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import getMovie from './getMovie';

const App = () => {
  const [movie, setMovie] = useState("");


  useEffect(() => {
    getMovie()
      .then(movie => setMovie(movie))

  }, [setMovie])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{movie.Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: 60,
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50,
  }
});

export default App;