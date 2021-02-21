const searchMovie = async (searchInput) => {
    try {//https://imdb8.p.rapidapi.com/auto-complete?q=${searchInput}
        fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
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

        // console.log(res);
        const searchResults = await res.json();

        if (searchResults.d === undefined) {
            return [];
        }

        // filter
        const movies = searchResults.d.filter(movie => {
            return movie.q.toUpperCase().includes("MOVIE");
        });

        return movies;
    } catch (err) {
        console.error(err.message);
    }
}

export default searchMovie;