const getNews = async (searchInput) => {
    try {//https://imdb8.p.rapidapi.com/auto-complete?q=${searchInput}
        fetch("https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7eb871839cmshdeae0929738b5e3p1d14fejsn61cd09bd04c0",
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

export default getNews;
