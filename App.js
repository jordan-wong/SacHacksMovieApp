import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import searchMovie from './searchMovie';
import getNews from './getNews'
import getTopRated from './getTopRated'

const App = () => {
  const [movies, setMovies] = useState("");
  const [news, setNews] = useState("");
  const [topRated, setTopRated] = useState("");
  /*useEffect(() => {
    searchMovie("game%20of%20thro")
      .then(movies => setMovies(movies))

  }, [setMovies])*/

  /*useEffect(() => {
    getNews()
      .then(news => setNews(news))

  }, [setNews])*/

  useEffect(() => {
    getTopRated()
      .then(news => setNews(news))

  }, [setTopRated])

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