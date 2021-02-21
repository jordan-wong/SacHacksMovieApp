import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBar = ({ setMovies }) => {
    const [input, setInput] = useState("");
    const handleSubmit = (searchInput) => {
        search(searchInput)
            .then(movies => {
                setMovies(movies)
            })
            .catch(err => console.error(err.message))
    }

    return (
        <TextInput
            style={styles.textInput}
            placeholder="Find your movie here . . ."
            onChangeText={text => setInput(text)}
            onSubmitEditing={() => handleSubmit(input)}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        color: 'black',
        paddingTop: 30,
        fontSize: 25,
        textAlign: 'left',
        borderBottomColor: "black",
        borderBottomWidth: 3,
        width: '80%'
    }
});

const search = async (searchInput) => {
    const parsedSearchInput = searchInput.replace(/ /g, '%20');
    return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${parsedSearchInput}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0a82ef8d15msh7ab734a85c08d3cp15dd74jsnca5079df8baa",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(searchResults => {
            if (searchResults.d === undefined) {
                return [];
            }

            const filteredMovies = searchResults.d.filter(movie => {
                return isAMovie(movie.id).then(b => b);
            });

            return filteredMovies;
        })
        .catch(err => console.error("search:", err.message))
}

const isAMovie = async (movieID) => {
    return fetch(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${movieID}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0a82ef8d15msh7ab734a85c08d3cp15dd74jsnca5079df8baa",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
        .then(details => {
            if (details.titleType === undefined) {
                return [];
            }

            return details.titleType.toUpperCase().includes("MOVIE");
        })
        .catch(err => console.error("isAMovie:", err.message))
}

export default SearchBar;