import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from './components/Header';
import MovieListItem from './components/MovieListItem';
import NewsListItem from './components/NewsListItem';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isMovieSelected, setIsMovieSelected] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {

  }, [isMovieSelected, news])

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setMovies={setMovies} />
      {!isMovieSelected &&
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieListItem movie={item} setIsMovieSelected={setIsMovieSelected} setNews={setNews} />}
        />
      }
      {isMovieSelected &&
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsListItem newsData={item} />}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;