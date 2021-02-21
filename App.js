import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import MovieListItem from './components/MovieListItem';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {

  }, [])
  function Item ({id}) {
    return (
      <TouchableOpacity 
        onPress={() =>{
          console.log(id, 'was pressed');
      }}>
        <View style={styles.item}>
          <Text>{id}</Text>
        </View>
      </TouchableOpacity>
    );
    }


  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setMovies={setMovies} />
      <FlatList onPress={() => navigate(DetailsScreen)

      }
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