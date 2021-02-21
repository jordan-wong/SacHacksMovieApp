import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
      <Text>{`http://www.omdbapi.com/?i=tt1285016&apikey=${process.env.APIKEY}`}</Text>
      {/* <Image source={`http://www.omdbapi.com/?i=tt1285016&apikey=${process.env.apikey}`}/> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //paddingTop: 60,
    alignItems: 'center',
  },
  text:{
    color: 'darkslateblue',
    fontSize: 50,
  }
});

export default App;