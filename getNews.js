const getNews = async (id) => {
    try {//https://imdb8.p.rapidapi.com/auto-complete?q=${searchInput}
        return fetch(`https://imdb8.p.rapidapi.com/title/get-news?tconst=${id}&limit=5`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7eb871839cmshdeae0929738b5e3p1d14fejsn61cd09bd04c0",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => data)
            .catch(err => {
                console.error(err.message);
            });

    } catch (err) {
        console.error(err.message);
    }
}

export default getNews;