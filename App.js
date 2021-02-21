import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import getMovie from './getMovie';

const App = () => {
  const [movie, setMovie] = useState("");
  const [news, setNews] = useState([]);
  //console.log('news is:', news)
  // useEffect(() => {
  //   getMovie()
  //     .then(news => setNews(news))
  
  // }, [setNews])
  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=25", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8c2a19fd2emsh89e69e05a30c5f4p16893ejsn234ed2a7ce9e",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => {
                console.error("YEET");
            });
    console.log('randommmawd')
  }, [setNews]);
  //console.log('news is:', news);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{movie.Title}</Text>
      {/*console.log(news.items)*/}
      <Text style={styles.text}>{news.items[1].body}</Text>
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