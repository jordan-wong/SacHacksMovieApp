import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import searchMovie from './searchMovie';

const App = () => {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    searchMovie("game%20of%20thro")
      .then(movies => setMovies(movies))

  }, [setMovies])

  // console.log(movies);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: 60,
    alignItems: 'center'
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50
  }
});

export default App;