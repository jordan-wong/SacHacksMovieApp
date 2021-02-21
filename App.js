import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from './components/Header';
import MovieListItem from './components/MovieListItem';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setMovies={setMovies} />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
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